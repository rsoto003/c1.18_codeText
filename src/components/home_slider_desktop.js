import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/home_slider.css';
import banner from '../assets/images/banner-1.svg';
import homeSliderDesktop from '../assets/images/home-slider.jpg';

export default () => {

    return (

        
        <div className="carousel slide full-width-image" data-ride="carousel">
            
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100 mt-3" src={banner} alt="First slide"/>
                    <div className="carousel-caption d-none d-md-block text-left text-white w-50">
                        <h1 className="font-weight-bold mb-4">Codingcoops is a place to gain and share knowledge of web development.</h1>
                        <h5>It's an online community to ask questions and connect with people who are interested 
                            in learning about coding and professional developers. This empowers people to learn and grow from each other.</h5>

                        <hr className="my-4 mb-4"/>
                        <h4 className="text-dark font-weight-bold mb-4">Join us and begin your adventure here with us today.</h4>
                        <Link to="/register" className="btn btn-danger font-weight-bold mr-2" >Log In</Link>  
                        <Link to="/home/newest" className="btn btn-danger font-weight-bold">Skip</Link>
                    </div>
                </div>                
            </div>            
        </div>
    )
}

