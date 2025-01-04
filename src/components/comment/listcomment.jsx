import React from 'react';
import Comment from './comment.jsx';

const ListComment = ({ comments }) => {
    return (
        <div className='flex flex-col gap-[20px]'>
            {comments.map((item) => (
                <Comment
                key={item._id}
                Name={item.authorId?.profile?.name || 'Unknown'}
                Image={item.authorId?.profile?.avatar || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
                Upvote={item.upvotesCount || 0} // Assuming upvotesCount is part of the comment data
                Date={new Date(item.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                Content={item.content}
                />
            ))}
        </div>
    );
};

export default ListComment;