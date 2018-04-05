import React, { Component } from 'react';
import '../assets/css/app.css';

class UpVote extends Component{
    constructor(props){
        super(props);

        this.state= {
            value: 0
        }
    }

    handleAddVote(){        
        console.log('handleAddVote: ', this.state);       

        this.setState({
           value: this.state.value + 1
        });
    }

    handleDeleteVote(){        
        console.log('handledeleteVote: ', this.state);        
        
        this.setState({
            value: this.state.value - 1
        });
    }

    render(){

        return(

            <div className="voteBox">                                           
                <div className="glyphicon glyphicon-triangle-top" onClick={this.handleAddVote}> Add </div> 

                {/* <input type="number" name="" value={this.state.value} onChange={(event) => this.state.value}/>  */}

                <div>{this.state.value}</div>

                <div className="glyphicon glyphicon-triangle-bottom" onClick={this.handleDeleteVote}> Delete </div>
            </div>
        )
    }
}

export default UpVote;