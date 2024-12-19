import React, {useDebugValue, useEffect,useState} from 'react';
import ContentCard from '../card/contentcard.jsx';
import CustomButton from '../button/custombutton.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter} from '@fortawesome/free-solid-svg-icons';
const ListContentCard = ({width = 'w-[84.2%]'}) => {
      // Sử dụng state để lưu trữ dữ liệu
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Hàm fetch dữ liệu từ API
    const fetchPosts = async () => {
        try {
            const [postsResponse, imagesResponse] = await Promise.all([
                fetch('https://jsonplaceholder.typicode.com/posts?_limit=20'),
                fetch('https://jsonplaceholder.typicode.com/photos?_limit=20')
              ]);
        const postsData = await postsResponse.json();
        const imagesData = await imagesResponse.json();
        const combinedData = postsData.map((post, index) => ({
            title: post.title,
            url: imagesData[index]?.url
        }));
        console.log(imagesData)
        setData(combinedData);
        setLoading(false); // Tắt chế độ loading
        } catch (error) {
        console.error('Error fetching users:', error);
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
                        {data.map((da) => (
                            <ContentCard Title = {da.title} Image = {da.url}/>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default ListContentCard;