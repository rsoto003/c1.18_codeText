import React from 'react';
import {Link} from 'react-router-dom'


export default ()=> {
    return (
        <div className="col-2 d-none d-sm-block">
            <div className="row mt-5 mx-auto">
                <Link to="/newPost">Post a question!</Link>
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
        </div>
    )
}