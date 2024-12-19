import React from 'react';
// #a8b3cf
const SquareButton = ({ content, handleClick }) => {
    return (
        <button className='size-10 rounded-xl transition ease-in-out bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-[#333] dark:bg-[#1c1f26] dark:text-[#A8B3CF] dark:hover:bg-gray-800 dark:hover:text-white text-[20px]'
        onClick={handleClick}>
            {content}
        </button>
    );
};

export default SquareButton;