import React, { useState } from 'react';


const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const maxTitleLength = 250;


    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý logic tạo bài viết ở đây, ví dụ: gửi dữ liệu lên server
        console.log('Title:', title);
        console.log('Content:', content);
        console.log('Thumbnail:', thumbnail);
        
    };

    const handleThumbnailChange = (e) => {
        setThumbnail(e.target.files[0]);
    };

    return (
        <div className='flex flex-col items-center justify-center w-full h-full p-4'>
            <header className='flex flex-row px-1'>
                <ul className='relative flex flex-row'>
                    <button className='relative p-2 py-4 text-center font-bold' type='button'>
                        <span className='inline rounded px-3 py-1.5 bg-blue-500 text-white'>New post</span>
                    </button>
                    <button className='relative p-2 py-4 text-center font-bold text-gray-500' type='button'>
                        <span className='inline rounded px-3 py-1.5'>Share a link</span>
                    </button>
                    <div className='absolute bottom-0 mx-auto h-0.5 w-12 -translate-x-1/2 rounded bg-blue-500 transition-all ease-linear' style={{ left: '53.4875px' }}></div>
                </ul>
            </header>
            <div className='px-5 mt-6 w-full max-w-3xl'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <div className='relative w-full'>
                        <label className='group relative flex items-center justify-center overflow-hidden border border-gray-300 w-full h-24 rounded bg-gray-100 text-gray-500 cursor-pointer'>
                            <input type='file' name='image' accept='image/png,image/jpeg' className='hidden' onChange={handleThumbnailChange} />
                            <svg width='1em' height='1em' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 pointer-events-none'>
                                <path d='M13 4.2a4 4 0 013.619 2.293c.305.036.615.076.929.12A4 4 0 0121 10.573v4.856a4 4 0 01-3.452 3.962c-1.987.275-3.836.412-5.548.412-1.712 0-3.561-.137-5.548-.412A4 4 0 013 15.43v-4.856a4 4 0 013.452-3.962 49.6 49.6 0 01.93-.12A3.998 3.998 0 0111 4.2h2zM12 9a4 4 0 100 8 4 4 0 000-8zm6 .2a1 1 0 100 2 1 1 0 000-2z' fill='currentColor' fillRule='evenodd'></path>
                            </svg>
                            <span className='ml-1.5 flex flex-row font-bold'>Thumbnail</span>
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
                        <header className='flex flex-row px-1 border-b border-gray-300 bg-gray-100'>
                            <ul className='relative flex flex-row'>
                                <button className='relative p-2 py-4 text-center font-bold' type='button'>
                                    <span className='inline rounded px-3 py-1.5 bg-blue-500 text-white'>Write</span>
                                </button>
                                <button className='relative p-2 py-4 text-center font-bold text-gray-500' type='button'>
                                    <span className='inline rounded px-3 py-1.5'>Preview</span>
                                </button>
                                <div className='absolute bottom-0 mx-auto h-0.5 w-12 -translate-x-1/2 rounded bg-blue-500 transition-all ease-linear' style={{ left: '39.6313px' }}></div>
                            </ul>
                        </header>
                        <textarea
                            rows='11'
                            placeholder='Share your thoughts'
                            name='content'
                            className='flex max-h-commentBox flex-1 bg-transparent placeholder-gray-400 outline-none p-4'
                            maxLength='10000'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                        <div className='m-2 flex justify-end font-bold text-gray-500'>10000</div>
                    </div>
                    <div className='flex flex-row items-center gap-3 border-t border-gray-300 p-3 px-4 text-gray-500'>
                        <button type='button' className='btn focus:outline-none inline-flex cursor-pointer select-none flex-row items-center border no-underline shadow-none transition duration-200 ease-in-out justify-center font-bold h-6 px-2 rounded bg-gray-200'>
                            <svg width='1em' height='1em' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 pointer-events-none'>
                                <path d='M7.856 4.002L15.872 4c1.783 0 2.43.186 3.082.534.652.349 1.163.86 1.512 1.512.348.652.534 1.299.534 3.082v5.744c0 1.783-.186 2.43-.534 3.082a3.635 3.635 0 01-1.512 1.512c-.652.348-1.299.534-3.082.534H8.128c-1.783 0-2.43-.186-3.082-.534a3.635 3.635 0 01-1.512-1.512c-.33-.618-.514-1.23-.532-2.81L3 9.128c0-1.783.186-2.43.534-3.082a3.635 3.635 0 011.512-1.512c.618-.33 1.23-.514 2.81-.532zm8.268 1.5L8.128 5.5l-.484.005c-1.036.02-1.458.12-1.89.352-.39.209-.688.506-.897.897-.264.494-.357.975-.357 2.374v5.744c0 1.4.093 1.88.357 2.374.209.39.506.688.897.897.494.264.975.357 2.374.357h.236a.757.757 0 01.056-.077l3.413-4.16a1.75 1.75 0 012.336-.339l1.523 1.034a.25.25 0 00.338-.054l3.374-4.345a.75.75 0 01.096-.102v-1.33l-.005-.483c-.02-1.036-.12-1.458-.352-1.89a2.135 2.135 0 00-.897-.897c-.463-.248-.914-.345-2.122-.356zM19.5 12.88l-2.285 2.944a1.75 1.75 0 01-2.365.375l-1.523-1.034a.25.25 0 00-.334.049L10.296 18.5h5.576l.484-.005c1.036-.02 1.458-.12 1.89-.352.39-.209.688-.506.897-.897.264-.494.357-.975.357-2.374V12.88zM8 7a2 2 0 110 4 2 2 0 010-4z' fill='currentColor' fillRule='evenodd'></path>
                            </svg>
                            <span className='hidden laptop:flex'>Attach images by dragging & dropping</span>
                        </button>
                        <input type='file' className='hidden' name='content_upload' accept='image/png,image/jpeg' />
                        <span className='flex gap-3 ml-auto'>
                            <button type='button' className='btn focus:outline-none inline-flex cursor-pointer select-none flex-row items-center border no-underline shadow-none transition duration-200 ease-in-out justify-center font-bold h-6 w-6 p-0 rounded bg-gray-200'>
                                <svg width='1em' height='1em' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 pointer-events-none'>
                                    <path d='M7.928 8.99a4.007 4.007 0 015.521-.139l.145.138.708.709a1.002 1.002 0 01-1.329 1.494l-.087-.078-.708-.708a2.004 2.004 0 00-2.724-.102l-.11.102L5.59 14.16a2.004 2.004 0 00-.102 2.724l.102.11 1.417 1.416c.747.747 1.936.78 2.723.102l.11-.102 1.063-1.063a1.002 1.002 0 011.494 1.33l-.078.087-1.062 1.062a4.007 4.007 0 01-5.522.138l-.145-.138-1.416-1.416a4.007 4.007 0 01-.138-5.522l.138-.145L7.928 8.99zm4.815-4.816a4.007 4.007 0 015.522-.138l.145.138 1.416 1.416a4.007 4.007 0 01.138 5.522l-.138.145-3.754 3.754a4.007 4.007 0 01-5.521.138l-.145-.138-.708-.709a1.002 1.002 0 011.329-1.494l.087.078.708.708c.747.747 1.937.78 2.724.102l.11-.102L18.41 9.84c.747-.747.78-1.936.102-2.724l-.102-.11-1.417-1.416a2.004 2.004 0 00-2.723-.102l-.11.102-1.063 1.063a1.002 1.002 0 01-1.494-1.33l.078-.087 1.062-1.062z' fill='currentColor' fillRule='evenodd'></path>
                                </svg>
                            </button>
                            <button type='button' className='btn focus:outline-none inline-flex cursor-pointer select-none flex-row items-center border no-underline shadow-none transition duration-200 ease-in-out justify-center font-bold h-6 w-6 p-0 rounded bg-gray-200'>
                                <svg width='1em' height='1em' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 pointer-events-none'>
                                    <path d='M20.25 13.375a3.125 3.125 0 01-5.723 1.738A4 4 0 017.5 12.5v-1a4 4 0 016.501-3.122L14 8.25a.75.75 0 011.493-.102l.007.102v5.125a1.625 1.625 0 003.244.14l.006-.14V9.75a5.25 5.25 0 00-5.034-5.246L13.5 4.5h-3a5.25 5.25 0 00-5.246 5.034l-.004.216v4.5a5.25 5.25 0 005.034 5.246l.216.004h3a.75.75 0 01.102 1.493L13.5 21h-3a6.75 6.75 0 01-6.746-6.513l-.004-.237v-4.5a6.75 6.75 0 016.513-6.746L10.5 3h3a6.75 6.75 0 016.746 6.513l.004.237v3.625zM11.5 9A2.5 2.5 0 009 11.5v1a2.5 2.5 0 105 0v-1A2.5 2.5 0 0011.5 9z' fill='currentColor' fillRule='evenodd'></path>
                                </svg>
                            </button>
                            <a target='_blank' rel='noopener noreferrer' href='https://r.daily.dev/markdown-guide' className='btn focus:outline-none inline-flex cursor-pointer select-none flex-row items-center border no-underline shadow-none transition duration-200 ease-in-out justify-center font-bold h-6 w-6 p-0 rounded bg-gray-200'>
                                <svg width='1em' height='1em' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 pointer-events-none'>
                                    <path d='M17 4a4 4 0 014 4v8a4 4 0 01-4 4H7a4 4 0 01-4-4V8a4 4 0 014-4h10zm0 1.5H7A2.5 2.5 0 004.5 8v8A2.5 2.5 0 007 18.5h10a2.5 2.5 0 002.5-2.5V8A2.5 2.5 0 0017 5.5zm-5.62 4.364l.833 4a.75.75 0 11-1.468.306l-.48-2.295-.65.936a.75.75 0 01-1.167.081l-.068-.086-.626-.92-.486 2.287a.75.75 0 01-.788.592l-.101-.014a.75.75 0 01-.578-.89l.85-4a.75.75 0 011.353-.267l1 1.467 1.025-1.472a.75.75 0 011.35.275zm4.64-.656a.75.75 0 01.75.75v2.193l.32-.318a.75.75 0 111.058 1.062l-1.592 1.587-.09.078a.728.728 0 01-.291.132l-.104.014h-.104a.747.747 0 01-.478-.219l-1.59-1.594a.75.75 0 111.063-1.059l.308.309V9.958a.75.75 0 01.75-.75z' fill='currentColor' fillRule='evenodd'></path>
                                </svg>
                            </a>
                        </span>
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