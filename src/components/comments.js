import React, {Component} from 'react';
import axios from 'axios'




class Comments extends Component{
    constructor(props){
        super(props);
        this.state={
            commentLength:2,
            //allCommentsLength: this.props.data.comments.length
        }
        this.pointerStyle={
            cursor:'pointer'
        }

    }



    renderMoreComments(){
        this.setState({
            commentLength: this.state.commentLength + 3
        })    
    }

    minimizeComments(){
        this.setState({
            commentLength: 2
        })
    }

    viewMoreComments(){
        const {length } = this.props.data.comments
        if (length === this.state.commentLength && length !==2){
            return(
                <p style={this.pointerStyle} onClick={this.minimizeComments.bind(this)} className="badge pill badge-danger">Minimize Comments <span className="badge badge-light">{length}</span> </p>
            )
        }
         if (length >2){
            return(
                <p style={this.pointerStyle} onClick={this.renderMoreComments.bind(this)} className="badge pill badge-primary">View more comments <span className="badge badge-light">{length}</span> </p>
            )
        } else if (length >0){
            return(
                <small className="text-muted" >Comments ({length})</small>
            )
        } else if (length === 0){
            return (
                <p className="py-4" > No comments yet! </p>
            )
        }
    }



    render(){

        console.log(this.props)
        const commentArray = [];
        const allComments = this.props.data.comments.reverse().map( (item, index) => {
            commentArray.push(
                <div key={index} >
                    <span><i className="fas fa-user-circle mr-2"></i>{this.props.data.comments[index].name}</span>
                    <p><small>{this.props.data.comments[index].comment}</small></p>
                </div>
            )
        } )

        const fewComments=[];
        for (var i =this.state.commentLength; i>0; i--){
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