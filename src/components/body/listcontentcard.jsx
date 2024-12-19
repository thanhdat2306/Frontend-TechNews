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
      const response = await fetch('https://dev.to/api/articles');
      const postsData = await response.json();
      console.log(postsData);
      const combinedData = postsData.map((post) => ({
        type_of: post.type_of,
        id: post.id,
        title: post.title,
        description: post.description,
        readable_publish_date: post.readable_publish_date,
        slug: post.slug,
        path: post.path,
        url: post.url,
        comments_count: post.comments_count,
        public_reactions_count: post.public_reactions_count,
        collection_id: post.collection_id,
        published_timestamp: post.published_timestamp,
        positive_reactions_count: post.positive_reactions_count,
        cover_image: post.cover_image,
        social_image: post.social_image,
        canonical_url: post.canonical_url,
        created_at: post.created_at,
        edited_at: post.edited_at,
        crossposted_at: post.crossposted_at,
        published_at: post.published_at,
        last_comment_at: post.last_comment_at,
        reading_time_minutes: post.reading_time_minutes,
        tag_list: post.tag_list,
        tags: post.tags,
        user: {
          name: post.user.name,
          username: post.user.username,
          twitter_username: post.user.twitter_username,
          github_username: post.user.github_username,
          user_id: post.user.user_id,
          website_url: post.user.website_url,
          profile_image: post.user.profile_image,
          profile_image_90: post.user.profile_image_90
        },
        organization: post.organization ? {
          name: post.organization.name,
          username: post.organization.username,
          slug: post.organization.slug,
          profile_image: post.organization.profile_image,
          profile_image_90: post.organization.profile_image_90
        } : null
      }));

      setData(combinedData);
      setLoading(false); // Tắt chế độ loading
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false);
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
                ID = {da.id}
                key={index} 
                Title={da.title} 
                Image={da.cover_image} 
                Author={da.user.name} 
                Date={da.readable_publish_date} 
                Description={da.description} 
                Url={da.url} 
                CommentsCount={da.comments_count} 
                ReactionsCount={da.public_reactions_count} 
                ReadingTime={da.reading_time_minutes} 
                Tags={da.tag_list} 
                UserProfileImage={da.user.profile_image} 
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