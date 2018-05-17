import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {sidebarOn} from '../../actions'
import ProfileDropdown from './profileDropdown';
import logo from '../../assets/images/logo-new.svg';

const navBar= (props) => {
    return (  
        <nav className="navbar navbar-dark sticky-top new-bg">
            <Link to="/home/newest" className="nav d-none d-md-block" ><img className="w-100" src={logo} alt="codingcoops logo"/></Link>    
            <div onClick={props.sidebarOn} className="d-block d-md-none ">
                <i className="fas fa-bars text-white"></i>
            </div>
            {/* hiding this stuff for presentation */}
            {/* <div><input className="form-control input-lg" type="text" placeholder="search" /></div> */}
            
            <ProfileDropdown/>
        </nav>
    )
}

function mapStateToProps(state){
    return{
        sidebar: state.sidebar.toggle
    }
}

export default connect(mapStateToProps, {sidebarOn})(navBar)