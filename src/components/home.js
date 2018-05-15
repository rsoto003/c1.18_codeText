import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/home_slider.css';
import banner from '../assets/images/banner-1.svg';
import homeSliderDesktop from '../assets/images/home-slider.jpg';
import logoIcon from '../assets/images/logo-icon.svg';

export default () => {
    return (
        <div className="full-width-image" >
            <div className="d-sm-block d-none">
                <img className="position-absolute" src={banner}/>
                <div className="ml-5 mt-5 text-left text-white position-absolute col-5">
                    <h3 className="font-weight-bold mb-4">Codingcoops is a place to gain and share knowledge of web development.</h3>
                    <h5>It's an online community to ask questions and connect with people who are interested 
                        in learning about coding and professional developers. This empowers people to learn and grow from each other.</h5>
                    <hr/>
                    <h4 className="text-dark font-weight-bold mb-4">Join us and begin your adventure here with us today.</h4>
                    <Link to="/auth/github" className="btn btn-danger font-weight-bold mr-2" >Log In</Link>  
                    <Link to="/home/newest" className="btn btn-danger font-weight-bold">Skip</Link>
                </div>
            </div>
            <div className="d-block d-sm-none">
                <div className="text-center">
                    <img className="d-block w-50 mx-auto mb-5 mt-5" src={logoIcon} alt="coding coops"/>
                    <h1 className="display-5">Hello world!</h1>
                    <p className="lead">Codingcoops is a place to gain and share knowledge of web development.</p>
                    <hr className="my-4 mb-4"/>
                    <Link to="/auth/github" className="btn btn-danger font-weight-bold mr-2" >Log In</Link>  
                    <Link to="/home/newest" className="btn btn-danger font-weight-bold">Skip</Link> 
                </div>
            </div>
        </div>
    )
}



