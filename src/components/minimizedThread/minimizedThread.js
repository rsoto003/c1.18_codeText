import React,{Component} from 'react';
import postData from '../../data/threadItems';
import { Link } from 'react-router-dom';
import jsbinPIC from '../../assets/images/jsbin.png';
import Comments from '../comments.js'
import UpVote from '../upvote';
import upvoteComments from '../upvotecomments';
const blockStyle={
    display:'block'
}
const inlineBlock={
    display:'inline-block'
}
const aTag={
    display:'inline-block',
    float: 'right'
}

const iframeStyle={
    width: '100%',
    height: '200px'
}

const jsbinStyle={
    width:'50px',
    display:'inline-block',
    cursor: 'pointer',
}



function Jsbin(index){
    
    return(
        <iframe style={iframeStyle} src={postData[index].jsbin} frameborder="0"></iframe>
    )
}

class MinimizedThread extends Component{
    constructor(props){
        super(props)
    }


    render(){
        let postDesc = this.props.data.description.slice(0,200)
        if(this.props.data.description.length > 200){
            postDesc+= '...'
        }
        let postTitle = this.props.data.title.slice(0,100)
        if(this.props.data.title.length > 100){
            postTitle+= '...'
        }
        const jsbin_URL = this.props.data.jsbin;
        debugger;
        return (
            <div className="row pt-5 my-4 border bg-white">
                <div className="col-md-2 col-sm-2 col-2">
                    <UpVote postData={this.props} />
                </div>
                <div className="col-md-10 col-sm-10 col-8 justify-content-start ">
                    {/* <UpVote className="col-m-1 col-sm-1 justify-content-start mt-5"/> */}
                    <h4>{postTitle}</h4>
                    <p><small className="text-muted" > {this.props.data.author} - post ID: {this.props.data.timestamp} </small></p>
                    <p>{postDesc}</p>
                    
                    <a style={aTag} target="_blank" href={`${this.props.data.jsbin}`}><img style={jsbinStyle} src={jsbinPIC} alt="jsbinPicture"/></a>
    
                    <Link style={inlineBlock} to={`/thread/${this.props.data._id}`}> <p> View More </p> </Link>
                    <div className="dropdown-divider mt-5"></div>
                    <Comments data ={this.props.data} threadID={this.props.data._id} />
                </div>
    
            </div>
        )
    }

}
export default MinimizedThread

