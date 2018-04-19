import React, {Component} from 'react';
import '../assets/css/app.css';
import axios from 'axios';
import {connect} from 'react-redux'

class UpVote extends Component{
    constructor(props){
        super(props);

        this.state= {
            value: this.props.postData.data.rating
        }
        this.pointerStyle={
            cursor:'pointer'
        }
        this.handleAddVote = this.handleAddVote.bind(this);
        this.handleDeleteVote = this.handleDeleteVote.bind(this);
        this.axiosCall = this.axiosCall.bind(this)
    }



    axiosCall(vote){
        axios.get('http://localhost:5000/profile/data').then(res=>{
            console.log(res.data)
            const submittedData={
                vote,
                threadID: this.props.postData.data._id,
                user: res.data
            }
            axios.post('/posts/vote', submittedData ).then( res => {
                // console.log(res);
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
        // console.log(this.props)

    
        return(

            <div className="text-center">                                           
                <div style={this.pointerStyle} className="" onClick={this.handleAddVote}> <i className="fas fa-angle-up fa-2x"></i></div>                 

                <div >{this.state.value}</div>

                <div style={this.pointerStyle} onClick={this.handleDeleteVote}> <i className="fas fa-angle-down fa-2x"></i> </div>
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