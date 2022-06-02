import React from 'react';
import TrendData from '../../Data/TrendData';

import {DiJqueryLogo } from "react-icons/di";
import {FaRegShareSquare } from "react-icons/fa";

const TrendCard = () => {
    return (
        <div className="TrendCard">
            <h3>Trends for you</h3>

            {
                TrendData.map(trend=> 
                    <div className="trends">
                        <div>
                        <span><DiJqueryLogo/>{trend.name}</span>
                        </div>
                    
                        <div>
                        <span><FaRegShareSquare/>{trend.shares} k Shares</span>
                        </div>
                    </div>
                    
                )
            }

        </div>
    );
};

export default TrendCard;



// {PostsData.map(post=><Post
//     key={post.img}
//     post={post}
//     ></Post>)}