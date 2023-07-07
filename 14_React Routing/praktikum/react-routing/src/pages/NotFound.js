import React from "react";
import {Link} from 'react-router-dom'
import NotFoundIcon from "../assets/not_found.png"
import "../main.css"

const NotFound = () => (
  <div className='page-container'>
            <h1 className="heading">The Page You searched was Not Found!</h1>
            <img
                className='page-icon'
                src={NotFoundIcon} alt="not-found" 
            />
            <button className='button'>
                <Link to='/'>
                    Return Home
                </Link>
            </button>
        </div>
);

export default NotFound;
