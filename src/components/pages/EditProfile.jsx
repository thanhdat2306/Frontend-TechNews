import React from 'react';

const EditProfile = () => {
    return (
    <div class="mx-auto flex flex-col content-center items-stretch pt-0 h-[100vh] ">
        <h1 class="text-2xl font-bold mt-4">Edit Profile</h1>
        <form id="editProfileForm" action="/edit-profile" method="POST">
          <div class="flex justify-center items-center gap-4 self-start">
            <button type="button" class="px-9 py-9 rounded border dark:border-bg-white dark:border-bg-dark max-w-[250px] flex flex-row gap-1 justify-center items-center text-dark-700 dark:text-white hover:text-primary hover:border-primary transition">
              <input type="file" id="avatarInput" name="avatar" class="hidden" />
              <svg class="w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0L362.9 64.8C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
              <span>User Picture</span>
            </button>   
            <div class="w-40 h-40 rounded-full overflow-hidden mb-6 shadow-lg">
              {/* <img id="imagePreview" src="<%= user.avatar %>" alt="image" class="w-full h-full object-cover object-center" /> */}
            </div>
          </div>
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input type="text" name="name" id="name" value="<%= user.name %>" class="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"/>
          </div>
          <div class="mb-4">
            <label for="username" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
            <input type="text" name="username" id="username" value="<%= user.username %>" class="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"/>
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input type="email" name="email" id="email" value="<%= user.email %>" class="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"/>
          </div>
          <div class="mb-4">
            <label for="bio" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Bio</label>
            <textarea name="description" id="description" class="mt-1 block w-full h-[100px] border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"></textarea>
          </div>
          <div class="flex flex-row gap-[10px]">
            <button type="submit" class="px-4 py-2 bg-blue-500 dark:bg-blue-700 text-white rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 transition ease-in-out duration-150">Save Changes</button>
            <button type="button" class="px-4 py-2 bg-red-500 dark:bg-red-700 text-white rounded-md hover:bg-red-600 dark:hover:bg-red-800 transition ease-in-out duration-150">Reset Password</button>
          </div>
  
        </form>
      </div>
    );
};

export default EditProfile;