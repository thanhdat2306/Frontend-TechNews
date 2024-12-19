import React from 'react';
import TestUser from '../../assets/react.svg';
// #a8b3cf
const UserComment = ({Text ,Icon, Handle, Type }) => {
    return (
        <label className='flex group flex-row justify-center items-center  text-[16px] border placeholder:text-black  dark:placeholder:text-slate-400 bg-gray-200 dark:bg-[#181c21] border-gray-400 dark:border-gray-700 rounded-[16px] shadow-sm focus-within:outline-none hover:border-sky-500 focus-within:border-sky-500 focus-within:ring-sky-500 focus:ring-1 cursor-text'>
            <div htmlFor="search-input" className='size-10 flex justify-center items-center m-[12px]'>
                <img src={TestUser} alt='errorUser' />
            </div>
            <input className='w-full bg-gray-200 dark:bg-[#181c21] text-wrap break-words focus:outline-none' placeholder={Text} type={Type} name='search'/>
            <button className='mr-[12px] px-[20px] bg-white dark:bg-slate-800 border-[1px] border-gray-700 rounded-[16px] h-[40px]'><span className='font-bold'>Post</span></button>
        </label>
        
    );
};

export default UserComment;