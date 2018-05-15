import React, {Component} from 'react';
import '../assets/css/app.css';
import axios from 'axios';
import {connect} from 'react-redux'

class UpVote extends Component{
    constructor(props){
        super(props);

        this.state= {
            value: this.props.postData.data.rating,
            up: {color:'black'},
            down: {color:'black'}
        }
        this.handleAddVote = this.handleAddVote.bind(this);
        this.handleDownVote = this.handleDownVote.bind(this);
        this.axiosVoteCall = this.axiosVoteCall.bind(this);
        this.axiosDataCall = this.axiosDataCall.bind(this);
    }

    componentWillReceiveProps(){
        this.axiosDataCall()
    }


    axiosDataCall(){
        axios.post('/posts/voteData', {threadID: this.props.postData.data._id}).then(res =>{
            if(res.data === 'up'){
                this.setState({
                    up: {color: '#fdc70c'},
                    down:{color:'black'}
                })
            }else if(res.data === 'down' ){
                this.setState({
                    up:{color:'black'},
                    down:{color:'#ee3427'}
                })
            } else if (!res.data){
                this.setState({
                    up:{color:'black'},
                    down:{color: 'black'}
                })
            }
            this.forceUpdate()
        })
    }

    axiosVoteCall(vote){
        const submittedData={
            vote,
            threadID: this.props.postData.data._id,
        }
        axios.post('/posts/vote', submittedData ).then( res => {
            console.log(res.data.rating)
            this.setState({
                value: res.data.rating
            })
            this.axiosDataCall()
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
            <div className="text-center">                                           
                <div style={{...upColor, ...pointerStyle}} onClick={authAddVote}> <i className="fas fa-angle-up fa-2x"></i></div>                 
                <div >{this.state.value}</div>
                <div style={{...downColor, ...pointerStyle}} onClick={authDownVote}> <i className="fas fa-angle-down fa-2x"></i> </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.user.auth
    }
}

export default connect(mapStateToProps)(UpVote)