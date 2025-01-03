import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { API_ENDPOINTS } from '../../config';
import { fetchUpdatedUser } from '../api/user';

const DownVoteButton = ({ size, gap, px, py, text, postId }) => {
  const [isDownvoted, setIsDownvoted] = useState(false);
  const [downvoteCount, setDownvoteCount] = useState(0); // Initialize downvote count
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.downvotedPosts.includes(postId)) {
      setIsDownvoted(true);
    }
  }, [postId]);

  const handleDownvote = async () => {
    const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
    const userId = JSON.parse(localStorage.getItem('user'))._id; // Assuming user ID is stored in local storage
    try {
      const response = await fetch(API_ENDPOINTS.DOWNVOTE.replace(':id', postId), {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`, // Include the token in the headers
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        setIsDownvoted(!isDownvoted);
        setDownvoteCount(prevCount => {
          const newCount = isDownvoted ? prevCount - 1 : prevCount + 1;
          setAnimate(true);
          setTimeout(() => setAnimate(false), 300); // Duration of the animation
          return newCount;
        });
        // Fetch and update user data in local storage
        const result = await fetchUpdatedUser(userId);
        if (!result.success) {
          console.error('Error fetching updated user data:', result.message);
        }
      } else {
        console.error('Error downvoting the post:', response.statusText);
      }
    } catch (error) {
      console.error('Error downvoting the post:', error);
    }
  };

  return (
    <button
      className={`flex flex-row items-center justify-center ${size} gap-${gap} px-${px} py-${py} rounded-[12px] transition ease-in-out ${
        isDownvoted ? 'bg-red-700 text-red-200' : 'hover:bg-red-700 hover:opacity-90 hover:text-red-200'
      }`}
      onClick={handleDownvote}
    >
      <FontAwesomeIcon icon={faArrowDown} />
      <p className={`text-[15px] font-bold transition-transform duration-300 ${animate ? 'transform scale-125' : ''}`}>
      </p>
    </button>
  );
};

export default DownVoteButton;