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
        return this.state.postData;
    } 

    render(){

        const threads = this.state.postData.map((item, index) => {
            return (
                <MinimizedThread data={item} key={index}/>
            )
        });
        return (
            <div className="col-sm-12 col-md-10 mt-4 offset-md-2 pl-5">
                {/* <div className="row justify-content-end">
                    <FilterFeed/>                 
                </div> */}
                <div className="row">                    
                    <div className="col-sm-12 col-md-10">{threads}</div>
                    {/* <div className="col-1-sm d-none d-sm-block"></div> */}
                </div>
            </div>
        )
    }
}

export default AllThreads; 
