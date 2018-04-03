import React from 'react';
import postData from '../data/threadItems';

export default () => {

    const threads = postData.map( (item, index) => {
        console.log(item)
        return (
            <div key={index}>
                <h3>{item.title}</h3>
                <p><small className="text-muted" > {item.author} - post ID: {item.id} </small></p>
                <p>{item.description}</p>

                <small className="text-muted">Comments</small>
                <div className="row">
                    <div className="col">
                        <span><i className="fas fa-user-circle mr-2"></i>{item.comments[0].name}</span>
                        <p><small>{item.comments[0].comment}</small></p>
                    </div>
                
                
                </div>
                <div className="dropdown-divider mb-5"></div>
            </div>
        )
    }) 

    return (
        <div className="col-m-12 col-sm-9 justify-content-start mt-5 ">
            {threads}
            
        </div>
    )
}