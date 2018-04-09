import React, { Component } from 'react';
import postData from '../data/threadItems';
import MinimizedThread from './minimizedThread';
import FilterFeed from './filterFeed';

class AllThreads extends Component {
    constructor(props){
        super(props);
        this.state = {
            oldField : null,
            postData : []
        }
    }
    componentDidUpdate(){
        console.log('update');
        console.log(this.props);
        if(this.state.oldField !== this.props.match.params.sort){
            fetch('http://localhost:3001/threads?field='+this.props.match.params.sort).then(response => response.json()).then(data=>{
                console.log('got data: ',data);
                this.setState({
                    postData: data,
                    oldField: this.props.match.params.sort
                })
            })    
        }
    }
    componentDidMount(){
        console.log('mount');
        fetch('http://localhost:3001/threads?field='+this.props.match.params.sort).then(response => response.json()).then(data=>{
            console.log('got data: ',data);
            this.setState({
                postData: data,
                oldField: this.props.match.params.sort
            })
        })   
    }
    sortThread(object){
        //const objectKeyArray = Object.keys(object); 
        //const sortedThreads = objectKeyArray.sort();
        return this.state.postData;
    } 

    render(){
        const sortedPosts = this.sortThread(this.state.postData);
        const threads = sortedPosts.map((item, index) => {
            return (
                <MinimizedThread data={item} key={index}/>
            )
        });
        return (
            <div className="col-m-12 col-sm-10 justify-content-start mt-4">
            <FilterFeed/>
            {threads} 
            </div>
        )
    }
}

export default AllThreads; 
