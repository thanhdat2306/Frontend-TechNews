import React from "react";
import UpVoteButton from "../button/upvote_button.jsx";
import DownVoteButton from "../button/downvote_button.jsx";
import CommentButton from "../button/comment_button.jsx";
import BookmarkButton from "../button/bookmark_button.jsx";
import ShareButton from "../button/share_button.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown} from '@fortawesome/free-solid-svg-icons';
import { faMessage} from '@fortawesome/free-regular-svg-icons';
import { faBookmark} from '@fortawesome/free-regular-svg-icons';
import { faLink} from '@fortawesome/free-solid-svg-icons';
const ControlCardComment = ({vote, comment = 0}) => {
    return (

        <div className='flex rounded-[16px] flex-row gap-[12px] items-center text-[16px] text-gray-500 dark:text-[#A8B3CF]'>
            <div className='flex flex-row items-center rounded-[16px] h-[100%]'>
                <UpVoteButton upvote={vote} size = 'size-8'/>
                <DownVoteButton size = 'size-8'/>
            </div>
            <CommentButton size='size-8'/>
            <BookmarkButton size='size-8'/>
            <ShareButton size='size-8'/>
        </div>

    );
}

export default ControlCardComment;