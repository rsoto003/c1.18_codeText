import React from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/css/sidebar.css'

export default ()=> {
    return (
            <nav className="sidebar col-md-2 nav nav-pills flex-column">
                    <NavLink className="nav-link font-weight-bold" to="/newPost" activeClassName="active">Post a question!</NavLink>
                    <NavLink className="nav-link font-weight-bold" to="/home/popular" activeClassName="active" >Popular</NavLink>
                    <NavLink className="nav-link font-weight-bold" to="/home/comments" activeClassName="active">Comments</NavLink>
                    <NavLink className="nav-link font-weight-bold" to="/home/newest" activeClassName="active">Newest</NavLink>
                    <NavLink className="nav-link font-weight-bold" to="/home/oldest" activeClassName="active">Oldest</NavLink>
                    <NavLink className="nav-link font-weight-bold" to="/leaderboard" activeClassName="active">Leaderboards</NavLink>
                    <NavLink className="nav-link font-weight-bold" to="/aboutus" activeClassName="active">About Us</NavLink>
            </nav>
    )
}