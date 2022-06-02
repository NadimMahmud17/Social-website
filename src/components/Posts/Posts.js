import React from 'react';
import PostsData from "../../Data/PostsData";
import Post from '../Post/Post';



const Posts = () => {
    return (
        <div className="Posts">

            {PostsData.map(post=><Post
            key={post.img}
            post={post}
            ></Post>)}

        </div>
    );
};

export default Posts;

// {
//     persons.map(person=><Cart 
//      key={person.Serial_number}
//      person ={person}
//      handleSalary={handleSalary}
//      ></Cart>)
// }

