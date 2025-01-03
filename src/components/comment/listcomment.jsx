import React from 'react';
import Comment from './comment.jsx';

const ListComment = ({ comments }) => {
    return (
        <div className='flex flex-col gap-[20px]'>
            {comments.map((item) => (
                <Comment
                    key={item._id}
                    Name={item.authorId.profile.name}
                    Image={item.authorId.profile.avatar}
                    Upvote={item.upvotesCount || 0} // Assuming upvotesCount is part of the comment data
                    Date={new Date(item.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    Content={item.content}
                />
            ))}
        </div>
    );
};

export default ListComment;