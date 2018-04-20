import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from './profileDropdown';
import logo from '../../assets/images/logo-new.svg';
// import '../../assets/css/app.css';

export default ()=> {

    return (  
        
        // <nav className="navbar navbar-expand-lg sticky-top new-bg text-white">                
        //     <Link to="/home/newest" className="navbar-brand" ><img className="w-100" src={logo} alt="codingcoops logo"/></Link> 
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
            
        //     <div id="navbarNavDropdown" className="navbar-collapse collapse">
        //         <ul className="navbar-nav mr-auto">
        //             <li className="nav-item active">
        //                 <a className="nav-link" href="#">Post a question <span className="sr-only">(current)</span></a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#">test</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#">Pricing</a>
        //             </li>

        //         </ul>

        //         <ul className="navbar-nav">
        //             <li className="nav-item dropdown">
        //                 <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                 Dropdown
        //                 </a>
        //                 <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        //                     <a className="dropdown-item" href="#">Action</a>
        //                     <a className="dropdown-item" href="#">Another action</a>
        //                 </div>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="{{ url('/login') }}">Login</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="{{ url('/register') }}">Register</a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>

        
        <nav className="navbar navbar-dark sticky-top new-bg">
            <Link to="/home/newest" className="nav" ><img className="w-100" src={logo} alt="codingcoops logo"/></Link>    

            {/* hiding this stuff for presentation */}
            {/* <div><input className="form-control input-lg" type="text" placeholder="search" /></div> */}
            
            <ProfileDropdown/>
        </nav>
    )
}