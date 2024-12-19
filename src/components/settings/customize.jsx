import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
//array have 2 properties: Icon and Tag
const Customize = () => {
    return (
        <div className='bg-purple-500 opacity-90 relative z-100 w-[100vw] h-[100vh] border-[1px] dark:border-gray-700'>
            <div className='flex flex-col justify-center items-center rounded-[20px] text-gray-500 border-b-[1px] dark:border-gray-700'>
                <div className='flex flex-row px-[24px] py-[16px] justify-between items-center'>
                    <p className='text-[26px] text-[#333] dark:text-white font-bold'>Customize</p>
                    <FontAwesomeIcon icon={faXmark} className='text-[20px]'/>
                </div>
                <div className='flex flex-col gap-[12px] px-[24px] py-[16px]'>
                    <p>Theme</p>
                    <div class="flex items-center gap-x-3">
                        <input type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                        <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Same as email</label>
                    </div>
                    <div class="flex items-center gap-x-3">
                        <input type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                        <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">No push notifications</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customize;