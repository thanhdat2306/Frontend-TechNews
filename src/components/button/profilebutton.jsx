import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot} from '@fortawesome/free-solid-svg-icons';
import react from '../../assets/react.svg';
import ProfileCard from '../card/profilecard.jsx';
// #a8b3cf
const ProfileButton = () => {
    const [isProfileCardVisible, setProfileCardVisible] = useState(false);

    const handleClick = () => {
        setProfileCardVisible(!isProfileCardVisible);
    };

    return (
        <>
        <div className='flex flex-row px-[4px] rounded-xl bg-[#1c1f26] text-[#fff] justify-center items-center gap-[10px]'>
            <button 
                className='flex flex-row text-[#fc538d] rounded-[12px] h-[100%] min-w-[50px] justify-center items-center gap-[4px] hover:bg-[#2e333e]' 
                onClick={handleClick}
            >
                <FontAwesomeIcon icon={faCircleDot}/>
                <span className='font-bold'>0</span>
            </button>
            <button 
                className='flex flex-row justify-center items-center gap-[4px]' 
                onClick={handleClick}
            >
                <FontAwesomeIcon icon={faCircleDot} className='text-[#7147ed]'/>
                <span className='font-bold'>0</span>
                <div><img src={react} alt='eror' /></div>
            </button>
        </div>
        {isProfileCardVisible && (
                <div id='profile-card-container' className='absolute right-3 top-14 z-50'>
                    <ProfileCard />
                </div>
        )}
        </>
        
    );
};
export default ProfileButton;