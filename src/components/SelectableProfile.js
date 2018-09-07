import React, { Component } from 'react';
import '../css/SelectableProfile.css';
import defaultUserPicture from '../img/defaultUserPicture.png';

class SelectableProfile extends Component {
	render() {
		return (
			<div className="SelectableProfile">
				<img src={defaultUserPicture} className="Picture" alt="default user picture" />
				<div className="Name">renaiku</div>
			</div>
		);
	}
}

export default SelectableProfile;
