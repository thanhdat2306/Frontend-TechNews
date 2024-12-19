import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown} from '@fortawesome/free-solid-svg-icons';
const DownVoteButton = ({ text, handle, size = '', gap = '[0px]', px='[0px]', py='[0px]' }) => {
return (
    <button className={`flex flex-row items-center justify-center ${size} gap-${gap} px-${px} py-${py} rounded-[12px] hover:bg-red-700 hover:opacity-90 hover:text-red-200 transition ease-in-out`} onClick={handle}> 
            <FontAwesomeIcon icon={faArrowDown}/>
            <p className='text-[15px] font-bold'>{text}</p>
    </button>
    );
    
}

export default DownVoteButton;