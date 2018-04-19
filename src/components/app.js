import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
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
import Home from './home';

const UniqueThread = ({ match }) => {
    return(
        <Thread threadID={match.params.threadID} />
    )
}

const App = () => {
    return(
        <div>
            <Navbar/>
            <div className="container-fluid">
                <div className="row">
                
                    {/* <Sidebar/> */}
                    {/* <Home/> */}

                    <Route exact path="/" render={ ()=> (
                        <Redirect to="/home" component={Home} />
                    )} />
                    <Switch>
                        <Route exact path="/home" />
                        <Route component={Sidebar}/>
                    </Switch>
                    <Switch>
                        <Route exact path="/home" component={Home} />
                        <Route path="/home/:sort?" component={AllThreads} />
                        <Route path='/newPost' component={NewPost}/>
                        <Route path='/thread/:threadID' component={UniqueThread}  />
                        <Route path='/leaderboard' component={Leaderboard} />
                        <Route path="/register" component={Register}/>
                        <Route path="/aboutus" component={AboutUs}/>
                    </Switch>

                    {/* <Route exact path="/" render={ ()=> (
                        <Redirect to="/home/newest" component={AllThreads} />
                    )} /> */}
                    
                </div>
            </div>
        </div>
    )
}

export default App;
