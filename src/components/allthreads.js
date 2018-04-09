import React, { Component } from 'react';
import postData from '../data/threadItems';
import MinimizedThread from './minimizedThread';

class AllThreads extends Component {
    constructor(props){
        super(props);
    }

    sortThread(object){
        const objectKeyArray = Object.keys(object); 
        const sortedThreads = objectKeyArray.sort();
        console.log(sortedThreads);
        return sortedThreads;
    } 

    render(){
        const sortedPosts = this.sortThread(postData);
        const threads = sortedPosts.map((item, index) => {
            console.log(item);
            return (
                <MinimizedThread data={postData[item]} key={index}/>
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
