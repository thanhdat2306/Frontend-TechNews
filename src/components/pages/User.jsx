import React from 'react';
import TestUser from '../../assets/react.svg';
import UserDetailCard from '../card/user_detailcard.jsx';
import ListContentCard from '../body/listcontentcard.jsx';
// #a8b3cf
const User = ({Image = TestUser ,Name ='Xuân Quý', Handle, Type}) => {
    return (
        <main className='flex flex-col px-[40px] py-[20px] gap-[40px] w-[84.2%]'> 
            <UserDetailCard />
            <div className='flex flex-col gap-[20px]'>
                <span className=' text-[18px] dark:text-white text-black font-bold'>All post</span>
                <ListContentCard width = 'w-[100%]'/>
            </div>
        </main>
            
    );
};

export default User;