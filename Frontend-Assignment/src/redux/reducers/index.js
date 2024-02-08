import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer'
import registerReducer from './registerReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  register: registerReducer,
});

export default rootReducer;
