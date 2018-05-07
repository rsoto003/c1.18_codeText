import React, {Component} from 'react';
import '../assets/css/upvotecomment.css';
import axios from 'axios';
import {connect} from 'react-redux';

class UpvoteComments extends Component{
    constructor(props){
        super(props);

        this.state= {
            value: this.props.data.rating,
            up: {color: 'black'},
            down: {color: 'black'}
        }
        this.handleAddVote = this.handleAddVote.bind(this);
        this.handleDownVote = this.handleDownVote.bind(this);
        this.axiosVoteCall = this.axiosVoteCall.bind(this);
    }

    componentDidUpdate(lastProps, lastState){
        if(this.state.value!==lastState.value){
            this.axiosDataCall()
        }
    }

    componentWillMount(){
        this.axiosDataCall()
    }


    axiosVoteCall(vote){
        this.axiosDataCall()

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

    axiosDataCall(){
        axios.post('/comment/voteData', this.props ).then(res => {
            if(res.data ==='up'){
                this.setState({
                    up: {color: '#fdc70c'},
                    down: {color: 'black'}
                })
            } else if (res.data ==='down'){
                this.setState({
                    up:{color: 'black'},
                    down: {color:'#ee3427'}
                })
            } else {
                this.setState({
                    up: {color: 'black'},
                    down: {color: 'black'}
                })
            }
        })
    }

    handleAddVote(){   
        this.axiosVoteCall('up')
    }

    handleDownVote(){        
        this.axiosVoteCall('down')
    }

    render(){
        const pointerStyle= !this.props.auth ? {cursor:'unset'} :{cursor:'pointer'}
        const upColor = !this.props.auth ? {color:'#d3d3d37a'} : this.state.up
        const downColor = !this.props.auth ? {color:'#d3d3d37a'} : this.state.down

        const authAddVote = !this.props.auth ? null : this.handleAddVote
        const authDownVote = !this.props.auth ? null : this.handleDownVote
        return(

            <div className="text-center vote-container mb-3 mt-2">                                            
                <div style={{...pointerStyle, ...upColor}} className="addVote fa-1x" onClick={authAddVote}> <i className="fas fa-angle-up"></i></div>                 

                <div className="voteNum">{this.state.value}</div>

                <div style={{...pointerStyle, ...downColor}} className="deleteVote fa-1x" onClick={authDownVote}> <i className="fas fa-angle-down"></i></div>
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