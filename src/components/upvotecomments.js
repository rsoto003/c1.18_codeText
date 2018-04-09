import React, {Component} from 'react';
import '../assets/css/app.css';

class upvoteComments extends Component{
    constructor(props){
        super(props);

        this.state= {
            value: 0
        }
        this.handleAddVote = this.handleAddVote.bind(this);
        this.handleDeleteVote = this.handleDeleteVote.bind(this);
    }

    handleAddVote(){        
        console.log('handleAddVote: ', this.state.value);       

        this.setState({
           value: this.state.value + 1
        });
    }

    handleDeleteVote(){        
        console.log('handledeleteVote: ', this.state.value);           
        
        this.setState({
            value: this.state.value - 1
        });

        if(this.state.value < 1) {
            this.setState({
                value: 0   
            });
        } 
    }

    render(){

        return(

            <div className="voteBox">                                           
                <div className="addVote fa-3x" onClick={this.handleAddVote}> <i className="fas fa-angle-up"></i></div>                 

                <div className="voteNum">{this.state.value}</div>

                <div className="deleteVote fa-3x" onClick={this.handleDeleteVote}> <i className="fas fa-angle-down"></i></div>
            </div>
        )
    }
}

export default upvoteComments;