import React, { Component } from 'react';
import '../css/App.css';
import ProfilesContainer from './ProfilesContainer';
import { connect } from "react-redux";
import { Constants } from '../utils/Constants';

class App extends Component {

	render() {

		const profileSelection = (
			<React.Fragment>				
				<div className="Banner">PlayeR</div> 
				<ProfilesContainer />
			</React.Fragment>
		);

		const test = (
			<div className="Test">NOPE</div>
		);

		console.log('ID = ' + this.props.user.id)

		const page = this.props.user.id === Constants.UNDEFINED ? profileSelection : test;

		return (
			<div className="App">
				{page}
			</div>
		);
	}
}

const mapStateToProps = state => {
    return { 
		users: state.users,
		user: state.user
    };
};

export default connect( mapStateToProps, null )(App);
