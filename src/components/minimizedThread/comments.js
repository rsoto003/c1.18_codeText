import React, {Component} from 'react';





class Comments extends Component{
    constructor(props){
        super(props);
        this.state={
            commentLength:2
        }
    }
    renderMoreComments(){
        this.setState({
            commentLength: this.state.commentLength + 3
        })
    }
    render(){
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
                <p onClick={this.renderMoreComments.bind(this)} className="badge pill badge-primary">View more comments <span className="badge badge-light">{commentArray.length}</span> </p>
            
                {Comments}
                
            </div>

        )
    }

}



export default Comments