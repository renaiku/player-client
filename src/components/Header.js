// IMPORTS
import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import User from '../models/User';

// CSS & OTHERS
import '../css/Header.css';
//import { strings } from '../locales/i18n';

// COMPONENT CLASS
class Header extends Component {

	render() {
		return (
			<div className="Header">
                {/* strings('Library.welcome', { name: this.props.user.name }) */}
                {this.props.user.id} - {this.props.user.name}
			</div>
		);
	}

}

// PROPTYPES
Header.propTypes = {
    user: PropTypes.instanceOf(User).isRequired
};

const mapStateToProps = state => {
    return {
		user: state.user
    };
};

// EXPORT
export default connect( mapStateToProps, null )(Header);