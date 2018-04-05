import React, {Component} from 'react';
import postData from '../data/threadItems'


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
            comments: postData[this.props.threadID].comments || '',
            textInput:''
        }
        this.updateInput=this.updateInput.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }

    onSubmit(event){
        event.preventDefault()
        const submittedComment={
            name:'you',
            comment:this.state.textInput
        }
        const newCommentState= this.state.comments.slice();
        newCommentState.push(submittedComment);
        this.setState({
            textInput:'',
            comments:  newCommentState
        })
    }

    updateInput(event){
        this.setState({
            textInput: event.target.value
        })
    }

    render(){
        const Comments = this.state.comments.map( (item, index) => {
            return(
                <div key={index} >
                    <span><i className="fas fa-user-circle mr-2"></i>{this.state.comments[index].name}</span>
                    <p><small>{this.state.comments[index].comment}</small></p>
                </div>
            )
        } )

        return(
                <div className="col-m-12 col-sm-9 justify-content-start mt-5 ">
                    <h2>{postData[this.props.threadID].title}</h2>
                    <p><small className='text-muted' >Author: {postData[this.props.threadID].author} </small></p>
                    <p>{postData[this.props.threadID].description}</p>
                    {/* <iframe src={postData[props.threadID].jsbin} frameborder="0"></iframe> */}
                    <div className="dropdown-divider mb-5"></div>

                    <iframe src={postData[this.props.threadID].jsbin} style={iframeStyle} sandbox="allow-scripts allow-same-origin"></iframe>

                    {Comments}
                    <form style={formStyle} className="form-group" onSubmit={this.onSubmit} >
                        <textarea style={textAreaStyle} id="comment" className="form-control" value={this.state.textInput} onChange={this.updateInput} ></textarea>
                        <button className="btn btn-danger btn-sm" >Add a comment</button>
                    </form>     
                </div>
        )
    }
};

export default Thread;
