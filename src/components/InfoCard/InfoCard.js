import React from 'react';
import './InfoCard.css';

import { BsPencil } from "react-icons/bs";

const InfoCard = () => {
    return (
        <div className='InfoCard'>
            <div className='InfoHead'>
                <h4>Your info</h4>
                <BsPencil/>
            </div>

            <div className='info'>
                <span>
                    <b>Status </b>
                </span>
                <span>In RelationShip</span>
            </div>

            <div className='info'>
                <span>
                    <b>Lives in </b>
                </span>
                <span>Bogura Bangladesh</span>
            </div>

            <div className='info'>
                <span>
                    <b>Work at </b>
                </span>
                <span>Nadim Mahmud inst.</span>
            </div>

                <button className='button logout-button'>Logout</button>
        </div>
    );
};

export default InfoCard;