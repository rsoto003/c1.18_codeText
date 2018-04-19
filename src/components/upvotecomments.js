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

        axios.get('/profile/data').then(res=>{
            const submittedData={
                vote,
                commentData: this.props.data,
                threadID : this.props.threadID,
                user: res.data,
            }
            axios.post('/comment/vote', submittedData ).then( res => {
                console.log(res);
                this.setState({
                    value: res.data.rating
                })
            })
        })
    }

    handleAddVote(){   
        this.axiosCall('up')

    }

    handleDeleteVote(){        
        this.axiosCall('down')
    }

    render(){
        return(

            <div className="text-center vote-container mb-3 mt-2">                                            
                <div style={this.pointerStyle} className="addVote fa-1x" onClick={this.handleAddVote}> <i className="fas fa-angle-up"></i></div>                 

                <div className="voteNum">{this.state.value}</div>

                <div style={this.pointerStyle} className="deleteVote fa-1x" onClick={this.handleDeleteVote}> <i className="fas fa-angle-down"></i></div>
            </div>
        )
    }
}

export default UpvoteComments;