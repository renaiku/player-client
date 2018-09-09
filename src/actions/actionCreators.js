import { SET_USERS, SET_LOGGED_IN_USER, UNSET_LOGGED_IN_USER } from './actionTypes';

/**
 * @export
 * @param {Users} users
 * @returns {SetUsersAction}
 */
export function actionSetUsers(users) {
    return {
        type: SET_USERS,
        payload: users
    }
}

// TODO ADD_USER

// TODO DELETE_USER

/**
 * @export
 * @param {User} user
 * @returns {SetLoggedInUserAction}
 */
export function actionSetLoggedInUser(user) {
    return {
        type: SET_LOGGED_IN_USER,
        payload: user
    }
}

/**
 * @export
 * @param {User} user
 * @returns {UnsetLoggedInUserAction}
 */
export function actionUnsetLoggedInUser(user) {
    return {
        type: UNSET_LOGGED_IN_USER,
        payload: user
    }
}