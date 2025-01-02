import React, { useEffect, useState } from 'react';
import ContentCard from '../card/contentcard.jsx';
import CustomButton from '../button/custombutton.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const ListContentCard = ({ width = 'w-[84.2%]' }) => {
  // Sử dụng state để lưu trữ dữ liệu
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(data);
  // Hàm fetch dữ liệu từ API
  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/posts/search?size=5&page=1&sortField=createdAt&sortType=desc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({}) // Thêm body nếu cần thiết
      });
  
      console.log('Response status:', response.status); // Kiểm tra trạng thái phản hồi
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Result:', result); // Kiểm tra dữ liệu trả về
      if (result.success) {
        setData(result.data);
      } else {
        console.error('Error fetching posts:', result.message);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false); // Tắt chế độ loading
    }
  };

  // Sử dụng useEffect để gọi API khi component được mount
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {loading ? (
        <p className='flex justify-center w-[100%] text-[26px]'>Loading...</p>
      ) : (
        <div className={`flex flex-col px-[40px] py-[20px] gap-[40px] ${width}`}>
          <CustomButton content={
            <>
              <FontAwesomeIcon icon={faFilter} />
              <span className='text-[16px] font-bold'>Feed Settings</span>
            </>
          } />
          <div className='flex flex-row flex-wrap justify-center items-center gap-[30px] w-[100%]'>
            {data.map((da, index) => (
                <ContentCard
                ID={da._id}
                key={index} 
                Title={da.title} 
                Image={da.thumbnail} 
                Author={da.authorId} 
                Date={da.createdAt} 
                Description={da.content} 
                Url={da.url} 
                CommentsCount={da.totalCommentsCount} 
                ReactionsCount={da.upvotesCount} 
                ReadingTime={da.readingTime} 
                Tags={da.tagsId} 
                UserProfileImage={da.userProfileImage} 
                Organization={da.organization ? da.organization.name : null} 
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ListContentCard;