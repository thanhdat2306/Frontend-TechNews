import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileBtnCard from '../button/button_profilecard.jsx';
import { faUser, faCircleHalfStroke, faUserFriends, faRightFromBracket, faPen } from '@fortawesome/free-solid-svg-icons';

const ProfileCard = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        setUser(userData);
    }, []);

    const handleRemoveDarkMode = () => {
        const isDarkMode = document.body.classList.toggle('dark');
        if (isDarkMode) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    };

    const handleProfileClick = () => {
        navigate('/profile');
    }

    const handleAccountDetailClick = () => {
        navigate('/edit-profile');
    }

    const handleLogoutClick = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
        navigate('/login');
        console.log('Logout');
    };

    if (!user) {
        return null; // Hoặc hiển thị một loading spinner
    }

    return (
        <div className='flex flex-col border-[1px] bg-gray-200 text-[#4B5563] border-gray-300 dark:bg-[#181c21] dark:text-gray-400 dark:border-gray-700 text-[16px] rounded-[24px]'>
            <div className='flex flex-col border-b-[1px] border-gray-300 dark:border-gray-700 '>
                <div className='border-[3px] rounded-[24px] border-white dark:bg-[#333] dark:border-black w-[254.4px]'>
                    <div className='flex rounded-[20px] size-24 border-[3px] border-white dark:border-black justify-center items-center'>
                        <img src={user.profile.avatar} alt="imguser" className='w-[100%] rounded-[20px] ' />
                    </div>
                </div>
                <div className='flex flex-col flex-1 p-[16px] gap-[8px]'>
                    <p className='text-[#333] dark:text-[#fff] text-[22px] font-bold'>{user.profile.name}</p>
                    <div className='text-[12px]'>{user.username} - Joined {new Date(user.createdAt).toLocaleDateString()}</div>
                </div>
            </div>
            <ul className='flex flex-col py-[8px]'>
                <ProfileBtnCard Tag='Profile' Icon={faUser} Handle={handleProfileClick}/>
                <ProfileBtnCard Tag='Account detail' Icon={faPen} Handle={handleAccountDetailClick}/>
                <ProfileBtnCard Tag='Invite' Icon={faUserFriends} />
                <ProfileBtnCard Tag='Darkmode' Icon={faCircleHalfStroke} Handle={handleRemoveDarkMode} />
                <ProfileBtnCard Tag='Log out' Icon={faRightFromBracket} Handle={handleLogoutClick} />
            </ul>
        </div>
    );
};

export default ProfileCard;