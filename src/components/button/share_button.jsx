import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink} from '@fortawesome/free-solid-svg-icons';
const ShareButton = ({ text, handle, size = '', gap = '[0px]', pr ='[0px]'}) => {
return (
    <div className={`group flex flex-row items-center justify-center gap-${gap} pr-${pr}`}>
        <button className={`flex ${size} rounded-[12px] items-center justify-center group-hover:bg-purple-700 group-hover:opacity-90 group-hover:text-purple-200 transition ease-in-out`} onClick={handle}>
            <FontAwesomeIcon icon={faLink}/>
        </button>
        <p className='text-[15px] font-bold group-hover:text-purple-400'>{text}</p>
    </div>
    );

    
}

export default ShareButton;