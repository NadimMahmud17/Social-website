import React from 'react';
import "./RightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";

import { FiSettings } from "react-icons/fi";
import TrendCard from '../TrendCard/TrendCard';

const RightShide = () => {
    return (
        <div className="RightSide">
            <div className="navIcons">
                <img src={Home} alt=""/>
                <FiSettings/>
                <img src={Noti} alt=""/>
                <img src={Comment} alt=""/>
            </div>
            <TrendCard></TrendCard>
        </div>
    );
};

export default RightShide;