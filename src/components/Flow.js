// IMPORTS
import React, { Component } from 'react';
import { connect } from "react-redux";

// CSS & OTHERS
import '../css/Flow.css';

// COMPONENT CLASS
class Flow extends Component {

	render() {
		return (
			<div className="Flow">
                FLOW
			</div>
		);
	}

}

// EXPORT
export default connect( null, null )(Flow);