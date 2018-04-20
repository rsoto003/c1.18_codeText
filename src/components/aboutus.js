import React, { Component } from 'react';
import '../assets/css/aboutus.css';
import about from './imgs/about.jpg';
import sasha from './imgs/sasha.jpg';
import hanran from './imgs/hanran.jpg';
import ryan from './imgs/ryan.jpg';
import will from './imgs/will.jpg';

export default () => {
    return (
        <div className="offset-sm-0 offset-md-2 col-md-10">
            <div className="text offset-2 col-md-10 mt-3">
                <h1 className="team">Our Team</h1>
                <img className="about" src={about}/>
                <p className="text">We are CodingCoOps. A team of passionate developers who are eager to learn and develop our web skills. We loved the process of coding this project together, as much as we do the next project. We know the struggles and rewards that come with coding, which is why we wanted to create a web application that enables developers or anyone that is passionate about coders to help others with their coding questions.</p>
            </div>
            <div className="picture-row-one row col-md-12">
                <div className="profile-container">
                    <img className="sasha-photo" src={sasha}/>
                    <h2 className="developer-name sasha-header">Sasha</h2>
                    <h3>Front End Developer</h3>
                    <a className="github_link" href="https://github.com">My Github</a>
                </div>
                <div className="profile-container">
                    <img className="hanran-photo" src={hanran}/>
                    <h2 className="developer-name hanran-header">Hanran</h2>
                    <h3>Front End Developer</h3>
                    <a className="github_link" href="https://github.com">My Github</a>
                </div>
            </div>
            <div className="picture-row-two row col-md-12">
                <div className="profile-container">
                    <img className="ryan-photo" src={ryan}/>
                    <h2 className="developer-name ryan-header">Ryan</h2>
                    <h3>Back End Developer</h3>
                    <a className="github_link" href="https://github.com">My Github</a>
                </div>
                <div className="profile-container">
                    <img className="will-photo" src={will}/>
                    <h2 className="developer-name will-header">Will</h2>
                    <h3>Full Stack Developer</h3>
                    <a className="github_link" href="github.com/burninggun">Will's Github</a>
                </div>
            </div>
        </div>
    )
}
