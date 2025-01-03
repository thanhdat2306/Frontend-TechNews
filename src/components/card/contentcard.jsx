import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tag from './tag';
import DatePost from './datepost.jsx';
import ControlCard from './controlcard.jsx';
import ReadCard from './readcard.jsx';
import Techlogo from '../../assets/react.svg';
import Testimage from '../../assets/Testing.jpg';

const ContentCard = ({
  ID,
  User = Techlogo,
  Title = 'This is Title',
  Tags = ['Tag1', 'Tag2', 'Tag3'],
  Date,
  Image = Testimage,
  Comments = 12,
  Upvote = 0,
  Author,
  Description,
  Url,
  CommentsCount,
  ReactionsCount,
  ReadingTime,
  UserProfileImage,
  Organization
}) => {
  const navigate = useNavigate();
  const [showReadCard, setShowReadCard] = useState(false);

  const handleNavigate = () => {
    navigate(`/post/${ID}`);
  };

  // Ensure Tags is an array
  const tagsArray = Array.isArray(Tags) ? Tags : [];
  console.log(tagsArray);
  return (
    <>
      <div className='flex flex-col p-[8px] rounded-[16px] w-full md:w-[26.7%] min-w-[262px] h-[386px] border-[1px] bg-slate-100 text-[#333] border-gray-400 dark:bg-[#1c1f26] dark:text-[#fff] dark:border-gray-800 hover:border-gray-600'>
        <div className='flex flex-col px-[6px] justify-between items-start flex-1'>
          <div className='flex flex-col w-full'>
            <div className='flex justify-center items-center size-8'>
              <img className='rounded-full w-full h-full' src={UserProfileImage || User} alt="" />
            </div>
            <span className='text-2xl text-wrap font-bold text-left w-full max-h-[64px] truncate cursor-pointer' onClick={handleNavigate}>{Title}</span>
          </div>
          <div className='flex flex-col items-start w-full'>
            <div className='flex flex-row gap-[10px] py-[8px]'>
                {tagsArray.slice(0, 3).map((tag) => (
                    <Tag key={tag.id} tagName={`#${tag.name}`} />
                ))}
                {tagsArray.length > 3 && (
                    <Tag key="more-tags" tagName={`+${tagsArray.length - 3} more`} />
                )}
            </div>
            <div className='pb-[8px]'>
                <DatePost Data={Date} />
            </div>
          </div>
        </div>
        <div className='w-[100%] cursor-pointer' onClick={handleNavigate}>
          <img src={Image} alt="" className='rounded-xl object-cover w-[100%] max-h-[160px]' />
        </div>
        <ControlCard vote={ReactionsCount} comment={CommentsCount} postId={ID} />
      </div>
      {showReadCard && <ReadCard />}
    </>
  );
};

export default ContentCard;