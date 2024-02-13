import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga'; 
import registerSaga from './userRegisterSaga'; 
import addressSaga from './addressSaga'; 

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registerSaga(),
    addressSaga(),
  ]);
}
