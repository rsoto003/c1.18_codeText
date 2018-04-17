import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
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


    render(){
        const pointer = {cursor: 'pointer'};
        const dropdownStyle = {right:0, left:'unset'}
        const dropdownItem= {padding: '.25rem 1.5rem', whiteSpace:'noWrap'} 

        return(
            <div onClick={this.toggleMenuOn} className="dropdown">
                <i style={pointer} className="fas fa-user-circle fa-2x text-white"></i>
                <div style={this.state.dropdownDisplay} className="dropdown-menu">

                    <form style={dropdownItem} className="form-group">
                        <p>sign in to proceed</p>
                        <input  type="text" className="form-control mt-2 mb-2" placeholder="username" />
                        <input type="text" className="form-control mb-2" placeholder="password" />

                        <p><Link to="/register" >Sign up!</Link><button className='btn btn-sm btn-primary float-right' >Submit</button></p>
                    </form>

                </div>
            </div>
        )
    }
};

export default ProfileDropdown