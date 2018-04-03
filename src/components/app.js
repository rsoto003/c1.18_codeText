import React from 'react';
// import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'

import '../assets/css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from './navbar'
import Sidebar from './sidebar'
import Thread from './thread'
import NewPost from './newPost'

const App = () => {
    return(
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <Sidebar/>
                    <Route exact path="/" component={Thread} />
                    <Route path='/newPost' component={NewPost}/>
                </div>
            </div>
        </div>
    )

};

export default App;
