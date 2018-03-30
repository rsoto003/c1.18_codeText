import React from 'react';
import '../assets/css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar'
import Sidebar from './sidebar'
import Thread from './thread'

const Main = () => {
    return(
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <Sidebar/>
                    <Thread/>
                </div>
            </div>
        </div>
    )

};

export default Main;
