import React, { Component } from 'react';
import '../css/App.css';
import SelectableProfile from './SelectableProfile';

class App extends Component {
	render() {
		return (
			<div className="App">
				<SelectableProfile />
			</div>
		);
	}
}

export default App;
