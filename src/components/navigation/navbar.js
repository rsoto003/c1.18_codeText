import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from './profileDropdown'

export default ()=> {
    
    return (
        <nav className="navbar navbar-dark bg-primary">
            <Link to="/home" className="navbar-brand" >context</Link>
            <div><input className="form-control" type="text" placeholder="search" /></div>
            <ProfileDropdown/>
        </nav>
    )
}