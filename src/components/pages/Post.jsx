import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Techlogo from '../../assets/react.svg';
import Testimage from '../../assets/Testing.jpg';
import Tag from '../card/tag.jsx';
import DatePost from '../card/datepost.jsx';
import ControlCard from '../card/controlcard.jsx';
import Comment from '../comment/comment.jsx';
import UserComment from '../comment/user_comment.jsx';
import ListComment from '../comment/listcomment.jsx';
import UserCard from '../card/usercard.jsx';

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        // Fetch post data by ID
        fetch(`http://localhost:3000/api/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
            .catch(error => console.error('Error fetching post:', error));
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    const {
        title,
        description,
        createdAt,
        thumbnail,
        totalCommentsCount,
        upvotesCount,
        tagsId,
        content,
        authorId,
        organization
    } = post;

    return (
        <div className='flex flex-row w-[84.2%] px-[130px] text-black dark:text-white font-[17px]'>
            <main className='flex flex-col pt-[32px] px-[32px] border-x-[1px] border-gray-400 dark:border-gray-700 w-[66.5%] gap-[24px]'>
                <span className='text-[32px] font-bold mt-[24px]'>{title}</span>
                <div className='border-l-[1px] border-purple-500 px-[16px] '>
                    <p>
                        <span className='text-purple-500'>TLDR</span> {description}
                    </p>
                </div>
                <div className='flex flex-row gap-[10px]'>
                    {tagsId.map((tag) => (
                        <Tag key={tag} tagName={`#${tag}`} PostStyle={true} />
                    ))}
                </div>
                <div>
                    <DatePost Data={createdAt} PostStyle={true} />
                </div>
                <div>
                    <img src={thumbnail} alt="" className='rounded-xl' />
                </div>
                <div dangerouslySetInnerHTML={{ __html: content }} />
                <div className='flex flex-col'>
                    <div className='flex flex-row gap-[10px] text-gray-400 my-[10px]'>
                        <span>{upvotesCount} Upvotes</span>
                        <span>{totalCommentsCount} Comments</span>
                    </div>
                    <ControlCard vote={upvotesCount} comment={totalCommentsCount} PostStyle={true} />
                </div>
                
                <UserComment Text='Share your thoughts' Type='Text' />
                <ListComment />
            </main>
            <aside className='flex flex-col w-[33.5%] border-r-[1px] border-gray-400 dark:border-gray-700 px-[16px] py-[32px]'>
                <UserCard user={authorId} organization={organization} />
            </aside>
        </div>
    );
}

export default Post;