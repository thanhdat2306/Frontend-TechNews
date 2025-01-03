import React from 'react';
import ProfilePost from '../card/profilepost';

const posts = [
    { id: 1, title: 'First Post', content: 'This is the first post content' },
    { id: 2, title: 'Second Post', content: 'This is the second post content' },
    // Add more posts as needed
];

const Profile = () => {
    return (
        <div class="mx-auto flex flex-row items-stretch pt-0 h-[100vh] ">
        <div class="flex flex-col bg-background-primary border-r  border-gray-700 min-w-[40vw]">
            {/* <div class="flex flex-row items-center border-b border-border-subtlest-tertiary px-4 py-2 gap-1">
                <button class="btn focus-outline inline-flex cursor-pointer select-none flex-row
            items-center border no-underline shadow-none transition
            duration-200 ease-in-out typo-callout justify-center font-bold h-10 px-5 rounded-12 btn-tertiary">Cancel</button>
                <button form="submit-profile" class="btn focus-outline inline-flex cursor-pointer select-none flex-row
            items-center border no-underline shadow-none transition
            duration-200 ease-in-out typo-callout justify-center font-bold h-10 px-5 rounded-12 btn-primary ml-auto">Submit</button>
            </div> */}
            <div class="flex flex-col gap-4 p-4">
                {posts.map(post => (
                    <ProfilePost key={post.id} title={post.title} content={post.content} />
                ))}
            </div>
        </div>
        
        <div class="my-4 flex flex-col gap-6 laptop:my-0 w-full">
    <header class="flex h-12 items-center px-4 -mb-2">
        <h2 class="mr-auto font-bold typo-body">Profile</h2>
        <div class="text-text-tertiary typo-callout">
            <a href="/edit-profile" class="btn focus-outline inline-flex cursor-pointer select-none flex-row
                items-center border no-underline shadow-none transition
                duration-200 ease-in-out typo-callout justify-center font-bold h-8 px-3 rounded-10 btn-secondary">
                Edit profile
            </a>
        </div>
    </header>
    <div class="relative flex h-24 mx-4">
        <div class="absolute left-0 top-0 -z-1 size-full rounded-26 bg-background-subtle"></div>
        <img class="object-cover w-24 h-24 rounded-26 border-4 border-background-default" loading="eager" type="avatar" fetchpriority="auto" alt="mxq's profile" src="https://lh3.googleusercontent.com/a/ACg8ocKbBUklR2SIj2h3bHS1DCyOiZEyPq1hA8hGDTR_tgjHEBEinyY=s96-c"/>
    </div>
    <div class="relative flex flex-col gap-6 px-4">
        <div class="flex flex-col text-text-quaternary typo-caption2 gap-3">
            <div class="flex items-center">
                <h2 class="max-w-full shrink truncate font-bold text-text-primary typo-title3">Xuân Quý</h2>
            </div>
            <div class="flex items-center">
                <span class="text-text-secondary typo-footnote max-w-full shrink truncate">@mxq</span>
                <span class="mx-1">•</span>
                <div class="text-text-quaternary typo-caption2">
                    Joined&nbsp;<time datetime="2024-10-30T00:20:40.480Z">October 2024</time>
                </div>
            </div>
        </div>
        <div class="flex flex-wrap items-center text-text-tertiary typo-footnote">
            <div class="flex flex-col gap-3">
                <div class="flex flex-row gap-2">
                    <div class="flex items-center gap-1">
                        <b class="text-text-primary typo-subhead">0</b>
                        <span class="capitalize">Followers</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <b class="text-text-primary typo-subhead">0</b>
                        <span class="capitalize">Following</span>
                    </div>
                </div>
                <div class="flex flex-row gap-2">
                    <div class="flex items-center gap-1">
                        <b class="text-text-primary typo-subhead">10</b>
                        <span class="capitalize">Reputation</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <b class="text-text-primary typo-subhead">2</b>
                        <span class="capitalize">Views</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <b class="text-text-primary typo-subhead">0</b>
                        <span class="capitalize">Upvotes</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

    </div>
    );
    
};

export default Profile;