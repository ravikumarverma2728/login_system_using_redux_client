import {combineReducers} from 'redux';
import {userLoginReducer} from './usersLoginReducer';
const reducers = combineReducers({
    allUsers : userLoginReducer,
});

export default reducers;