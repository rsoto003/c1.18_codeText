import React from 'react';

export default () => {

    return(
        <div className="col-sm-10 col-md-9 mt-2 offset-md-2 " >
            <h1 className="text-center"> Register </h1>
            <form className="form-group">
                <input type="text" className="form-control mt-3" placeholder="username"/>
                <input type="text" className="form-control mt-3" placeholder="password" />
                <input type="text" className="form-control mt-3" placeholder="email" />
                <button className="btn btn-secondary mt-3 float-right">Register</button>
            </form>
        </div>
    )
}