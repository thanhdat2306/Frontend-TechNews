import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark} from '@fortawesome/free-solid-svg-icons';
const BookmarkButton = ({ text, handle, size = '', gap = '[0px]'}) => {
return (
    <div className={`group flex flex-row items-center justify-center gap-${gap}`}>
        <button className={`flex ${size} rounded-[12px] items-center justify-center group-hover:bg-orange-700 group-hover:opacity-90 group-hover:text-orange-200 transition ease-in-out`} onClick={handle}>
            <FontAwesomeIcon icon={faBookmark}/>
        </button>
        <p className='text-[15px] font-bold group-hover:text-orange-400'>{text}</p>
    </div>
    );

    
}

export default BookmarkButton;