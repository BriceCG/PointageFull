import { combineReducers } from 'redux';
import { userReducer } from './user/userReducer';
import { userLoginReducer } from './userLogin/userLoginReducer';
import { userPresenceReducer } from './userPresence/userPresenceReducer';
import { uniqUserReducer } from './uniqUser/uniqUserReducer'
import {  userUpdateReducer } from './userUpdate/userUpdateReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  userLogin: userLoginReducer,
  userPresence: userPresenceReducer,
  uniqUser: uniqUserReducer,
  userUpdate: userUpdateReducer
})
