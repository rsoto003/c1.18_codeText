import React from 'react';
// import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';

import '../assets/css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from './navbar';
import Sidebar from './sidebar';
import ThreadFeed from './threadFeed';
import NewPost from './newPost';
import Thread from './thread';

const UniqueThread = ({ match }) => {
    console.log(match)
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
                    <Route exact path="/" component={ThreadFeed} />
                    <Route path='/newPost' component={NewPost}/>
                    <Route path='/thread/:threadID' component={UniqueThread} />
                </div>
            </div>
        </div>
    )

};

export default App;
