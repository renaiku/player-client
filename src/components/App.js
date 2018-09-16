import React, { Component } from 'react';
import '../css/App.css';
import TitleBar from './TitleBar';
import ProfilesContainer from './ProfilesContainer';
import Library from './Library';
import { connect } from "react-redux";
import { Constants } from '../utils/Constants';

class App extends Component {

	render() {

		const profileSelection = (
			<React.Fragment>
				<TitleBar title="Player 0.1.0"/>
				<div className="Banner">PlayeR</div> 
				<ProfilesContainer />
			</React.Fragment>
		);

		const page = this.props.user.id === Constants.UNDEFINED ? profileSelection : <Library />;

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
