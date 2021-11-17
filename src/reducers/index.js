import { combineReducers } from "redux";
import { userReducer as user } from './userReducer';
import { eventReducer as event } from './eventReducer';

export default combineReducers({ 
   user, 
   event 
});