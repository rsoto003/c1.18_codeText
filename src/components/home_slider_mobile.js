import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/home_slider.css';
import logoIcon from '../assets/images/logo-icon.svg';

export default () => {

    return (

        <div className="jumbotron mobile-bg text-center">
            <img className="d-block w-50 mx-auto mb-5 mt-5" src={logoIcon} alt="coding coops"/>
            <h1 className="display-5">Hello, world!</h1>
            <p className="lead">Codingcoops is a place to gain and share knowledge of web development.</p>
            <hr className="my-4 mb-4"/>
            <Link to="/auth/github" className="btn btn-danger font-weight-bold mr-2" >Log In</Link>  
            <Link to="/home/newest" className="btn btn-danger font-weight-bold">Skip</Link> 
            
        </div>

         
    

     )
}
