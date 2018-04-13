import React from 'react';
import {Link} from 'react-router-dom'


export default ()=> {
    return (
        <div className="">                                  
            <ul className="nav justify-content-end py-3">
                <li className="nav-item">
                    <Link className="nav-link active" to="/home/hot">Hot</Link>                    
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/home/popular">Popular</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/home/comments">Comments</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/home/newest">Newest</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/home/oldest">Oldest</Link>
                </li>
            </ul>

        </div>
    )
}