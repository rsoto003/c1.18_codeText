import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from './profileDropdown';
import logo from '../assets/images/logo.svg';

export default ()=> {
    
    return (
        <nav className="navbar navbar-dark bg-dark sticky-top">
            <Link to="/home/newest" className="navbar-brand" >codecoops</Link>
            {/* <img src={logo} alt="logo"/> */}
            <div><input className="form-control" type="text" placeholder="search" /></div>
            <ProfileDropdown/>
        </nav>
    )
}