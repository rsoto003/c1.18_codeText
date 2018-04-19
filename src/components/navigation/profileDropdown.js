import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux';
import {signOut} from '../../actions'


class ProfileDropdown extends Component{
    constructor(props){
        super(props)
        this.state={
            toggle: false,
            dropdownDisplay: {
                display:'none',
                right:0,
                left:'unset'
            },
        }
        this.toggleMenuOn = this.toggleMenuOn.bind(this);
        this.componentClickCheck = this.componentClickCheck.bind(this)
    }

    componentDidUpdate(){
        if ( this.state.toggle ){
            document.addEventListener('click', this.componentClickCheck)
        } else {
            document.removeEventListener('click', this.componentClickCheck)
        }
    }

    componentClickCheck(event){
        if(!ReactDOM.findDOMNode(this).contains(event.target)){
            this.setState({
                toggle:false,
                dropdownDisplay: {...this.state.dropdownDisplay, display: 'none'}
            })
        }
    }

    toggleMenuOn(){
        // const newToggleState = this.state.toggle ? false : true;
        // const newDropdownDisplay = this.state.toggle ? {display: 'none'} : {display: 'block'}
        this.setState({
            toggle: true,
            dropdownDisplay: {...this.state.dropdownDisplay, display:'block'}
        })
    }



    authRender(){
        if(this.props.auth){
            return(
                <button onClick={this.props.logOff} className="btn btn-danger">Log out</button>
            )
        } else{
            return(
                <a href="http://localhost:5000/auth/github" className="btn btn-dark text-white">
                    <i className="fab fa-github fa-2x text-white pr-2"></i> Sign in with gitHub!
                </a>
            )
        }
    }

    render(){
        console.log(this.props)
        const pointer = {cursor: 'pointer'};
        const dropdownStyle = {right:0, left:'unset'}
        const dropdownItem= {padding: '.25rem 1.5rem', whiteSpace:'noWrap'} 

        

        return(
            <div onClick={this.toggleMenuOn} className="dropdown">
                <i style={pointer} className="fas fa-user-circle fa-2x text-white"></i>
                <div style={this.state.dropdownDisplay} className="dropdown-menu">                    
                    <form style={dropdownItem} className="form-group">
                        {this.authRender()}
                    </form>

                </div>
            </div>
        )
    }
};
function mapStateToProps(state){
    return{
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {signOut:signOut})(ProfileDropdown)