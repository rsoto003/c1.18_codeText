import React, {Component} from 'react';
import postData from '../data/threadItems'
import axios from 'axios'
import UpvoteComments from './upvotecomments';

const textAreaStyle={
    fontSize: '13px',
    height: '55px',
    marginBottom:'2px'
}
const formStyle={
    width:'100%'
}
const iframeStyle={
    width: '100%',
    height: '400px'
}

class Thread extends Component{
    constructor(props){
        super(props)
        this.state={
            comments: [],
            textInput:'',
            description:'',
            title: '' ,
            jsbin:'',
            threadID: this.props.threadID,
            alertStyle: { display: 'none' }
        }
        this.updateInput=this.updateInput.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    componentWillMount(){
        axios.post(`http://localhost:5000/uniqueThread`, { threadID: this.props.threadID } ).then( res => {
        this.setState({
            comments: res.data.comments,
            description: res.data.description,
            title: res.data.title,
            jsbin:res.data.jsbin
            })
            console.log(res);
        })
    }

    onSubmit(event){
        event.preventDefault()
        const submittedComment={
            name:'Anonymous User',
            comment:this.state.textInput,
            threadID: this.props.threadID
        }

        if (this.validCheck(this.state.textInput)){

            this.setState({
                textInput:'',
            })
            axios.post(`http://localhost:5000/addComment`, submittedComment).then( res => {
                this.setState({
                    comments: res.data.comments
                })
                console.log(res)
            })
        }

        // const newCommentState= this.state.comments.slice();
        // newCommentState.push(submittedComment);
    }
    deletePost(event){
        axios.post(`http://localhost:5000/delete`, {threadID: this.state.threadID} );
    }


    validCheck(string){
        if(string.length > 0){
            this.setState({
                alertStyle: {display:'none'}
            })
            return true
        } else {
            this.setState({
                alertStyle: {display:'block'}
            })

            return false
        
        }
    }

    updateInput(event){
        this.setState({
            textInput: event.target.value
        })
    }

    render(){
        console.log(this.props)
        const Comments = this.state.comments.map( (item, index) => {
            return(
                <div key={index} className="row">
                    <div className="col-md-2 col-sm-2 col-2">
                        <UpvoteComments threadID={this.props.threadID} data={item} />
                    </div>
                    <div className="col-md-10 col-sm-10 col-8 justify-content-start">
                        <span><i className="fas fa-user-circle mr-2"></i>{item.name}</span>
                        <p><small>{item.comment}</small></p>
                    </div>
                </div>
            )
        } )
        
        return(
                <div className="col-m-12 col-sm-10 justify-content-start mt-5 pt-5 bg-white ">
                    <h2>{this.state.title}</h2>
                    <p><small className='text-muted' >Author: no one </small></p>
                    <p>{this.state.description}</p>
                    <button className="btn btn-danger btn-sm" onClick={this.deletePost.bind(this)}>Delete Post</button>
                    {/* <iframe src={postData[props.threadID].jsbin} frameborder="0"></iframe> */}
                               <div className="dropdown-divider mb-5"></div>

                    {/* <iframe src={this.state.jsbin} style={iframeStyle} sandbox="allow-scripts allow-same-origin"></iframe> */}

                     
                    {Comments}
                    <form style={formStyle} className="form-group" onSubmit={this.onSubmit} >
                        <textarea style={textAreaStyle} id="comment" className="form-control" value={this.state.textInput} onChange={this.updateInput} ></textarea>
                        <div style={this.state.alertStyle} className="alert alert-warning" role="alert"> Cannot leave comment empty! </div>

                        <button className="btn btn-danger btn-sm" >Add a comment</button>

                    </form>     
                </div>
        )
    }
};

export default Thread;
