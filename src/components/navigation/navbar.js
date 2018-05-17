import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from './profileDropdown';
import logo from '../../assets/images/logo-new.svg';

export default ()=> {

    return (  
        
        
        <nav className="navbar navbar-dark sticky-top new-bg">
            <Link to="/home/newest" className="nav d-none d-sm-block" ><img className="w-100" src={logo} alt="codingcoops logo"/></Link>    
            <i className="fas fa-bars d-block d-sm-none text-white"></i>
            {/* hiding this stuff for presentation */}
            {/* <div><input className="form-control input-lg" type="text" placeholder="search" /></div> */}
            
            <ProfileDropdown/>
        </nav>
    )
}