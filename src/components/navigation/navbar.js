import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from './profileDropdown';
import logo from '../../assets/images/logo.svg';
import '../../assets/css/app.css';

export default ()=> {
    const logoStyle = {
        width: '100%'
    }
    
    return (
        <nav className="navbar navbar-dark sticky-top new-bg">
            <Link to="/home/newest" className="navbar-brand" ><img style={logoStyle} src={logo} alt="codingcoops logo"/></Link>           
            <div><input className="form-control" type="text" placeholder="search" /></div>
            <ProfileDropdown/>
        </nav>
    )
}