import React, { useState, useEffect } from 'react';
import { API_ENDPOINTS } from '../../config';

const UserComment = ({ postId, addComment }) => {
  const [user, setUser] = useState(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
  }, []);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(API_ENDPOINTS.COMMENT, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content, postId })
      });
      const result = await response.json();
      if (result.success) {
        console.log('Comment posted successfully:', result.data);
        setContent(''); // Clear the input field after successful submission
        addComment(result.data); // Add the new comment to the list
      } else {
        console.error('Error posting comment:', result.message);
      }
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  if (!user) {
    return null; // Or a loading spinner
  }

  return (
    <form onSubmit={handleCommentSubmit} className='flex group flex-row justify-center items-center text-[16px] border placeholder:text-black dark:placeholder:text-slate-400 bg-gray-200 dark:bg-[#181c21] border-gray-400 dark:border-gray-700 rounded-[16px] shadow-sm focus-within:outline-none hover:border-sky-500 focus-within:border-sky-500 focus-within:ring-sky-500 focus:ring-1 cursor-text'>
      <div className='size-10 flex justify-center items-center m-[12px]'>
        <img className='rounded-full' src={user.profile.avatar || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt='User Avatar' />
      </div>
      <input
        className='w-full bg-gray-200 dark:bg-[#181c21] text-wrap break-words focus:outline-none'
        placeholder='Share your thoughts'
        type='text'
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type='submit' className='mr-[12px] px-[20px] bg-white dark:bg-slate-800 border-[1px] border-gray-700 rounded-[16px] h-[40px]'>
        <span className='font-bold'>Post</span>
      </button>
    </form>
  );
};

export default UserComment;