import React, { Component } from 'react';
import '../assets/css/aboutus.css';
import about from './imgs/about.jpg';
import sasha from './imgs/sasha.jpg';
import hanran from './imgs/hanran.jpg';
import ryan from './imgs/ryan.jpg';
import will from './imgs/will.jpg';

export default () => {
    return (
        <div>
            <div className="text col-sm-8 mt-3">
                <h1 className="team">Our Team</h1>
                <img className="about" src={about}/>
                <p className="text">We are a team of four developers who made this web application. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusamus sint quibusdam repellendus excepturi dolores, autem commodi nihil explicabo ipsum provident. Quos sapiente ex architecto consectetur velit blanditiis ratione fuga repudiandae unde, deleniti ad voluptas. Consequatur consectetur, perferendis fuga obcaecati quo, tempore soluta dolores recusandae quibusdam neque sequi alias asperiores?</p>
            </div>
            <div className="photo-container">
                <div className="left-container">
                    <img className="profile-photo" src={sasha}/>
                    <h3>Sasha</h3>
                    <a href="https://github.com">My Github</a>
                </div>
                <div className="right-container">
                    <img className="profile-photo" src={hanran}/>
                    <h3>Hanran</h3>
                    <a href="https://github.com">My Github</a>
                </div>
            </div>
            <div className="photo-container">
                <div className="left-container">
                    <img className="profile-photo" src={ryan}/>
                    <h3>Ryan</h3>
                    <a href="https://github.com">My Github</a>
                </div>
                <div className="right-container">
                    <img className="profile-photo" src={will}/>
                    <h3>Will</h3>
                    <a href="https://github.com">My Github</a>
                </div>
            </div>
        </div>
    )
}