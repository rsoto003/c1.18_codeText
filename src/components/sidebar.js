import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { sidebarOff } from '../actions'
import '../assets/css/sidebar.css';

class Sidebar extends Component{
	constructor(props){
		super(props);
			this.state={
				expand: {transform:'-100%'},
				backdrop: {display:'none'}
			}
		this.closeSidebar = this.closeSidebar.bind(this)
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.sidebar){
			this.setState({
				expand: {transform: "translateX(0)"},
				backdrop: {display:'block'}
			})
		}
	}

	closeSidebar(){
		this.props.sidebarOff()
		this.setState({
			expand:{transform: 'translateX(-100%)'},
			backdrop: {display:'none'}
		})
	}
	render(){
		return (
			<div>
				<nav style={this.state.expand} className="sidebar col-md-2 nav nav-pills flex-column">
					<NavLink onClick={this.closeSidebar} className="nav-link font-weight-bold" to="/newPost" activeClassName="active">Post a question!</NavLink>
					<NavLink onClick={this.closeSidebar} className="nav-link font-weight-bold" to="/home/popular" activeClassName="active" >Popular</NavLink>
					<NavLink onClick={this.closeSidebar} className="nav-link font-weight-bold" to="/home/comments" activeClassName="active">Comments</NavLink>
					<NavLink onClick={this.closeSidebar} className="nav-link font-weight-bold" to="/home/newest" activeClassName="active">Newest</NavLink>
					<NavLink onClick={this.closeSidebar} className="nav-link font-weight-bold" to="/home/oldest" activeClassName="active">Oldest</NavLink>
					<NavLink onClick={this.closeSidebar} className="nav-link font-weight-bold" to="/leaderboard" activeClassName="active">Leaderboards</NavLink>
					<NavLink onClick={this.closeSidebar} className="nav-link font-weight-bold" to="/aboutus" activeClassName="active">About Us</NavLink>
				</nav>
				<div onClick={this.closeSidebar} style={this.state.backdrop} className="backdrop"></div>
			</div>
	
		)
	}

}

function mapStateToProps(state){
	return{
		sidebar: state.sidebar.toggle
	}
}


export default connect(mapStateToProps, {sidebarOff})(Sidebar)

