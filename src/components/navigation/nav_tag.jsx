import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const NavTag = ({Icon, Tag}) => {
    return (
        <li className='transition ease-in-out hover:bg-gray-300 hover:text-[#333] dark:hover:bg-gray-700 dark:hover:text-[#fff]'>
            <button className='flex flex-row items-center justify-start gap-[12px] w-[100%] h-[28px] px-[12px]'>
                <div className='flex justify-center items-center size-5'>
                    <FontAwesomeIcon icon={Icon} className='text-[16px]'/>
                </div>
                <span>{Tag}</span>
            </button>
        </li>
    );
};

export default NavTag;