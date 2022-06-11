import React from 'react';
import "./Post.css"
import NotLike from "../../img/notlike.png"
import Heart from "../../img/like.png"
import Comment from "../../img/comment.png"
import Share from "../../img/share.png"


const Post = (props) => {

    const {name,img,likes,liked,desc}=props.post;

    return (
        <div className="Post">
            <img src={img} alt=""/>


            <div className="postReact">
                <img src={liked?Heart:NotLike} alt=""/>
                <img src={Comment} alt=""/>
                <img src={Share} alt=""/>
            </div>

                <span>{likes} Likes</span>

            <div className="detail">
                <span><b>{name}</b></span>
                <span> {desc}</span>
            </div>
        </div>
    );
};

export default Post;


// const Cart = (props) => {
  
//     const{name,passion,salary,Works,Serial_number,img}=props.person;
  