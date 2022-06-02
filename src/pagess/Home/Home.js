import React from 'react';
import PostSide from '../../components/PostSide/PostSide';
import ProfileSide from '../../components/profileSide/ProfileSide';
import RightShide from '../../components/RightSide/RightShide';
import "./Home.css";

const Home = () => {
    return (
        <div className="Home">
            <ProfileSide></ProfileSide>
            <PostSide></PostSide>
            <RightShide></RightShide>
            
        </div>
    );
};

export default Home;