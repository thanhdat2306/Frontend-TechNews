import React from 'react';
import TestUser from '../../assets/react.svg';
import Comment from './comment.jsx';
//array have 2 properties: Icon and Tag
const MockData = [{Name: 'Test1',Image: TestUser ,Upvote: 12,Date: '2 month ago',Content: 'this might be a powerful lib when developing simple applications with just the frontend communicating with DB for simple data persistance'},
        {Name: 'Anh Vũ',Image: TestUser ,Upvote: 12,Date: '2 month ago',Content: 'Năm nay gengu sẽ vô địch CKTG'},
        {Name: 'Lê Hoàng Việt',Image: TestUser ,Upvote: 16,Date: '3 month ago',Content: 'T1 nack gengu 3-0'},
        {Name: 'Xuân Quý',Image: TestUser ,Upvote: 0,Date: '4 month ago',Content: 'T1 mãi đỉnh top server 5 cúp'},
];
const ListComment = ({Array}) => {
    Array = MockData;
    return (
        <div className='flex flex-col gap-[20px]'>
            {Array.map((item) => (
                <Comment Name={item.Name} Image={item.Image} Upvote={item.Upvote} Date={item.Date} Content={item.Content}/>
            ))}
        </div>
    );
};

export default ListComment;