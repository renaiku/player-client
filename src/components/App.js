import React, { Component } from 'react';
import '../css/App.css';
import ProfilesContainer from './ProfilesContainer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="Banner">PlayeR</div> 
				<ProfilesContainer />
			</div>
		);
	}
}

export default App;
