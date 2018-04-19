import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from './profileDropdown';
import logo from '../../assets/images/logo.svg';
// import '../../assets/css/app.css';

export default (props)=> {
    console.log(props)

    return (       
        <nav className="navbar navbar-dark sticky-top new-bg">
            <Link to="/home/newest" className="nav" ><img className="w-100" src={logo} alt="codingcoops logo"/></Link>    

            {/* hiding this stuff for presentation */}
            {/* <div><input className="form-control input-lg" type="text" placeholder="search" /></div> */}
            
            <ProfileDropdown auth={props.auth} />
        </nav>
    )
}