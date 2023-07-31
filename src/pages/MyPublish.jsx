import React, { useState } from 'react'
import '../assets/css/mypublish.css'
import { Link } from "react-router-dom";
import axios from "axios";
//import '../assets/css/MyPublish.css'
import Cookies from 'js-cookie';

const MyPublish = ({token}) => {

    return (
        <div className="mypublish-container">
            <p>Mes projets</p>
        </div>
    );

};

export default MyPublish;