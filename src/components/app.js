import React from 'react';
import {Route} from 'react-router-dom';
import '../assets/css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import NewPost from './newPost';
import Sidebar from './sidebar';
import Thread from './uniqueThread';
import AllThreads from './allthreads'

const UniqueThread = ({ match }) => {
    return(
        <Thread threadID={match.params.threadID} />
    )
}

const App = () => {
    return(
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <Sidebar/>
                    {/* <Route exact path="/" component={ThreadFeed} /> */}
                    <Route exact path="/" component={AllThreads} />
                    <Route path='/newPost' component={NewPost}/>
                    <Route path='/thread/:threadID' component={UniqueThread}  />
                </div>
            </div>
        </div>
    )
}

export default App;
