import React, {Component} from 'react';
import axios from 'axios'




class Comments extends Component{
    constructor(props){
        super(props);
        this.state={
            commentLength:2,
            allCommentsLength: this.props.data.comments.length 
        }
        this.axiosRequest = this.axiosRequest.bind(this)
    }

    componentWillReceiveProps(){
        this.axiosRequest()
    }

    axiosRequest(){
        console.log(this.props)
        axios.post('http://localhost:5000/uniqueThread', {threadID: this.props.data._id} ).then( res => {
            console.log('RESPONSE: ', res)
            this.setState({
                commentLength:2,
                allCommentsLength: res.data.comments.length
            })
        } )
        
    }

    renderMoreComments(){
        this.setState({
            commentLength: this.state.commentLength + 3
        })    }

    viewMoreComments(){
         if (this.state.allCommentsLength >2){
            return(
                <p onClick={this.renderMoreComments.bind(this)} className="badge pill badge-primary">View more comments <span className="badge badge-light">{this.state.allCommentsLength}</span> </p>
            )
        } else if (this.state.allCommentsLength >0){
            return(
                <small className="text-muted" >Comments ({this.state.allCommentsLength})</small>
            )
        } else if (this.state.allCommentsLength === 0){
            return (
                <p className="py-4" > No comments yet! </p>
            )
        }
    }

    

    render(){
        
        // console.log(this.props)
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
        for (var i =0; i<this.state.commentLength; i++){
            fewComments.push(commentArray[i]);
        }
        const Comments = fewComments.map( (item, index) => {
            return (
                fewComments[index]
            )
        } )

        return(
            <div>
                {this.viewMoreComments()}
                {Comments}
                
            </div>

        )
    }

}



export default Comments