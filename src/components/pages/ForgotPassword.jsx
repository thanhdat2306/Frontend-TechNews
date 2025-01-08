import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import InputSign from '../button/inputsign';
import CustomButton from '../button/custombutton.jsx';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { sendVerificationCode, verifyCodeAndResetPassword } from '../api/auth';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    const handleSendVerificationCode = async (e) => {
        e.preventDefault();
        const result = await sendVerificationCode(email);
        if (result.success) {
            setStep(2);
        } else {
            console.error('Error sending verification code:', result.message);
        }
    };

    const handleVerifyCodeAndResetPassword = async (e) => {
        e.preventDefault();
        const result = await verifyCodeAndResetPassword(email, verificationCode, newPassword);
        if (result.success) {
            navigate('/login');
        } else {
            console.error('Error verifying code or resetting password:', result.message);
        }
    };

    return (
        <div className='h-[100vh] text-[#a8b3cf]'>
            <div className='px-[40px] py-[32px]'>
                <a href="./"><img src={Logo} alt="error logo" className='h-[30px]' /></a>
            </div>
            <div className='flex flex-col items-center w-[31.6%] mx-auto p-[60px] gap-[40px]'>
                <p className='text-[40px] text-white font-bold'>Forgot Password?</p>
                {step === 1 ? (
                    <form onSubmit={handleSendVerificationCode} className='flex flex-col w-full gap-[25px]'>
                        <InputSign Icon={faEnvelope} Text='Email' Type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <CustomButton white={true} width='w-[100%]' content={<span className='text-[16px] font-bold'>Send verification code</span>} />
                    </form>
                ) : (
                    <form onSubmit={handleVerifyCodeAndResetPassword} className='flex flex-col w-full gap-[25px]'>
                        <InputSign Icon={faEnvelope} Text='Verification Code' Type='text' value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
                        <InputSign Icon={faLock} Text='New Password' Type='password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                        <CustomButton white={true} width='w-[100%]' content={<span className='text-[16px] font-bold'>Reset Password</span>} />
                    </form>
                )}
                <div className='flex flex-col items-center justify-center pt-[12px] border-t-[1px] w-full border-gray-700'>
                    <span className='text-[14px]' text-center>Remembered your password? <a href="./login" className='text-white underline'> Log in</a></span>
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

export default ForgotPassword;