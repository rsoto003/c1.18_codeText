import React, { Component } from 'react';
import '../assets/css/aboutus.css';
import about from './imgs/about.jpg';


export default () => {
    return (
        <div className="col-sm-8 mt-3">
            <h1 className="codingcoops">We are CodingCoops</h1>
            <img className="about" src={about}/>
        </div>
    )
}