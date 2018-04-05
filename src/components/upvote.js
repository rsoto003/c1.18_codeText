import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCaretUp from '@fortawesome/fontawesome-free-solid/faCaretUp'
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
                <div className="addVote" onClick={this.handleAddVote}> <FontAwesomeIcon icon={faCaretUp}/></div>                 

                <div>{this.state.value}</div>

                <div className="deleteVote" onClick={this.handleDeleteVote}> <i className="fas fa-chevron-square-down"></i></div>
            </div>
        )
    }
}

export default UpVote;