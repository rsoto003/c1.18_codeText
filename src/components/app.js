
import React, {Component} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import axios from 'axios';
import '../assets/css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import {signInCheck} from '../actions';
import Navbar from './navigation/navbar';
import NewPost from './newPost';
import Sidebar from './sidebar';
import Thread from './UniqueThread/uniqueThread';
import AllThreads from './allthreads';
import Leaderboard from './leaderboard';
import Register from './account/register';
import AboutUs from './aboutus';
import Home from './home';
import Profile from './profile'



const UniqueThread = ({ match }) => {
    return(
        <Thread threadID={match.params.threadID} />
    )
}

class App extends Component {
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.signInCheck()
    }

    render(){
        return(
            <div>
                <Navbar/>
                <div className="container-fluid">
                    <div className="row">
                    
                    {/* <Sidebar/> */}

                    <Route exact path="/" render={ ()=> (
                        <Redirect to="/home" component={Home} />
                    )} />
                    
                    <Switch>
                        <Route exact path="/home" />
                        <Route component={Sidebar}/>
                    </Switch>
                    <Switch>
                        <Route exact path="/home" component={Home} />                        
                        <Route path="/profile" component={Profile} />
                        <Route path="/home/:sort?" component={AllThreads} />
                        <Route path='/newPost' component={NewPost}/>
                        <Route path='/thread/:threadID' component={UniqueThread}  />
                        <Route path='/leaderboard' component={Leaderboard} />
                        <Route path="/register" component={Register}/>
                        <Route path="/aboutus" component={AboutUs}/>
                    </Switch>                    
                    
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.user.auth
    }
}

export default withRouter(connect(mapStateToProps, {signInCheck})(App));

// export default App;