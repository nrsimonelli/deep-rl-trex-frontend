import { combineReducers } from 'redux';
import getRun from './runReducer';
import getModel from './modelReducer';


const rootReducer = combineReducers({ getRun, getModel });

export default rootReducer;