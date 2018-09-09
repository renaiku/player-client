// IMPORTS
import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import User from '../models/User';
import Header from './Header';
import Menu from './Menu';
import Flow from './Flow';

// CSS & OTHERS
import '../css/Library.css';

// COMPONENT CLASS
class Library extends Component {

	render() {
		return (
			<React.Fragment>
                <Header />
                <div className="MenuAndFlowContainer">                 
                    <Menu />
                    <Flow />
                </div>
            </React.Fragment>
		);
	}

}

// PROPTYPES
Library.propTypes = {
    user: PropTypes.instanceOf(User).isRequired
};

// EXPORT
export default connect( null, null )(Library);