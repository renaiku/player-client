import { SET_USERS, ADD_USER, DELETE_USER } from '../actions/actionTypes.js';

function users(state = {}, action) {

    switch (action.type) {

        case SET_USERS:

            return {};

        case ADD_USER:
            const stateNode = state[action.payload.id] ? state[action.payload.id] : {};
            return {
                ...state,
                [action.payload.id]: { ...stateNode, ...action.payload }
            };

        case DELETE_USER:
            let newState = {...state};
            delete newState[action.payload.id];
            return newState;

        default:
            return state

    }
}

export default users;