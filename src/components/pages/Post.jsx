import React from 'react';
import Techlogo from '../../assets/react.svg';
import Testimage from '../../assets/Testing.jpg';
import Tag from '../card/tag.jsx';
import DatePost from '../card/datepost.jsx';
import ControlCard from '../card/controlcard.jsx';
import Comment from '../comment/comment.jsx';
import UserComment from '../comment/user_comment.jsx';
import ListComment from '../comment/listcomment.jsx';
import UserCard from '../card/usercard.jsx';
const Post = ({User = Techlogo, Title = 'This is Title', Tags = ['#Tag1', '#Tag2', '#Tag3'], Date, Image = Testimage, Comments = 12, Upvote = 0}) => {
    return (
        <div className='flex flex-row w-[84.2%] px-[130px] text-black dark:text-white font-[17px]'>
            <main className='flex flex-col pt-[32px] px-[32px] border-x-[1px] border-gray-400 dark:border-gray-700 w-[66.5%] gap-[24px]'>
                <span className='text-[32px] font-bold mt-[24px]'>{Title}</span>
                <div className='border-l-[1px] border-purple-500 px-[16px] '>
                    <p>
                    <span className='text-purple-500'>TLDR</span> Investigate slow query performance through a simple visualization tool instead of deciphering MySQL's complex EXPLAIN output. Most developers find EXPLAIN difficult to read because it was designed for internal use by MySQL developers to debug and tune query execution.
                    </p>
                </div>
                <div className='flex flex-row gap-[10px]'>
                    {Tags.map((tag) => (
                            <Tag key={tag} tagName={tag} PostStyle ={true}/>
                        ))}
                </div>
                <div>
                    <DatePost PostStyle = {true}/>
                </div>
                <div >
                    <img src={Image} alt="" className='rounded-xl'/>
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-row gap-[10px] text-gray-400 my-[10px]'> 
                        <span>{Upvote} Upvotes</span>
                        <span>{Comments} Comments</span>
                    </div>
                    <ControlCard vote={Upvote} comment={Comments} PostStyle = {true}/>
                </div>
                <UserComment Text='Share your thoughts' Type='Text'/>
                <ListComment/>
            </main>
            <aside className='flex flex-col w-[33.5%] border-r-[1px] border-gray-400 dark:border-gray-700 px-[16px] py-[32px]'>
                <UserCard/>
            </aside>
        </div>

    );
}

export default Post;