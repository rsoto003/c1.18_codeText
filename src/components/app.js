import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import axios from 'axios';
import '../assets/css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navigation/navbar';
import NewPost from './newPost';
import Sidebar from './sidebar';
import Thread from './UniqueThread/uniqueThread';
import AllThreads from './allthreads';
import Leaderboard from './leaderboard';
import Register from './account/register';
import AboutUs from './aboutus';


const UniqueThread = ({ match }) => {
    return(
        <Thread threadID={match.params.threadID} />
    )
}



class App extends Component {
    constructor(props){
        super(props)
        this.state={
            auth:false
        }
    }
    componentWillMount(){
        axios.get('http://localhost:5000/auth/check').then(res=>{
            this.setState({
                auth: res.data.authenticated
            })
        })
    }

    render(){
    return(
        <div>
            <Navbar auth={this.state.auth} />
            <div className="container-fluid">
                <div className="row">
                
                    <Sidebar/>
                    
                    <Route exact path="/" render={ ()=> (
                        <Redirect to="/home/newest" component={AllThreads} />
                    )} />
                    {/* <Route exact path="/home" render={ ()=> (
                        <Redirect to="/home/newest" />
                    )} /> */}
                    <Route path="/home/:sort?" component={AllThreads} />
                    <Route path='/newPost' component={NewPost}/>
                    <Route path='/thread/:threadID' component={UniqueThread}  />
                    <Route path='/leaderboard' component={Leaderboard} />
                    <Route path="/register" component={Register}/>
                    <Route path="/aboutus" component={AboutUs}/>
                </div>
            </div>
        </div>
    )
    }
}

export default App;
