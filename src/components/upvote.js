import React, {Component} from 'react';
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
        this.handleAddVote = this.handleAddVote.bind(this);
        this.handleDeleteVote = this.handleDeleteVote.bind(this);
    }

    handleAddVote(){        
        console.log('handleAddVote: ', this);       

        this.setState({
           value: this.state.value + 1
        });
    }

    handleDeleteVote(){        
        console.log('handledeleteVote: ', this);           
        
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
                <div className="addVote fa-2x" onClick={this.handleAddVote}> <FontAwesomeIcon icon={faCaretUp} /></div>                 

                <div>{this.state.value}</div>

                <div className="deleteVote fa-2x" onClick={this.handleDeleteVote}> <FontAwesomeIcon icon={faCaretDown} /></div>
            </div>
        )
    }
}

export default UpVote;