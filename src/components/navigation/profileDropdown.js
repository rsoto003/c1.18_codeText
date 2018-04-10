import React, {Component} from 'react';

class ProfileDropdown extends Component{
    constructor(props){
        super(props)
        this.state={
            toggle: false,
            dropdownDisplay: {display:'none'},
        }
        this.toggleMenu = this.toggleMenu.bind(this);

    }

    toggleMenu(){
        console.log(this.state)
        const newToggleState = this.state.toggle ? false : true;
        const newDropdownDisplay = this.state.toggle ? {display: 'none'} : {display: 'block'}
        this.setState({
            toggle: newToggleState,
            dropdownDisplay: newDropdownDisplay
        })
    }

    render(){
        const pointer = {cursor: 'pointer'};
        return(
            <div onClick={this.toggleMenu} className="dropdown">
                <i style={pointer} className="fas fa-user-circle fa-2x"></i>
                <div style={this.state.dropdownDisplay} className="dropdown-menu">
                    <a href="#" className="dropdown-item">hello</a>
                </div>
            </div>
        )
    }
};

export default ProfileDropdown