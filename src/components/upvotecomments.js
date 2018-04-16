import React, {Component} from 'react';
import '../assets/css/upvotecomment.css';
import axios from 'axios';

class UpvoteComments extends Component{
    constructor(props){
        super(props);

        this.state= {
            value: this.props.data.rating
        }
        this.pointerStyle={
            cursor:'pointer'
        }
        this.handleAddVote = this.handleAddVote.bind(this);
        this.handleDeleteVote = this.handleDeleteVote.bind(this);
        this.axiosCall = this.axiosCall.bind(this);

    }
    axiosCall(vote){
        const submittedData={
            vote,
            commentData: this.props.data,
            threadID : this.props.threadID
        }
        
        axios.post('http://localhost:5000/commentVote', submittedData ).then( res => {
            console.log(res);
            this.setState({
                value: res.data.rating
            })
        })
    }

    handleAddVote(){   
        this.axiosCall('up')
        this.setState({
           value: this.state.value + 1
        });
    }

    handleDeleteVote(){        
        this.axiosCall('down')
        this.setState({
            value: this.state.value - 1
        });

        if(this.state.value < 1) {
            this.setState({
                value: 0   
            });
        } 
    }

    render(){
        console.log(this.props)
        return(

            <div className="text-center vote-container mb-3">                                            
                <div style={this.pointerStyle} className="addVote fa-1x" onClick={this.handleAddVote}> <i className="fas fa-angle-up"></i></div>                 

                <div className="voteNum">{this.state.value}</div>

                <div style={this.pointerStyle} className="deleteVote fa-1x" onClick={this.handleDeleteVote}> <i className="fas fa-angle-down"></i></div>
            </div>
        )
    }
}

export default UpvoteComments;