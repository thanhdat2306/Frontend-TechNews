import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage} from '@fortawesome/free-solid-svg-icons';
const CommentButton = ({ comment, handle, size = '', gap = '[0px]'}) => {
return (
    <div className={`group flex flex-row items-center justify-center gap-${gap}`}>
        <button className={`flex ${size} rounded-[12px] items-center justify-center group-hover:bg-sky-700 group-hover:opacity-90 group-hover:text-sky-200 transition ease-in-out`} onClick={handle}>
            <FontAwesomeIcon icon={faMessage}/>
        </button>
        <p className='text-[15px] font-bold group-hover:text-sky-400'>{comment}</p>
    </div>
    );

    
}

export default CommentButton;