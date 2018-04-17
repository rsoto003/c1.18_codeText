import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/sidebar.css';

export default ()=> {
    return (
        <div className="sidebar-container bg-dark border border-dark col-2 d-none d-sm-block">
            <div className="row mt-5 mx-auto">
                <Link to="/newPost">Post a question!</Link>
            </div>
            <div className="row mt-5 mx-auto">
                <Link to="/leaderboard">Leaderboards</Link>
            </div>
            <div className="row mt-5 mx-auto">
                <Link to="/aboutus">About Us</Link>
            </div>

            {/* ------------------------------------------- */}
            {/* Everything below isn't part of our MVP or feature set yet*/}


            {/* <div className="row mt-5 mx-auto">
                <Link to="/following">Following</Link>
            </div>
            <div className="row mt-5 mx-auto">
                <Link to="/likes">Likes</Link>
            </div>
            <div className="row mt-5 mx-auto">
                <Link to="/comments">Comments</Link>
            </div>
            <div className="row mt-5 mx-auto">
                <Link to="/help">Help</Link>
            </div> */}
        </div>
    )
}