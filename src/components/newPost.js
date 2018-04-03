import React from 'react';

export default () => {
    return (
        <div className="col-8 mt-2" >
            <div className="text-center" >
                <h1>New Post</h1>
            </div>
            <div>
                <form action="">
                    <div className="form-group" >
                        <label for="pic">Include a file?</label>
                        <input type="file" className="form-control-file" id="pic" />
                        <label className="mt-4" for="post">Add a description</label>
                        <textarea id="post" className="form-control" cols="30" rows="10" placeholder="Enter post here"></textarea>
                        <button type="button" className="float-right mt-2 btn btn-primary" >Submit post</button>
                    </div>
                </form>
            </div>
        </div>
    )

}