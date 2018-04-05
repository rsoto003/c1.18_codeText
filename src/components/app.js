import React from 'react';
// import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';

import '../assets/css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllThreads from './allthreads';
import Navbar from './navbar';
import NewPost from './newPost';
import Sidebar from './sidebar';
import Thread from './thread';
import ThreadFeed from './threadFeed';

// const App = () => {
//     return (
//             <div>
//                 <Navbar/>
//                 <div className="container">
//                     <div className="row">
//                         <Sidebar/>
                     
//                         <Route path='/newPost' component={NewPost}/>
//                     </div>



// import NewPost from './newPost';


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
                    <Route exact path="/" component={ThreadFeed} />
                    <Route exact path="/" component={AllThreads} />
                    <Route path='/newPost' component={NewPost}/>
                    <Route path='/thread/:threadID' component={UniqueThread} />
                </div>
            </div>
    )
}

export default App;
