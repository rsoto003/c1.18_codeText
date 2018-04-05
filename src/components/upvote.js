import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCaretUp from '@fortawesome/fontawesome-free-solid/faCaretUp';
import faCaretDown from '@fortawesome/fontawesome-free-solid/faCaretDown';
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
                <a className="addVote" onClick={this.handleAddVote}> <FontAwesomeIcon icon={faCaretUp}/></a>                 

                <div>{this.state.value}</div>

                <div className="deleteVote" onClick={this.handleDeleteVote}> <FontAwesomeIcon icon={faCaretDown}/></div>
            </div>
        )
    }
}

export default UpVote;