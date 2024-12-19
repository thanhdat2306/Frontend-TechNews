import React from "react";

let specificDate = new Date('2024-10-10T10:30:00');
const getTimeNow = () => {
    return specificDate.toLocaleTimeString();
};

const getFormattedDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

const formattedDate = getFormattedDate(specificDate);

const DatePost = ({Data, PostStyle = false}) => {
    return (

        <>
        {PostStyle ? (
            <div className='text-gray-400 border-gray-700'>
            <   p>{formattedDate} - 14m read time - From DevsNoob</p>
            </div>
        ) : (
            <div className='text-gray-400 border-gray-700 text-[12px] pl-2 w-full'>
                <p>{formattedDate} - 14m read time</p>
            </div>
        )}
        </>
    );
}
export default DatePost;