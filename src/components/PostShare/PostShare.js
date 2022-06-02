import React, { useRef, useState } from 'react';
import "./PostShare.css";
import ProfileImage from "../../img/profileImg.jpg";


import { BsFileImage } from "react-icons/bs";
import { BsFilePlay } from "react-icons/bs";
import { BsCalendarDay } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { GiCrossedSwords } from "react-icons/gi";




const PostShare = () => {
    const [image, setImage] = useState(null);
    const imageRef = useRef();

    const onImageChange = (event) =>{
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                image:URL.createObjectURL(img),
            })
        }
    }

    return (
        <div className="PostShare">
            <img src={ProfileImage} alt=""/>
            <div>
                <input type="text" placeholder="Whati's happening"/>

                <div className="postOption">
                    <div className="Option"
                    style={{color: "var(--photo)"}}
                    onClick={()=>imageRef.current.click()}
                    >
                        <BsFileImage/>
                        Photo
                    </div>
                    <div className="Option"
                    style={{color: "var(--video)"}}
                    >
                        <BsFilePlay/>
                        Video
                    </div>
                    <div className="Option"
                    style={{color: "var(--location)"}}
                    >
                        <GoLocation/>
                        Location
                    </div>
                    <div className="Option"
                    style={{color: "var(--shedule)"}}
                    >
                        <BsCalendarDay/>
                        Shedule
                    </div>
                    <button className="button ps-button">
                        Share
                    </button>
                    <div style={{display: 'none'}}>
                        <input type="file"
                        name="myImage"
                        ref={imageRef}
                        onChange={onImageChange}
                        />
                    </div>
                </div>

            {image && (
                <div className="previewImage">
                    <GiCrossedSwords
                    onClick={()=> setImage(null)}/>
                    <img src={image.image} alt=""/>
                </div>
            )}

            </div>   
        </div>

        
    );
};

export default PostShare;