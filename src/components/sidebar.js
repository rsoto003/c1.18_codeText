import React from 'react';
import {Link} from 'react-router-dom';

export default ()=> {
    return (
            <nav className=" col-md-2 nav flex-column sidebar">
                {/* <div className="sidebar-sticky">
                </div>              */}
                    <Link className="nav-link font-weight-bold"  to="/newPost" >Post a question!</Link>
                    <Link className="nav-link font-weight-bold text-dark" to="/home/popular">Popular</Link>
                    <Link className="nav-link font-weight-bold text-dark" to="/home/comments">Comments</Link>
                    <Link className="nav-link font-weight-bold text-dark" to="/home/newest">Newest</Link>
                    <Link className="nav-link font-weight-bold text-dark" to="/home/oldest">Oldest</Link>
                    <Link className="nav-link font-weight-bold text-dark"  to="/leaderboard">Leaderboards</Link>
                    <Link className="nav-link font-weight-bold text-dark "  to="/aboutus">About Us</Link>
            </nav>
    )
}