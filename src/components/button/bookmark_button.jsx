import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { API_ENDPOINTS } from '../../config';
import { fetchUpdatedUser } from '../api/user';

const BookmarkButton = ({ text, size = '', gap = '[0px]', postId }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.bookmarkedPosts.includes(postId)) {
      setIsBookmarked(true);
    }
  }, [postId]);
  
  const handleBookmark = async () => {
    const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
    const userId = JSON.parse(localStorage.getItem('user'))._id; // Assuming user ID is stored in local storage
    try {
      const response = await fetch(API_ENDPOINTS.BOOKMARK.replace(':id', postId), {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`, // Include the token in the headers
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        setIsBookmarked(!isBookmarked);
        // Fetch and update user data in local storage
        const result = await fetchUpdatedUser(userId);
        if (!result.success) {
          console.error('Error fetching updated user data:', result.message);
        }
      } else {
        console.error('Error bookmarking the post:', response.statusText);
      }
    } catch (error) {
      console.error('Error bookmarking the post:', error);
    }
  };

  return (
    <div className={`group flex flex-row items-center justify-center gap-${gap}`}>
      <button
        className={`flex ${size} rounded-[12px] items-center justify-center transition ease-in-out ${
          isBookmarked ? 'bg-orange-700 text-orange-200' : 'group-hover:bg-orange-700 group-hover:opacity-90 group-hover:text-orange-200'
        }`}
        onClick={handleBookmark}
      >
        <FontAwesomeIcon icon={faBookmark} />
      </button>
      <p className={`text-[15px] font-bold ${isBookmarked ? 'text-orange-400' : 'group-hover:text-orange-400'}`}>{text}</p>
    </div>
  );
};

export default BookmarkButton;