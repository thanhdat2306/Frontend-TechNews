import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons';
const UpVoteButton = ({ upvote, handle, size = '', gap = '[0px]', pl = 'pl-[0px]' , h = '', pr = 'pr-[0px]'}) => {
return (
    <button className={`flex flex-row items-center justify-center ${size} gap-${gap} ${pl} ${pr} ${h} rounded-[12px] hover:bg-green-700 hover:opacity-90 hover:text-green-200 transition ease-in-out`} onClick={handle}> 
            <FontAwesomeIcon icon={faArrowUp}/>
            <p className='text-[15px] font-bold'>{upvote}</p>
    </button>
    );
    
}

export default UpVoteButton;