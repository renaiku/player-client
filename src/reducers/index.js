import { combineReducers } from 'redux';
import users from './users';
import user from './user';
import { createStore } from "redux";
import { Constants } from '../utils/Constants';
import User from '../models/User';

const reducers = combineReducers({
    user,
    users,
});

const usersDataMock = [
    { id: 0, name: "renaiku" },
    { id: 1, name: "patou" },
    { id: 2, name: "juju" },
    { id: 3, name: "laurie" },
    { id: 4, name: "élo" },
    { id: 5, name: "vivi" },
    { id: 6, name: "laurine" },
    { id: 7, name: "maman" },
    { id: 8, name: "valou" },
    { id: 9, name: "robert pattison premier du nom" },
    { id: 10, name: "calzone" },
    { id: 11, name: "fred" },
    { id: 12, name: "père-noël" },
    { id: 13, name: "fred2" },
    { id: 14, name: "iron-man" },
];

const usersMock = usersDataMock.map(user => new User(user));
const userMock = new User({ id: Constants.UNDEFINED, name: Constants.UNDEFINED })

const defaultData = {
    users: usersMock,
    user: userMock
};

const store = createStore(
    reducers,
    defaultData,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;