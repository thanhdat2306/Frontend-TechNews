import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ProfileBtnCard from '../button/button_profilecard.jsx';
import react from '../../assets/react.svg';
import { faMessage} from '@fortawesome/free-regular-svg-icons';
import { faUser, faCircleHalfStroke, faUserFriends, faRightFromBracket, faPen } from '@fortawesome/free-solid-svg-icons';
const ProfileCard = (ImgUser) => {
    // const [showCustomize, setShowCustomize] = useState(false);

    // const handleCustomizeClick = () => {
    //     setShowCustomize(!showCustomize);
    // };
    const navigate = useNavigate();
    const handleRemoveDarkMode = () => {
        const isDarkMode = document.body.classList.toggle('dark');
        if (isDarkMode) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    };

    // Check the local storage for dark mode preference on component mount

    const handleLogoutClick = () => {
        navigate('/login');
        console.log('Logout');
    };
    return (
        <div className='flex flex-col border-[1px] bg-gray-200 text-[#4B5563] border-gray-300 dark:bg-[#181c21] dark:text-gray-400 dark:border-gray-700 text-[16px] rounded-[24px]'>
            <div className='flex flex-col border-b-[1px] border-gray-300 dark:border-gray-700 '>
                <div className='border-[3px] rounded-[24px] border-white dark:bg-[#333] dark:border-black w-[254.4px]'>
                    <div className='flex rounded-[20px] size-24 border-[3px] border-white dark:border-black justify-center items-center'>
                        <img src={react} alt="imguser" className='w-[100%]' />
                    </div>
                </div>
                <div className='flex flex-col flex-1 p-[16px] gap-</div>[8px]'>
                    <p className='text-[#333] dark:text-[#fff] text-[22px] font-bold'>Lê Hoàng Việt</p>
                    <div className='text-[12px]'>@hivite - Joined March 2023</div>
                </div>
            </div>
            <ul className='flex flex-col py-[8px]'>
                <ProfileBtnCard Tag='Profile' Icon={faUser} />
                <ProfileBtnCard Tag='Account detail' Icon={faPen} />
                <ProfileBtnCard Tag='Invite' Icon={faUserFriends} />
                <ProfileBtnCard Tag='Darkmode' Icon={faCircleHalfStroke} Handle={handleRemoveDarkMode}/>
                <ProfileBtnCard Tag='Log out' Icon={faRightFromBracket} Handle={handleLogoutClick}/>
            </ul>
        </div>
    );
}
export default ProfileCard;