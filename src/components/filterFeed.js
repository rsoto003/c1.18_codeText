import React from 'react';
import {Link} from 'react-router-dom'


export default ()=> {
    return (
        <div className="">                                  
            <ul className="nav justify-content-end py-3">
                <li className="nav-item">
                    <Link className="nav-link active" to="/hot">Hot</Link>                    
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/popular">Popular</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/comments">Comments</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/newest">Newest</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/oldest">Oldest</Link>
                </li>
            </ul>

        </div>
    )
}