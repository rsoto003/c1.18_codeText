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
            userData:{

            }
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

    componentWillMount(){
        axios.get('/profile/data').then(res=>{
            this.setState({
                userData: res.data
            })
        })
    }

    toggleMenuOn(){
        this.setState({
            toggle: true,
            dropdownDisplay: {...this.state.dropdownDisplay, display:'block'}
        })
    }


    authRender(){
        if(this.props.auth){
            return(
                <div>
                    <Link to="/profile"><button className="btn btn-primary">My profile</button></Link>
                    <button onClick={this.props.signOut} className="btn btn-danger">Log out</button>
                </div>

            )
        } else{
            return(
                <a href="/auth/github" className="btn btn-dark text-white">
                    <i className="fab fa-github fa-2x text-white pr-2"></i> Sign in with gitHub!
                </a>
            )
        }
    }
    authProfilePic(){
        const pointer = {cursor: 'pointer'};
        const picCircle = {
            width: '2em',
            height: '2em',
            cursor:'pointer',
            borderRadius: '50%',
            backgroundImage: `url(${this.state.userData.avatar_url})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            display: 'inlineBlock',
            verticalAlign: '-.125em',
            boxSizing: 'borderBox'
        }
        if(this.props.auth){
            return(
                <div style={picCircle}></div>
            )
        } else{
            return(
                <div className="btn btn-primary">Sign in</div>
            )
        }
    }

    render(){


        const dropdownStyle = {right:0, left:'unset'}
        const dropdownItem= {padding: '.25rem 1.5rem', whiteSpace:'noWrap'} 
        return(
            
            <div onClick={this.toggleMenuOn} className="dropdown">
                {this.authProfilePic()}
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