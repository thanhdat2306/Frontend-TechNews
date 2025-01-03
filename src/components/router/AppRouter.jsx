import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Profile from '../pages/Profile.jsx';
import Settings from '../pages/Settings.jsx';
import Signup from '../pages/Signup.jsx';
import Login from '../pages/Login.jsx';
import Body from '../body/body.jsx';
import Post from '../pages/Post.jsx';
import User from '../pages/User.jsx';
import Header from '../header/header.jsx';
import NavigantionBar from '../navigation/navigation_bar.jsx';
import ListContentCard from '../body/listcontentcard.jsx';
import CreatePost from '../pages/CreatePost.jsx'; 
import EditProfile from '../pages/EditProfile.jsx';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Body content={<ListContentCard />}/>} />
            
                <Route path="/create" element={<Body content={<CreatePost />} />} />

                <Route path="/customfeed" element={<Body content={<div>Custom Feed Content</div>} />} />
                <Route path="/mypost" element={<Body content={<div>My Post Content</div>} />} />
                <Route path="/publicpost" element={<Body content={<div>Public Post Content</div>} />} />
                <Route path="/explore" element={<Body content={<div>Explore Content</div>} />} />
                <Route path="/discussion" element={<Body content={<div>Discussion Content</div>} />} />
                <Route path="/tag" element={<Body content={<div>Tag Content</div>} />} />
                <Route path="/bookmarks" element={<Body content={<div>Bookmarks Content</div>} />} />
                <Route path="/history" element={<Body content={<div>History Content</div>} />} />
                <Route path="/docs" element={<Body content={<div>Docs Content</div>} />} />
                <Route path="/changelog" element={<Body content={<div>Changelog Content</div>} />} />
                <Route path="/feedback" element={<Body content={<div>Feedback Content</div>} />} />
  
                <Route path="/post/:id" element={<Body content={<Post/>}/>} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/user" element={<Body content={<User/>}/>} />
                <Route path="/profile" element={<Body content={<Profile/>}/>} />
                <Route path="/edit-profile" element={<Body content={<EditProfile/>}/>} />

            </Routes>
        </Router>
    );
};

export default AppRouter;