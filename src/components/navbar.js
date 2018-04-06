import React from 'react';
import { Link } from 'react-router-dom'

export default ()=> {
    return (
        <nav className="navbar navbar-dark bg-primary ">
            <Link to="/" className="navbar-brand" >context</Link>
            <div><input className="form-control" type="text" placeholder="search" /></div>
            <div><i className="fas fa-user-circle fa-2x"></i></div>
        </nav>
    )
}