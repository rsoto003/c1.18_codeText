
import React from 'react';
import postData from '../data/threadItems'

export default ( props ) => {
    return(
        <div className="col-m-12 col-sm-9 justify-content-start mt-5 ">
            <h2>{postData[props.threadID].title}</h2>
            <p><small className='text-muted' >Author: {postData[props.threadID].author} </small></p>
            <p>{postData[props.threadID].description}</p>
            <div className="dropdown-divider mb-5"></div>
            <div className="row">
                <div className="col">
                    <span><i className="fas fa-user-circle mr-2"></i>{postData[props.threadID].comments[0].name}</span>
                    <p><small>{postData[props.threadID].comments[0].comment}</small></p>
                </div>
            
            </div>

        </div>
    )


}
