import React from 'react';
import TestUser from '../../assets/react.svg';
import { useNavigate } from 'react-router-dom';
// #a8b3cf
const UserCard = ({Image = TestUser ,Name ='Xuân Quý', Handle, Type}) => {
    const navigate = useNavigate();
    const HandleNavigate = () => { 
        navigate('/user'); 
        console.log('To User');
    };
    return (
        <button className='flex flex-row p-[12px] justify-between items-center text-[16px] text-gray-500 dark:text-white border-[1px] border-gray-400 dark:border-gray-700 rounded-[16px]' onClick={HandleNavigate}>
            <div className='flex flex-row justify-center items-center gap-[10px]'>
                <div className='size-10 rounded-[50%] flex justify-center items-center'>
                    <img src={Image} alt='error' />
                </div>
                <div className='flex flex-col'>
                    <span className=' text-black dark:text-white font-bold'>{Name}</span>
                    <span className='text-[12px] text-left'>@xuanquy</span>
                </div>
            </div>
            <button className='h-[32px] transition ease-in-out px-[12px] flex items-center border-[1px] font-bold border-black  dark:border-white text-black dark:text-white hover:bg-slate-200 dark:hover:bg-slate-900 rounded-[8px]'>Follow</button>
        </button>
        
    );
};

export default UserCard;