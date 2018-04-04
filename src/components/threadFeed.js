import React from 'react';
import postData from '../data/threadItems';
import { Link } from 'react-router-dom';
import axios from 'axios'

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

const JSBIN_URL = 'http://jsbin.com/oembed?url=http://jsbin.com/goxeyi/6/edit?html,output';


function Jsbin(){
    // let jsbin=null;
    // axios.get(JSBIN_URL).then( (res) => {
    //     console.log(res.data.url)
    //     jsbin=res.data.url;
    // })
    // console.log(jsbin)
    return (
        <iframe style={iframeStyle} src={'http://jsbin.com/goxeyi/6/edit?html,output'} frameBorder="0"></iframe>
    )
}

export default () => {


    const threads = postData.map( (item, index) => {
        let postDesc = item.description.slice(0,200)
        if(item.description.length > 200){
            postDesc+= '...'
        }
        return (
            <div key={index}>
                <h4>{item.title}</h4>
                <p><small className="text-muted" > {item.author} - post ID: {item.id} </small></p>
                <p>{postDesc}</p>

                <Link style={inlineBlockStyle} to={`/thread/${item.id}`}> <p> View More </p> </Link>
                {Jsbin()}

                <small style={blockStyle} className="text-muted">Comments</small>
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