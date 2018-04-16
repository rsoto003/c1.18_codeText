import React from 'react';
import {Link} from 'react-router-dom';
// import FilterFeed from './filterFeed';


export default ()=> {
    return (
        <div className="col-md-2 d-none d-md-block pt-5 pl-3">         
               
                    <ul className="nav flex-column">             
                        <li className="nav-item mt-2">
                            <Link className="nav-link"  to="/newPost" >Post a question!</Link>
                        </li>  

                        <li className="nav-item mt-2">
                            <Link className="nav-link" to="/home/hot">Hot</Link>                    
                        </li>
                        <li className="nav-item mt-2">
                            <Link className="nav-link" to="/home/popular">Popular</Link>
                        </li>
                        <li className="nav-item mt-2">
                            <Link className="nav-link" to="/home/comments">Comments</Link>
                        </li>
                        <li className="nav-item mt-2">
                            <Link className="nav-link" to="/home/newest">Newest</Link>
                        </li>
                        <li className="nav-item mt-2">
                            <Link className="nav-link" to="/home/oldest">Oldest</Link>
                        </li>            
                
                        <li className="nav-item mt-2">
                            <Link className="nav-link"  to="/leaderboard">Leaderboards</Link>
                        </li>
                    </ul> 
                

            </div>
        
    )
}