import React, {Component} from 'react';
import '../assets/css/app.css';
import axios from 'axios';
import {connect} from 'react-redux'

class UpVote extends Component{
    constructor(props){
        super(props);

        this.state= {
            value: this.props.postData.data.rating,
            up: 'unset',
            down: 'unset'
        }
        this.handleAddVote = this.handleAddVote.bind(this);
        this.handleDownVote = this.handleDownVote.bind(this);
        this.axiosVoteCall = this.axiosVoteCall.bind(this)
    }

    componentWillMount(){
        this.axiosDataCall()
    }

    // componentWillUpdate(){
    //     this.axiosDataCall()
    // }

    axiosDataCall(){
        axios.post('/posts/voteData', {threadID: this.props.postData.data._id}).then(res =>{
            console.log(res);
            if(res.data==='up'){
                this.setState({
                    up: 'yellow'
                })
            }
        })
    }

    axiosVoteCall(vote){
        axios.get('/profile/data').then(res=>{
            const submittedData={
                vote,
                threadID: this.props.postData.data._id,
                user: res.data
            }
            axios.post('/posts/vote', submittedData ).then( res => {
                this.setState({
                    value: res.data.rating
                })
            })
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
        const upColor = !this.props.auth ? {color:'#d3d3d37a'} : {color: this.state.up}
        const downColor = !this.props.auth ? {color:'#d3d3d37a'} : {color: this.state.down}

        const authAddVote = !this.props.auth ? null : this.handleAddVote
        const authDownVote = !this.props.auth ? null : this.handleDownVote
        return(

            <div className="text-center">                                           
                <div style={pointerStyle} onClick={authAddVote}> <i style={upColor} className="fas fa-angle-up fa-2x"></i></div>                 
                <div >{this.state.value}</div>
                <div style={pointerStyle} onClick={authDownVote}> <i style={downColor} className="fas fa-angle-down fa-2x"></i> </div>
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