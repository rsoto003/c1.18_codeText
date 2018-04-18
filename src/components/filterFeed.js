import React from 'react';
import {Link} from 'react-router-dom'


export default ()=> {
    return (
        <div className="">                                
                        
            <ul className="nav justify-content-end py-3"> 
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/newPost" >Post a question!</Link>
                    </li> */}


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


                    {/* <li className="nav-item mt-2">
                        <Link className="nav-link" to="/leaderboard">Leaderboards</Link>
                    </li> */}
                </ul>
            

        </div>
    )
}