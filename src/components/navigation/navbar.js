import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from './profileDropdown';
import logo from '../../assets/images/logo.svg';
// import '../../assets/css/app.css';

export default ()=> {
        
    return (
        <nav className="navbar navbar-dark sticky-top new-bg row">
            {/* <div className="row"> */}
                <div  className="col-xs-11 col-md-4 float-left">
                    <Link to="/home/newest" className="nav" ><img className="w-100" src={logo} alt="codingcoops logo"/></Link> 
                </div>
                <div className="col-xs-8 col-md-4">
                    {/* <div><input className="form-control input-lg" type="text" placeholder="search" /></div> */}

                    <form className="form-inline mt-2 mt-md-0"> 
                        <div className="input-group col-12">
                            <input type="text" className="form-control input-lg" placeholder="Search Post" name="search"/>                    
                            {/* <button className="btn btn-info" type="submit"> <i className="fas fa-search"></i> </button> */}
                        </div>
                    </form>
                </div>
                <div className="nav navbar-nav navbar-right">
                    <ProfileDropdown/>
                </div>                         
            
        </nav>
    )
}