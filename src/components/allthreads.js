import React, { Component } from 'react';
import MinimizedThread from './minimizedThread/minimizedThread';
import FilterFeed from './filterFeed';

class AllThreads extends Component {
    constructor(props){
        super(props);
        this.state = {
            oldField : null,
            postData : []
        }
    }
    fetchDataFromServer(){
        if(this.state.oldField !== this.props.match.params.sort){
            fetch('http://localhost:5000/?field='+this.props.match.params.sort).then(response => response.json()).then(data=>{
                if(data.confirmation){
                    this.setState({
                        postData: data.results,
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
            <div className="col-9">
                <div className="row justify-content-end">
                    <FilterFeed/>                 
                </div>
                <div className="row">
                    <div className="col-10">{threads}</div>
                    <div className="col-2"></div>
                </div>
            </div>
        )
    }
}

export default AllThreads; 
