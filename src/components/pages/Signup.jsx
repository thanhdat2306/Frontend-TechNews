import React from 'react';
import Logo from '../../assets/logo.svg';
import InputSign from '../button/inputsign';
import CustomButton from '../button/custombutton.jsx';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock, faUserLock } from '@fortawesome/free-solid-svg-icons';
const Signup = () => {
    return (
        <div className='h-[100vh] text-[#a8b3cf]'>
            <div className='px-[40px] py-[32px]'>
                <a href="./"><img src={Logo} alt="erorr logo" className='h-[30px]' /></a>
            </div>
            <div className='flex flex-col items-center w-[31.6%] mx-auto p-[60px] gap-[40px]'>
                <p className='text-[40px] text-white font-bold'>Sign up</p>
                <form action='' className='flex flex-col w-full gap-[25px]'>
                    <InputSign Icon={faEnvelope} Text='Email' Type='email'/>
                    <InputSign Icon={faLock} Text='Create Password' Type='password'/>
                    <InputSign Icon={faUserLock} Text='Input Password' Type='password'/>
                </form>
                <div className='flex flex-row justify-between items-center w-full'>
                    <CustomButton white={true} width='w-[36.1%]' content={
                        <span className='text-[16px] font-bold'>Sign up</span>
                    }/>
                </div>
                <div className='flex justify-center pt-[14px] border-t-[1px] w-full border-gray-700'>
                    <span className='text-[14px]' text-center>Already using TechNew? <a href="./login" className='text-white underline'> Login</a></span>
                </div>
            </div>

            <footer className='flex flex-row text-[12px] justify-center gap-[10px]'>
                <a href="./">@ 2024 DevsNoob</a>
                <a href="./">Guidelines</a>
                <a href="./">Tags</a>
                <a href="./">Explore</a>
                <a href="./">Source</a>
                <a href="./">Techology</a>
                <a href="./">Leaderboard</a>
            </footer>
        </div>
    );
};

export default Signup;