import React from 'react';

export default () => {
    return (
        <div className="col-8 mt-2" >
            <div className="text-center" >
                <h1>New Post</h1>
            </div>
            <div>
                <form className="form-group" >
                    <div className="input-group input-group-lg">
                        <input type="text" className="form-control" id="pic" placeholder="Add a Title" />
                    </div>
                        
                        <label className="mt-4" htmlFor="post">Add a description</label>
                        <textarea id="post" className="form-control" cols="30" rows="10" placeholder="Describe your problem"></textarea>
                        <button type="button" className="float-right mt-2 btn btn-primary" >Submit post</button>
                </form>
            </div>
        </div>
    )

}