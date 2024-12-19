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
const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/Post" element={<Body content={<Post/>}/>} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/user" element={<Body content={<User/>}/>} />
            </Routes>
        </Router>
    );
};

export default AppRouter;