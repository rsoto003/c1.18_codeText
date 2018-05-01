import React, {Component} from 'react';
import '../assets/css/upvotecomment.css';
import axios from 'axios';
import {connect} from 'react-redux';

class UpvoteComments extends Component{
    constructor(props){
        super(props);

        this.state= {
            value: this.props.data.rating
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
        const pointerStyle= !this.props.auth ? {cursor:'unset'} :{cursor:'pointer'}
        const authGray = !this.props.auth ? {color:'#d3d3d37a'} : {color: 'unset'}
        const authAddVote = !this.props.auth ? null : this.handleAddVote
        const authDownVote = !this.props.auth ? null : this.handleDownVote
        return(

            <div className="text-center vote-container mb-3 mt-2">                                            
                <div style={pointerStyle} className="addVote fa-1x" onClick={authAddVote}> <i style={authGray} className="fas fa-angle-up"></i></div>                 

                <div className="voteNum">{this.state.value}</div>

                <div style={pointerStyle} className="deleteVote fa-1x" onClick={authDownVote}> <i style={authGray} className="fas fa-angle-down"></i></div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.user.auth
    }
}

export default connect(mapStateToProps)(UpvoteComments);