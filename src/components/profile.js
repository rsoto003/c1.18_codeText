import React, { Component } from 'react';
import axios from 'axios'

class Profile extends Component{
    constructor(props){
        super(props)
        this.state={
            profile: {}
        }
    }
    componentWillMount(){
        axios.get('/profile/data').then(res=>{
            console.log(res)
            this.setState({
                profile: res.data
            })
        })
    }
    render(){
        const profile={
            height: '100px',
            width: '100px',
            backgroundImage: `url(${this.state.profile.avatar_url})`,
            backgroundSize: 'cover',
        }
        return(
            <div className="col-sm-12 col-md-10 mt-md-4 offset-md-2 pl-md-5" >
                <h1 className="text-center display-3">My account</h1>
                <div className="dropdown-divider mt-2"></div>
                <div className="row justify-content-center justify-content-md-start mt-3">
                    <div className="col-12 col-md-3" >
                        <div style={profile} className="border rounded-circle mx-auto mx-md-0" ></div>
                        <p className="text-center" ><a href="#"><small>Change Picture?</small></a></p>
                    </div>
                    <div className="col-12 col-md-2 align-self-center" >
                        <h3 className="text-center" >{this.state.profile.name}</h3>
                    </div>
                    <div className="col-md-7 col-12 float-right">
                        <div className="col">
                            <div className="col mt-3 text-center text-md-right"><a href="#">Change Email?</a></div>
                            <div className="col mt-3 text-center text-md-right"><a href="#">Change Password?</a></div>
                            <div className="col mt-3 text-center text-md-right"><a href="#">Preferences</a></div>
                            <div className="col mt-3 text-center text-md-right"><a href="#">Additional options</a></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile