import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage} from '@fortawesome/free-regular-svg-icons';
import Tag from './tag';
import { useNavigate } from 'react-router-dom';
import Techlogo from '../../assets/react.svg';
import Testimage from '../../assets/Testing.jpg';
import DatePost from './datepost.jsx';
import ControlCard from './controlcard.jsx';
import ReadCard from './readcard.jsx';
// #a8b3cf
const ContentCard = ({User = Techlogo, Title = 'This is Title', Tags = ['Tag1', 'Tag2', 'Tag3'], Date, Image = Testimage, Comments = 12, Upvote = 0}) => {
    const navigate = useNavigate();
    const [showReadCard, setShowReadCard] = useState(false);

    const handleCardClick = () => {
        // setShowReadCard(true);
        // console.log(ReadCard);
        navigate('/post');
        console.log('Logout');
    };
    return (
        <>
        <button className='flex flex-col p-[8px] rounded-[16px] w-[26.7%] min-w-[24.8%] h-[386px] border-[1px] bg-slate-100 text-[#333] border-gray-400 dark:bg-[#1c1f26] dark:text-[#fff] dark:border-gray-800 hover:border-gray-600' onClick={handleCardClick}>
            <div className='flex flex-col px-[6px] justify-between items-start flex-1'>
                <div className='flex flex-col w-full'>
                    <div className='flex justify-center items-center size-8'>
                        <img className='rounded-[50%]' src={User} alt="" />
                    </div>
                    <span className='text-2xl text-wrap font-bold text-left w-full max-h-[64px] truncate'>{Title}</span>
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-row gap-[10px] py-[8px]'>
                        {Tags.map((tag) => (
                            <Tag key={tag} tagName={tag}/>
                        ))}
                    </div>
                    <div className='pb-[8px]'>
                        <DatePost Data = {Date}/>
                    </div>
                </div>
            </div>
            <div className='w-[100%]'>
                <img src={Image} alt="" className='rounded-xl object-cover w-[100%] max-h-[160px]'/>
            </div>
            <ControlCard vote={Upvote} comment={Comments}/>
        </button>
        {showReadCard && <ReadCard />}             
        </>
    );
};

export default ContentCard;