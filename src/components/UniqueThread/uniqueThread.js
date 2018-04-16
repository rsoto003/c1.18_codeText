import React, {Component} from 'react';
import axios from 'axios'
import UpvoteComments from '../upvotecomments';
import Comments from '../comments'

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
            data:{
                res:{
                    comments:[]
                }
            },
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
            const newData=this.state.data;
            newData.res=res.data
            this.setState({
                data:newData,
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
        return(
            
                <div className="col-m-10 col-sm-10 justify-content-start mt-5 pt-5 bg-white offset-md-2 pl-5 ">
                    <h2>{this.state.title}</h2>
                    <p><small className='text-muted' >Author: no one </small></p>
                    <p>{this.state.description}</p>
                    <button className="btn btn-danger btn-sm" onClick={this.deletePost.bind(this)}>Delete Post</button>
                        <div className="dropdown-divider mb-5"></div>
                        <Comments threadID={this.state.threadID} data={this.state.data.res} />
                    <form style={formStyle} className="form-group" onSubmit={this.onSubmit} >
                        <textarea style={textAreaStyle} id="comment" className="form-control" value={this.state.textInput} onChange={this.updateInput} ></textarea>
                        <div style={this.state.alertStyle} className="alert alert-warning" role="alert"> Cannot leave comment empty! </div>

                        <button className="btn btn-danger btn-sm mt-2" >Add a comment</button>

                    </form>     
                </div>
        )
    }
};

export default Thread;
