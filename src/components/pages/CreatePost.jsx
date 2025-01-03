import React, { useState } from 'react';
import CKEditor from '../ckeditor/ckeditor.jsx';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const maxTitleLength = 250;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle post creation logic here, e.g., send data to the server
        console.log('Title:', title);
        console.log('Content:', content);
        console.log('Thumbnail:', thumbnail);
    };

    const handleThumbnailChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setThumbnail(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        <div className='flex flex-col justify-center w-[84.2%] p-4'>
            <header className='flex flex-row px-1'>
                <ul className='relative flex flex-row'>
                    <button className='relative p-2 py-4 font-bold' type='button'>
                        <span className='inline rounded px-3 py-1.5 bg-blue-500 text-white'>New post</span>
                    </button>
                    {/* <button className='relative p-2 py-4 text-center font-bold text-gray-500' type='button'>
                        <span className='inline rounded px-3 py-1.5'>Share a link</span>
                    </button> */}
                </ul>
            </header>
            <div className='px-5 mt-6 w-full '>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <div className='relative '>
                    <label className='group w-[240px] h-[160px] relative flex items-center justify-center overflow-hidden border border-gray-300 rounded-xl bg-gray-100 text-gray-500 cursor-pointer'>
                        <input type='file' name='image' accept='image/png,image/jpeg' className='hidden' onChange={handleThumbnailChange} />
                        {thumbnail ? (
                            <img src={thumbnail} alt='Thumbnail' className='w-full h-full object-cover' />
                        ) : (
                            <>
                                <svg width='1em' height='1em' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 pointer-events-none'>
                                    <path d='M13 4.2a4 4 0 013.619 2.293c.305.036.615.076.929.12A4 4 0 0121 10.573v4.856a4 4 0 01-3.452 3.962c-1.987.275-3.836.412-5.548.412-1.712 0-3.561-.137-5.548-.412A4 4 0 013 15.43v-4.856a4 4 0 013.452-3.962 49.6 49.6 0 01.93-.12A3.998 3.998 0 0111 4.2h2zM12 9a4 4 0 100 8 4 4 0 000-8zm6 .2a1 1 0 100 2 1 1 0 000-2z' fill='currentColor' fillRule='evenodd'></path>
                                </svg>
                                <span className='ml-1.5 flex flex-row font-bold'>Thumbnail</span>
                            </>
                        )}
                    </label>
                    </div>
                    <div className='group flex flex-col items-stretch mt-6 w-full'>
                        <div className='relative flex rounded-2xl flex-row items-center h-12 px-4 overflow-hidden border-l-2 dark:text-gray-400 border-gray-700 dark:bg-gray-700 bg-white hover:border-l-2 dark:hover:border-white cursor-text group-hover:text-white dark:focus-within:text-white dark:focus-within:border-white'>
                            <input
                                placeholder='Post Title*'
                                name='title'
                                id='title'
                                maxLength={maxTitleLength}
                                size='1'
                                className='self-stretch text-ellipsis group-hover:placeholder-white focus:text-white focus:placeholder-white  min-w-0 bg-transparent focus:outline-none w-full h-full px-2'
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <div className='ml-2 font-bold'>
                                {maxTitleLength - title.length}
                            </div>
                        </div>
                    </div>
                    <div className='relative flex flex-col rounded dark:bg-gray-700 bg-white mt-4'>
                        <CKEditor className='w-full h-96'
                            initialData={content}
                            onChange={(data) => setContent(data)}
                        />
                    </div>
                    <div className='relative flex flex-col items-center tablet:flex-row mt-5'>
                        <button type='submit' aria-busy='false' className='btn focus:outline-none inline-flex cursor-pointer select-none flex-row items-center border no-underline shadow-none transition duration-200 ease-in-out justify-center font-bold h-10 px-5 rounded bg-blue-500 text-white ml-auto w-full tablet:mt-0 tablet:w-32 laptop:flex'>
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;