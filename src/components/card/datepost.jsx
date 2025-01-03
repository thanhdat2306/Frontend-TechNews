import React from "react";

const getFormattedDate = (date) => {
    if (!date) return 'Invalid Date';
    const parsedDate = new Date(date);
    if (isNaN(parsedDate)) return 'Invalid Date';
    return parsedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

const DatePost = ({ Data, PostStyle = false }) => {
    const formattedDate = getFormattedDate(Data);
    return (
        <>
            {PostStyle ? (
                <div className='text-gray-400 border-gray-700'>
                    <p>{formattedDate} - 14m read time - From DevsNoob</p>
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