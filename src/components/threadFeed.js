import React from 'react';
import postData from '../data/threadItems';
import { Link } from 'react-router-dom';
import axios from 'axios'
import jsbinPIC from '../assets/images/jsbin.png';
import UpVote from './upvote'; 

const blockStyle={
    display:'block'
}
const inlineBlockStyle={
    display:'inline-block'
}

const iframeStyle={
    width: '100%',
    height: '200px'
}

const jsbinStyle={
    width:'35px',
    display:'inline-block',
    cursor: 'pointer',
}

const JSBIN_URL = 'http://jsbin.com/oembed?url=http://jsbin.com/goxeyi/6/edit?html,output';


function Jsbin(index){
    
    return(
        <iframe style={iframeStyle} src={postData[index].jsbin} frameborder="0"></iframe>
    )

}

export default () => {
    const threads = Object.keys(postData).map( (key,index) => {
        let postDesc = postData[key].description.slice(0,200)
        if(postData[key].description.length > 200){
            postDesc+= '...'
        }
        const jsbin_URL = postData[key].jsbin;
        return (
            
            <div key={index}>
            
                <UpVote className="col-m-1 col-sm-1 justify-content-start mt-5"/>
                <h4>{postData[key].title}</h4>
                <p><small className="text-muted" > {postData[key].author} - post ID: {postData[key].id} </small></p>
                <p>{postDesc}</p>

                <a style={inlineBlockStyle} target="_blank" href={postData[key].jsbin}><img style={jsbinStyle} src={jsbinPIC} alt="jsbinPicture"/></a>

                <Link style={blockStyle} to={`/thread/${postData[key].id}`}> <p> View More </p> </Link>
                {/* <iframe style={iframeStyle} src={jsbin_URL} frameborder="0"></iframe> */}
                {/* {Jsbin(index)} */}


                <small style={blockStyle} className="text-muted">Comments</small>
                <div className="row">
                    <div className="col">
                        <span><i className="fas fa-user-circle mr-2"></i>{postData[key].comments[0].name}</span>
                        <p><small>{postData[key].comments[0].comment}</small></p>
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