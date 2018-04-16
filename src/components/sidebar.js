import React from 'react';
import {Link} from 'react-router-dom';
// import FilterFeed from './filterFeed';


export default ()=> {
    return (
        <div className="col-2 d-none d-sm-block mt-5">         
               
                <ul className="nav flex-column">             
                    <li className="nav-item mt-2">
                        <Link className="nav-link"  to="/newPost" >Post a question!</Link>
                    </li>  

                    <li className="nav-item mt-2">
                        <Link className="nav-link active" to="/home/hot">Hot</Link>                    
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
            


                {/* ------------------------------------------- */}
                {/* Everything below isn't part of our MVP or feature set yet*/}


                {/* <div className="row mt-5 mx-auto">
                    <Link to="/following">Following</Link>
                </div>
                <div className="row mt-5 mx-auto">
                    <Link to="/likes">Likes</Link>
                </div>
                <div className="row mt-5 mx-auto">
                    <Link to="/comments">Comments</Link>
                </div>
                <div className="row mt-5 mx-auto">
                    <Link to="/help">Help</Link>
                </div> */}
            </div>
        
    )
}