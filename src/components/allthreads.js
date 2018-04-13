import React, { Component } from 'react';
import MinimizedThread from './minimizedThread/minimizedThread';
import FilterFeed from './filterFeed';
import axios from 'axios';

class AllThreads extends Component {
    constructor(props){
        super(props);
        this.state = {
            oldField : null,
            postData : []
        }
        this.fetchDataFromServer = this.fetchDataFromServer.bind(this);
    }
    fetchDataFromServer(){
        if(this.state.oldField !== this.props.match.params.sort){
            axios.get(`http://localhost:5000/?field=${this.props.match.params.sort}`).then(res=>{
                if(res.data.confirmation){
                    this.setState({
                        postData: res.data.results,
                        oldField: this.props.match.params.sort
                    })
                }
            })    
        }
    }
    componentDidUpdate(){
        this.fetchDataFromServer();
    }
    componentDidMount(){
        this.fetchDataFromServer();
    }
    sortThread(object){
        //const objectKeyArray = Object.keys(object); 
        //const sortedThreads = objectKeyArray.sort();
        return this.state.postData;
    } 

    render(){

        //const sortedPosts = this.sortThread(this.state.postData);
        const threads = this.state.postData.map((item, index) => {
            return (
                <MinimizedThread data={item} key={index}/>
            )
        });
        return (
            <div className="col-m-12 col-sm-8 justify-content-start mt-3">
            <FilterFeed/>
            {threads} 
            </div>
        )
    }
}

export default AllThreads; 
