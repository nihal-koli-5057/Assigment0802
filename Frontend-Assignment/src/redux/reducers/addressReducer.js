import { createReducer } from "@reduxjs/toolkit";
import { REMOVE_ADDRESS, addressFailure, addressSuccess } from "../actions/action";

const initialState = {
  userAddress: {
    userId : "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  },
  error: null,
};

const addressReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addressSuccess, (state, action) => {
      state.userAddress = action.payload;
      state.error = null;
    })
    .addCase(addressFailure, (state, action) => {
      state.userAddress = null;
      state.error = action.payload;
    })
    .addCase(REMOVE_ADDRESS, (state, action) => {
      const addressIndex = state.userAddress.findIndex(address => address.id === action.payload);
      if (addressIndex !== -1) {
        state.userAddress.splice(addressIndex, 1);
      }
    });
});

export default addressReducer;
