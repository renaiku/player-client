import React, { Component } from 'react';
import '../css/SelectableProfile.css';
import defaultUser from '../img/defaultUserPicture.png';

class SelectableProfile extends Component {

	render() {
		return (
			<div className="SelectableProfile" onClick={() => alert('clicked on user ' + this.props.userID)}>
				<img src={defaultUser} className="Picture" alt="default user" draggable="false"/>
				<div className="NameContainer">
					<div className="Name">{this.props.userName}</div>
				</div>
			</div>
		);
	}

}

export default SelectableProfile;
