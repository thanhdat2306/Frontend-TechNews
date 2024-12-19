import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// #a8b3cf
const ProfileBtnCard = ({Icon, Tag, Handle, Content}) => {
    return (
        <li className='flex justify-center items-center transition ease-in-out h-[40px] hover:bg-gray-300 hover:text-[#333] dark:hover:bg-gray-700 dark:hover:text-[#fff] rounded-[12px]'>
            <button className='flex flex-row items-center justify-start gap-[12px] w-[100%] h-[28px] px-[16px]' onClick={Handle}>
                <div className='flex justify-center items-center size-5'>
                    <FontAwesomeIcon icon={Icon} className='text-[16px]'/>
                    {Content}
                </div>
                <span>{Tag}</span>
            </button>
        </li>
    );
};

export default ProfileBtnCard;