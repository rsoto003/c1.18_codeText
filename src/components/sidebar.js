import React from 'react';
import {Link} from 'react-router-dom';
// import FilterFeed from './filterFeed';


export default ()=> {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-left col-2">         
               <div className="container">
                    <div id="navbar" className="navbar-collapse collapse" >
                        <ul className="nav navbar-nav">             
                            <li className="">
                                <Link className=""  to="/newPost" >Post a question!</Link>
                            </li>  

                            <li className="">
                                <Link className="" to="/home/hot">Hot</Link>                    
                            </li>
                            <li className="">
                                <Link className="" to="/home/popular">Popular</Link>
                            </li>
                            <li className="">
                                <Link className="" to="/home/comments">Comments</Link>
                            </li>
                            <li className="">
                                <Link className="" to="/home/newest">Newest</Link>
                            </li>
                            <li className="">
                                <Link className="" to="/home/oldest">Oldest</Link>
                            </li>            
                    
                            <li className="">
                                <Link className=""  to="/leaderboard">Leaderboards</Link>
                            </li>
                        </ul> 
                    </div>
                </div>


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

            </nav>
        
    )
}