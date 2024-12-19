import React from 'react';
import Logo from '../../assets/logo.svg';
import InputSign from '../button/inputsign';
import CustomButton from '../button/custombutton.jsx';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
const Login = () => {
    return (
        <div className='h-[100vh] text-[#a8b3cf]'>
            <div className='px-[40px] py-[32px]'>
                <a href="./"><img src={Logo} alt="erorr logo" className='h-[30px]' /></a>
            </div>
            <div className='flex flex-col items-center w-[31.6%] mx-auto p-[60px] gap-[40px]'>
                <p className='text-[40px] text-white font-bold'>Log in</p>
                <form action='' className='flex flex-col w-full gap-[25px]'>
                    <InputSign Icon={faEnvelope} Text='Email' Type='email'/>
                    <InputSign Icon={faLock} Text='Password' Type='password'/>
                </form>
                <div className='flex flex-row justify-between items-center w-full'>
                    <a href='' className='underline'>Forgot password?</a>
                    <CustomButton white={true} width='w-[36.1%]' content={
                        <span className='text-[16px] font-bold'>Log in</span>
                    }/>
                </div>
                <div className='flex justify-center pt-[12px] border-t-[1px] w-full border-gray-700'>
                    <span className='text-[14px]' text-center>Not a member yet? <a href="./signup" className='text-white underline'> Sign up</a></span>
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

export default Login;