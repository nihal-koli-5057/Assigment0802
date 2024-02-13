
import { createAction } from '@reduxjs/toolkit';

export const loginRequest = createAction('LOGIN_REQUEST');
export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginFailure = createAction('LOGIN_FAILURE');

export const registerRequest = createAction('REGISTER_REQUEST');
export const registerSuccess = createAction('REGISTER_SUCCESS');
export const registerFailure = createAction('REGISTER_FAILURE');

export const addressRequest = createAction('ADDRESS_REQUEST');
export const addressSuccess = createAction('ADDRESS_SUCCESS');
export const addressFailure = createAction('ADDRESS_FAILURE');

export const singleUserRequest = createAction('SINGLEUSER_REQUEST');
export const singleUserSuccess = createAction('SINGLEUSER_SUCCESS');
export const singleUserFailure = createAction('SINGLEUSER_FAILURE');

export const REMOVE_ADDRESS = createAction('REMOVE_ADDRESS')
export const LOGOUT_USER = createAction('LOGOUT_USER')
