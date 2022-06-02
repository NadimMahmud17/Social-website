import React from 'react';
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";


const ProfileCard = () => {
    return (
        <div className="ProfileCard">
            <div className="ProfileImage">
                <img src={Cover} alt=""/>
                <img src={Profile} alt=""/>
            </div>

            <div className="ProfileName">
                <span>zenzia ai</span>
                <span>Senior Ui designer</span>
            </div>
           
            <div className="followStatus">
                <hr/>
                <div>
                    <div className="follow">
                        <span>6,980</span>
                        <span>Following</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>8</span>
                        <span>Followers</span>
                    </div>
                </div>
                <hr/>
            </div>
                <span>My Profile</span>
        </div>
    );
};

export default ProfileCard;