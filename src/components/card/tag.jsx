import React from "react";

const Tag = ({ tagName, Link='./', PostStyle=false }) => {
    return (

        <>
            {PostStyle ? (
                <div className='font-bold rounded-[10px] py-[4px] px-[8px] text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-600 transition ease-in-out'>
                <a href={Link}>{tagName}</a>
            </div>
            ) : (
                <div className='rounded-[10px] text-gray-500 p-[4px] border-[1px] border-gray-700 text-[12px]'>
                    <a href={Link}>{tagName}</a>
                </div>
            )}
        </>
    );
}

export default Tag;