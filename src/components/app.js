import React from 'react';
import '../assets/css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar'
import Sidebar from './sidebar'
const App = () => {
    return(
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                <Sidebar/>
                <div className="col-8 border"></div>
                </div>
            </div>
        </div>
    )

};

export default App;
