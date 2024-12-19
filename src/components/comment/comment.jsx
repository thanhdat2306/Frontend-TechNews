import React from 'react';
import { faBookmark} from '@fortawesome/free-regular-svg-icons';
import { faComment} from '@fortawesome/free-regular-svg-icons';
import TestUser from '../../assets/react.svg';
import ControlCardCommmet from './controlcard_comment.jsx';
//array have 2 properties: Icon and Tag
const Comment = ({Name ='Lê Hoàng Việt',Image = TestUser ,Upvote = 12,Date = '2 month ago',Content ='this might be a powerful'}) => {
    return (
        <div className='flex flex-col gap-[12px] p-[16px] text-[15px] rounded-[24px] border-[1px] text-black dark:text-white  border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-900 transition ease-in-out '>
            <div className='flex flex-row items-center gap-[6px]'>
                <div className='size-10 rounded-[12px] flex justify-center items-center'>
                    <img src={TestUser} alt='error' />
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold'>{Name}</span>
                    <span className='text-gray-500'>@hoangvietle - <span>{Date}</span></span>
                </div>
            </div>
            <span>{Content}</span>
            <div className='flex flex-row justify-between items-center mt-[8px]'>
                <ControlCardCommmet />
                <button className='text-gray-700 dark:text-gray-400'>{Upvote} upvotes</button>
            </div>
        </div>
    );
};

export default Comment;