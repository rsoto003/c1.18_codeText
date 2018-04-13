import React,{Component} from 'react';
import postData from '../data/threadItems';
import { Link } from 'react-router-dom';
import jsbinPIC from '../assets/images/jsbin.png';
import UpVote from './upvote';
import upvoteComments from './upvotecomments';

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
        this.state={

        }
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
    
        const commentArray = [];
        const allComments = this.props.data.comments.map( (item, index) => {
            commentArray.push(
                <div key={index} >
                    <span><i className="fas fa-user-circle mr-2"></i>{this.props.data.comments[index].name}</span>
                    <p><small>{this.props.data.comments[index].comment}</small></p>
                </div>
            )
        } )
        const fewComments=[];
        for (var i =0; i<2; i++){
            fewComments.push(commentArray[i]);
        }
        const Comments = fewComments.map( (item, index) => {
            return (
                fewComments[index]
            )
        } )
    
        return (
            <div className="row pt-5 my-4 border bg-white">
                <div className="col-md-2 col-sm-2 col-2">
                    <UpVote />
                </div>
                <div className="col-md-10 col-sm-10 col-8 justify-content-start ">
                    {/* <UpVote className="col-m-1 col-sm-1 justify-content-start mt-5"/> */}
                    <h4>{postTitle}</h4>
                    <p><small className="text-muted" > {this.props.data.author} - post ID: {this.props.data._id} </small></p>
                    <p>{postDesc}</p>
                    
                    <a style={aTag} target="_blank" href={this.props.data.jsbin}><img style={jsbinStyle} src={jsbinPIC} alt="jsbinPicture"/></a>
    
                    <Link style={inlineBlock} to={`/thread/${this.props.data._id}`}> <p> View More </p> </Link>
                    <div className="dropdown-divider mt-5"></div>
    
                    <small style={blockStyle} className="text-muted">Comments ({this.props.data.comments.length})</small>
                    
                    <a href="#" className="badge pill badge-primary">View more comments <span className="badge badge-light">9</span> </a>
    
                    {Comments}
                </div>
    
                
            </div>
        )
    }

}
export default MinimizedThread

// export default (this.props) => {
//     let postDesc = this.props.data.description.slice(0,200)
//     if(this.props.data.description.length > 200){
//         postDesc+= '...'
//     }
//     let postTitle = this.props.data.title.slice(0,100)
//     if(this.props.data.title.length > 100){
//         postTitle+= '...'
//     }
//     const jsbin_URL = this.props.data.jsbin;

//     const commentArray = [];
//     const allComments = this.props.data.comments.map( (item, index) => {
//         commentArray.push(
//             <div key={index} >
//                 <span><i className="fas fa-user-circle mr-2"></i>{this.props.data.comments[index].name}</span>
//                 <p><small>{this.props.data.comments[index].comment}</small></p>
//             </div>
//         )
//     } )
//     const fewComments=[];
//     for (var i =0; i<2; i++){
//         fewComments.push(commentArray[i]);
//     }
//     const Comments = fewComments.map( (item, index) => {
//         return (
//             fewComments[index]
//         )
//     } )

//     return (
//         <div className="row pt-5 my-4 border bg-white">
//             <div className="col-md-2 col-sm-2 col-2">
//                 <UpVote />
//             </div>
//             <div className="col-md-10 col-sm-10 col-8 justify-content-start ">
//                 {/* <UpVote className="col-m-1 col-sm-1 justify-content-start mt-5"/> */}
//                 <h4>{postTitle}</h4>
//                 <p><small className="text-muted" > {this.props.data.author} - post ID: {this.props.data._id} </small></p>
//                 <p>{postDesc}</p>
                
//                 <a style={aTag} target="_blank" href={this.props.data.jsbin}><img style={jsbinStyle} src={jsbinPIC} alt="jsbinPicture"/></a>

//                 <Link style={inlineBlock} to={`/thread/${this.props.data._id}`}> <p> View More </p> </Link>
//                 <div className="dropdown-divider mt-5"></div>

//                 <small style={blockStyle} className="text-muted">Comments ({this.props.data.comments.length})</small>
                
//                 <a href="#" className="badge pill badge-primary">View more comments <span className="badge badge-light">9</span> </a>

//                 {Comments}
//             </div>

            
//         </div>
//     )
// }
