import React from 'react';
import Techlogo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import SquareButton from '../button/squarebutton.jsx';
import ProfileButton from '../button/profilebutton.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell} from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
//--theme-background-default: #0e1217;
//--theme-background-subtle: #1c1f26;\
//--theme-text-tertiary: var(--theme-accent-salt-default); #fff
//    --theme-text-quaternary: 
//color-mix(in srgb, var(--theme-accent-salt-default), transparent 36%); #a8b3cf
const Header = () => {
    return (
        <header className='flex flex-row items-center justify-between sticky top-0 z-50 px-[16px] py-[12px]  border-b-[1px]   bg-white text-[#333] dark:bg-[#0e1217] dark:text-[#fff] border-gray-700'>
            <a href='./'><img src={Techlogo} alt="Tech logo" className='h-[30px] w-auto'/></a>
            <div className='flex flex-row gap-[12px]'>
                <SquareButton content={
                    <Link to="/create">
                        <FontAwesomeIcon icon={faPlus} className='icon-border' />
                    </Link>   
                } />
                <SquareButton content={
                    <Link to="/notifications">
                        <FontAwesomeIcon icon={faBell} className='icon-border' />
                    </Link>  
                } />
                <ProfileButton />
            </div>
        </header>
        // <header className='flex flex-row items-center justify-between px-[16px] py-[16px] bg-[#0e1217] text-[#fff]'>
        // <img src={Techlogo} alt="Tech logo" className='h-[30px] w-auto'/>
        // <nav>
        //     <Link to="/">Home</Link>
        //     <Link to="/profile">Profile</Link>
        //     <Link to="/settings">Settings</Link>
        // </nav>
        // <SquareButton content={
        //     <FontAwesomeIcon icon={faBell} className='icon-border' />
        // } />
        // </header>
    );
};

export default Header;