// IMPORTS
import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { actionSetLoggedInUser } from '../actions/actionCreators';
import User from '../models/User';

// CSS & OTHERS
import '../css/SelectableProfile.css';
import defaultAvatar from '../img/defaultUserPicture.png';

// COMPONENT CLASS
class SelectableProfile extends Component {

	render() {
		return (
			<div className="SelectableProfile" onClick={() => this.props.setLoggedInUser(this.props.user)}>
				<img src={defaultAvatar} className="Avatar" alt="default Avatar" draggable="false"/>
				<div className="NameContainer">
					<div className="Name">{this.props.user.name}</div>
				</div>
			</div>
		);
	}

}

// PROPTYPES
SelectableProfile.propTypes = {
    user: PropTypes.instanceOf(User).isRequired
};

// REDUX STORE MAPPING
// const mapStateToProps = state => {
//     return { 
//         users: state.articles
//     };
// };

const mapDispatchToProps = dispatch => {
    return {
        setLoggedInUser: user => dispatch(actionSetLoggedInUser(user))
    };
};

// EXPORT
export default connect( null, mapDispatchToProps )(SelectableProfile);