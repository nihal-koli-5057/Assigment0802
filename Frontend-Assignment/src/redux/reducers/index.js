import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer'
import registerReducer from './registerReducer';
import addressReducer from './addressReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  register: registerReducer,
  userAddress: addressReducer,
});

export default rootReducer;
