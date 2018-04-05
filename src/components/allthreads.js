import React, { Component } from 'react';
import postData from '../data/threadItems';
import Thread from './thread';

class AllThreads extends Component {
    constructor(props){
        super(props);
    }

    sortThread(array){
        console.log(array);

        const timeStamp = array.sort((a, b) => {
            let timeStamp1 = a.timestamp;
            let timeStamp2 = b.timestamp;
                
            if(timeStamp1 < timeStamp2){
                return -1;
            } else if(timeStamp1 > timeStamp2){
                return 1;
            } else{
                return 0;
            }
        });
            return timeStamp;
        } 

    render(){
        console.log(postData);
        const sortedPosts = this.sortThread(postData);
        const threads = sortedPosts.map((item, index) => {
            console.log(item);
            return (
                <Thread data={item} key={index}/>
            )
        });
            return (
                <div className="col-m-12 col-sm-9 justify-content-start mt-5 ">
                {threads} 
                </div>
            )
    }
}

export default AllThreads; 
