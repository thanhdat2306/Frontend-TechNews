import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { API_ENDPOINTS } from '../../config';
import { fetchUpdatedUser } from '../api/user';

const UpVoteButton = ({ size, gap, pl, pr, h, upvote, postId }) => {
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(upvote);
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.upvotedPosts.includes(postId)) {
      setIsUpvoted(true);
    }
  }, [postId]);
  
  const handleUpvote = async () => {
    const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
    const userId = JSON.parse(localStorage.getItem('user'))._id; // Assuming user ID is stored in local storage
    try {
      const response = await fetch(API_ENDPOINTS.UPVOTE.replace(':id', postId), {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`, // Include the token in the headers
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        setIsUpvoted(!isUpvoted);
        setUpvoteCount(prevCount => {
          const newCount = isUpvoted ? prevCount - 1 : prevCount + 1;
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
        console.error('Error upvoting the post:', response.statusText);
      }
    } catch (error) {
      console.error('Error upvoting the post:', error);
    }
  };

  return (
    <button
      className={`flex flex-row items-center justify-center ${size} gap-${gap} ${pl} ${pr} ${h} rounded-[12px] transition ease-in-out ${
        isUpvoted ? 'bg-green-700 text-green-200' : 'hover:bg-green-700 hover:opacity-90 hover:text-green-200'
      }`}
      onClick={handleUpvote}
    >
      <FontAwesomeIcon icon={faArrowUp} />
      <p className={`text-[15px] font-bold transition-transform duration-300 ${animate ? 'transform scale-125' : ''}`}>
        {upvoteCount}
      </p>
    </button>
  );
};

export default UpVoteButton;