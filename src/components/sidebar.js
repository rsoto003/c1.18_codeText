import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/sidebar.css';
import '../assets/css/app.css';

export default ()=> {
    return (
        <div className="col-md-2 d-none d-md-block pl-5 sidebar">         
               
            <ul className="nav nav-pills flex-column">             
                <li className="nav-item mt-2">
                    <Link className="nav-link font-weight-bold"  to="/newPost" >Post a question!</Link>
                </li>  
                        <li className="nav-item mt-2">
                            <Link className="nav-link text-secondary font-weight-bold" to="/home/hot">Hot</Link>                    
                        </li>
                        <li className="nav-item mt-2">
                            <Link className="nav-link text-secondary font-weight-bold" to="/home/popular">Popular</Link>
                        </li>
                        <li className="nav-item mt-2">
                            <Link className="nav-link text-secondary font-weight-bold" to="/home/comments">Comments</Link>
                        </li>
                        <li className="nav-item mt-2">
                            <Link className="nav-link text-secondary font-weight-bold" to="/home/newest">Newest</Link>
                        </li>
                        <li className="nav-item mt-2">
                            <Link className="nav-link text-secondary font-weight-bold" to="/home/oldest">Oldest</Link>
                        </li>            
                
                        <li className="nav-item mt-2">
                            <Link className="nav-link text-secondary font-weight-bold"  to="/leaderboard">Leaderboards</Link>
                        </li>
                    </ul>
            </div>
    )
}