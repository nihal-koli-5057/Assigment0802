
import { createReducer } from '@reduxjs/toolkit';
import { loginSuccess, loginFailure, LOGOUT_USER } from '../../redux/actions/action';

const initialState = {
  user: null,
  error: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginSuccess, (state, action) => {
      state.user = action.payload;
      state.error = null;
    })
    .addCase(loginFailure, (state, action) => {
      state.user = null;
      state.error = action.payload;
    })
    .addCase(LOGOUT_USER, (state, action) => {
      state.user = null;
      state.error = null;
    });
});

export default authReducer;
