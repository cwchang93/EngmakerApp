import { combineReducers } from 'redux';

import countReducer, { initialState as countReducerInitialState } from './countReducer';
import testReducer, { initialState as testReducerInitialState } from './testReducer';
import userReducer, { initialState as userReducerInitialState } from './userReducer';
import loginReducer, { initialState as loginReducerInitialState } from './loginReducer';
import calendarReducer, { initialState as calendarReducerInitialState } from './calendarReducer';

export const initialState = {
    countState: countReducerInitialState,
    testState: testReducerInitialState,
    userState: userReducerInitialState,
    loginState: loginReducerInitialState,
    calendarState: calendarReducerInitialState,
};

export default combineReducers({
    countState: countReducer,
    testState: testReducer,
    userState: userReducer,
    loginState: loginReducer,
    calendarState: calendarReducer,
});
