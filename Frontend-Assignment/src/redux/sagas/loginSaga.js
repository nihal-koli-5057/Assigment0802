import { takeLatest, put, call } from 'redux-saga/effects';
import { loginSuccess, loginFailure } from '../../redux/actions/action'; 
import { loginApi } from '../APIs/loginAPI';

function* login(action) {
  try {
    const { email, password } = action.payload;
    const response = yield call(loginApi, { email, password });
    yield put(loginSuccess(response));
    console.log("response is here -----", response)
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* watchLogin() {
  yield takeLatest('LOGIN_REQUEST', login);
}

export default watchLogin;
