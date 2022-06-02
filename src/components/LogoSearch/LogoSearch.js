import React from 'react';
import "./LogoSearch.css";
import logo from "../../img/logo.png"
import { BsSearch } from "react-icons/bs";
const LogoSearch = () => {
    return (
        <div className="LogoSearch">
            <img src={logo} alt=""/>
            <div className="Search">
                <input type="text" placeholder="#Explore"/>
                <div className="s-icon">
                <BsSearch/>
                </div>
            </div>
        </div>
    );
};

export default LogoSearch;