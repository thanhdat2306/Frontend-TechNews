import React from "react";
import ControlCard from './controlcard.jsx';

const ProfileCard = () => {
    return (
        <div class="group relative w-full flex flex-col py-6 px-4 border-t border-border-subtlest-tertiary rounded-16 hover:bg-surface-float">
            <a title="asdasd" href="https://app.daily.dev/posts/asdasd-iillxgtyn" class="focus-outline absolute inset-0 block h-full w-full rounded-16"></a>
            <div class="flex flex-col">
                <div class="flex flex-row items-center mb-2">
                    
                    <a class="z-1 ml-2 flex min-w-0 shrink items-center no-underline" href="https://app.daily.dev/mxq">
                        <img class="object-cover w-10 h-10 rounded-full" loading="lazy" type="avatar" fetchpriority="auto" alt="mxq's profile" src="https://lh3.googleusercontent.com/a/ACg8ocKbBUklR2SIj2h3bHS1DCyOiZEyPq1hA8hGDTR_tgjHEBEinyY=s64-c" />
                    </a>
                    <div class="grid items-center mr-2 flex-1 ml-4">
                        <div class="items-center truncate text-text-tertiary typo-footnote">
                            Xuân Quý<span class="mx-1">•</span>
                            <time title="Fri Dec 27 2024 13:15:56 GMT+0700 (Indochina Time)" datetime="2024-12-27T06:15:56.283Z">Dec 27, 2024</time>
                        </div>
                        @mxq
                    </div>
                    <span class="relative ml-auto flex flex-row laptop:mouse:invisible laptop:mouse:group-hover:visible">
                        <button aria-label="Options" class="btn focus-outline inline-flex cursor-pointer select-none flex-row
                        items-center border no-underline shadow-none transition
                        duration-200 ease-in-out typo-callout justify-center font-bold iconOnly h-8 w-8 p-0 rounded-10 btn-tertiary my-auto">
                            <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 pointer-events-none rotate-90">
                            </svg>
                        </button>
                    </span>
                </div>
                <div class="my-2 flex flex-col mobileXL:flex-row">
                    <div class="mr-4 flex-1">
                        <h3 class="multi-truncate font-bold text-text-primary typo-title3 line-clamp-3 line-clamp-4 multi-truncate mt-4 break-words">asdasd</h3>
                    </div>
                </div>
            </div>
            <div class="pointer-events-none relative flex flex-1 flex-col w-[50%]">
                <div class="flex flex-row items-center mt-4">
                    <ControlCard />
                </div>
            </div>
        </div>
        
    );
};

export default ProfileCard;