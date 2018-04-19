import React, { Component } from 'react';
import '../assets/css/aboutus.css';
import about from './imgs/about.jpg';
import sasha from './imgs/sasha.jpg';
import hanran from './imgs/hanran.jpg';
import ryan from './imgs/ryan.jpg';
import will from './imgs/will.jpg';

export default () => {
    return (
        <div className="offset-2 col-md-10">
            <div className="text offset-2 col-md-10 mt-3">
                <h1 className="team">Our Team</h1>
                <img className="about" src={about}/>
                <p className="text">We are CodingCoOps. A team of four developers who developed this web application together.</p>
            </div>
            <div className="picture-row-one row col-md-12">
                <div className="profile-container">
                    <img className="sasha-photo" src={sasha}/>
                    <h2 className="developer-name sasha-header">Sasha</h2>
                    <h3>Front End Developer</h3>
                    <a href="https://github.com">My Github</a>
                </div>
                <div className="profile-container">
                    <img className="hanran-photo" src={hanran}/>
                    <h2 className="developer-name hanran-header">Hanran</h2>
                    <h3>Front End Developer</h3>
                    <a href="https://github.com">My Github</a>
                </div>
            </div>
            <div className="picture-row-two row col-md-12">
                <div className="profile-container">
                    <img className="ryan-photo" src={ryan}/>
                    <h2 className="developer-name ryan-header">Ryan</h2>
                    <h3>Back End Developer</h3>
                    <a href="https://github.com">My Github</a>
                </div>
                <div className="profile-container">
                    <img className="will-photo" src={will}/>
                    <h2 className="developer-name will-header">Will</h2>
                    <h3>Full Stack Developer</h3>
                    <a href="https://github.com">My Github</a>
                </div>
            </div>
        </div>
    )
}
