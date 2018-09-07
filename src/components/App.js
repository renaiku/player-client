import React, { Component } from 'react';
import '../css/App.css';
import SelectableProfile from './SelectableProfile';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="Banner">PlayeR</div> 
				<div className="ProfilesContainer">
					<SelectableProfile />
					<SelectableProfile />
					<SelectableProfile />
					<SelectableProfile />
					<SelectableProfile />
					<SelectableProfile />
					<SelectableProfile />
					<SelectableProfile />
					<SelectableProfile />
					<SelectableProfile />
					<SelectableProfile />
					<SelectableProfile />
					<SelectableProfile />
					<SelectableProfile />
					<SelectableProfile />
					<SelectableProfile />
				</div>
			</div>
		);
	}
}

export default App;
