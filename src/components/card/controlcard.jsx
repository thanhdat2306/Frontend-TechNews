import React from "react";
import UpVoteButton from '../button/upvote_button.jsx';
import DownVoteButton from '../button/downvote_button.jsx';
import CommentButton from "../button/comment_button.jsx";
import BookmarkButton from "../button/bookmark_button.jsx";
import ShareButton from "../button/share_button.jsx";

const ControlCard = ({ vote, comment = 0, PostStyle = false, postId }) => {
  return (
    <>
      {PostStyle ? (
        <div className='flex border-[1px] border-gray-700 rounded-[16px] flex-row justify-between items-center text-[20px] text-gray-500 dark:text-[#A8B3CF] mt-[8px]'>
          <div className='flex flex-row items-center border-[1px] border-gray-700 rounded-[16px] p-[8px] bg-gray-200 dark:bg-[#1c1f26] h-[100%] gap-[10px]'>
            <UpVoteButton upvote={vote} size='size-10' postId={postId} />
            <DownVoteButton size='size-10' postId={postId} />
          </div>
          <CommentButton comment='Comment' size='size-10' gap='[2px]' />
          <BookmarkButton text='Bookmark' size='size-10' gap='[2px]' postId={postId}/>
          <ShareButton text='Share' size='size-10' gap='[2px]' pr='[16px]' />
        </div>
      ) : (
        <div className='flex flex-row justify-between w-full items-center text-[20px] text-gray-500 dark:text-[#A8B3CF] mt-[8px]'>
          <div className='flex flex-row items-center rounded-[12px] bg-gray-200 dark:bg-[#2e333e] h-[100%]'>
            <UpVoteButton upvote={vote} gap='[12px]' pl='pl-[6px]' pr='pr-[12px]' h='h-full' postId={postId} />
            <div className='border-r-gray-300 dark:border-r-gray-500 border-r-[1px] h-[70%]'></div>
            <DownVoteButton size='size-8' postId={postId} />
          </div>
          <CommentButton comment={comment} size='size-8' />
          <BookmarkButton size='size-8' postId={postId}/>
          <ShareButton size='size-8' />
        </div>
      )}
    </>
  );
}

export default ControlCard;