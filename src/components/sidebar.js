import React from 'react';
import {Link} from 'react-router-dom';

export default ()=> {
    return (
            <nav className="sidebar col-md-2 d-md-inline-block d-none nav flex-column">
                    <Link className="nav-link font-weight-bold" to="/newPost" >Post a question!</Link>
                    <Link className="nav-link font-weight-bold" to="/home/popular">Popular</Link>
                    <Link className="nav-link font-weight-bold" to="/home/comments">Comments</Link>
                    <Link className="nav-link font-weight-bold" to="/home/newest">Newest</Link>
                    <Link className="nav-link font-weight-bold" to="/home/oldest">Oldest</Link>
                    <Link className="nav-link font-weight-bold" to="/leaderboard">Leaderboards</Link>
                    <Link className="nav-link font-weight-bold" to="/aboutus">About Us</Link>
            </nav>
    )
}