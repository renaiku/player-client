import { SET_LOGGED_IN_USER, UNSET_LOGGED_IN_USER } from '../actions/actionTypes.js';

function user(state = {}, action) {

    switch (action.type) {

        case SET_LOGGED_IN_USER:
            return {...action.payload};

        case UNSET_LOGGED_IN_USER:
            return {};

        default:
            return state

    }
}

export default user;