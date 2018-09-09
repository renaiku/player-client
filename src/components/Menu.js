// IMPORTS
import React, { Component } from 'react';
import { connect } from "react-redux";

// CSS & OTHERS
import '../css/Menu.css';

// COMPONENT CLASS
class Menu extends Component {

	render() {
		return (
			<div className="Menu">
                Menu
			</div>
		);
	}

}

// EXPORT
export default connect( null, null )(Menu);