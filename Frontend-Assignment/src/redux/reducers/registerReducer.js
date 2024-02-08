import { createReducer } from "@reduxjs/toolkit";
import {
  registerSuccess,
  registerFailure,
} from "../../redux/actions/action";

const initialState = {
  registerUser: {
    firstName: null,
    lastName: null,
    email: null,
    phoneNumber: null,
    dateOfBirth: null,
    gender: null,
    password: null,
  },
  error: null,
};

const registerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(registerSuccess, (state, action) => {
      state.registerUser = action.payload;
      state.error = null;
    })
    .addCase(registerFailure, (state, action) => {
      state.registerUser = null;
      state.error = action.payload;
    });
});

export default registerReducer;
