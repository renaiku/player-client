// IMPORTS
import React, { Component } from 'react';
import { connect } from "react-redux";
import SelectableProfile from './SelectableProfile';
import PropTypes from 'prop-types';

// CSS & OTHERS
import '../css/SelectableProfile.css';

class ProfilesContainer extends Component {

	render() {

        const listItems = this.props.users.map((user) => {

            return (
                <SelectableProfile key={user.id} user={user} />
            );            

        });

		return (
			<div className="ProfilesContainer">
                {listItems}
            </div>
		);
	}

}

// PROPTYPES
ProfilesContainer.propTypes = {
    users: PropTypes.array.isRequired
};

// REDUX STORE MAPPING
const mapStateToProps = state => {
    return { 
        users: state.users
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         addArticle: article => dispatch(addArticle(article))
//     };
// };

export default connect( mapStateToProps, null )(ProfilesContainer);
