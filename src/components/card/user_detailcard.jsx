import React from 'react';
import TestUser from '../../assets/react.svg';
import CustomButton from '../button/custombutton.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan} from '@fortawesome/free-solid-svg-icons';
import Tag from '../card/tag.jsx';
// #a8b3cf
const UserDetailCard = ({Image = TestUser ,Name ='Xuân Quý'}) => {
    return (
        <div className='flex flex-col gap-[20px] p-[16px] text-[16px] border-[1px] rounded-[12px] text-[#333] border-gray-400 dark:text-[#fff] dark:border-gray-800'>
            <div className='flex flex-row items-center gap-[10px]'>
                <div className='size-10 rounded-[50%] flex justify-center items-center'>
                        <img src={Image} alt='error' />
                </div>
                    <span className='text-[24px] font-bold dark:text-white text-[#333]'>{Name}</span>
            </div>
            <div className='flex flex-row items-center gap-[10px]'>
                <CustomButton white = {true} px = 'px-[12px]' py = 'py-[4px]'
                content = {
                    <span className='text-[16px] font-bold'>Follow</span>
                }/>
                <CustomButton px = 'px-[12px]' py = 'py-[4px]'           
                content = {
                    <>  
                        <FontAwesomeIcon icon={faBan} className='text-[16px]'/>
                        <span className='text-[16px] font-bold'>Block</span>
                     </>
                    
                }/>
            </div>
            <span>Game Central is a platform offering insights, reviews, and news updates on the gaming industry. From new releases and gaming hardware reviews to interviews with industry experts, GC covers everything gaming enthusiasts need to stay informed and entertained. Readers can delve into detailed analyses of game mechanics, storytelling techniques, and emerging trends, gaining insights into the ever-evolving world of gaming.</span>
            <div className='flex flex-col gap-[10px]'>
                <span className='text-[14px] text-[#333] dark:text-gray-400'> Relative Tags:</span>
                <div className='flex flex-row gap-[8px]'>
                    <Tag tagName='#tag1' PostStyle/>
                    <Tag tagName='#tag2' PostStyle/>
                    <Tag tagName='#tag3' PostStyle/>
                    <Tag tagName='#tag4' PostStyle/>
                </div>
            </div>
        </div>
        
    );
};

export default UserDetailCard;