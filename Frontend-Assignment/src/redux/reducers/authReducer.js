
import { createReducer } from '@reduxjs/toolkit';
import { loginSuccess, loginFailure } from '../../redux/actions/action';

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
    });
});

export default authReducer;
