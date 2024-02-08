import { takeLatest, put, call } from "redux-saga/effects";
import {
  registerSuccess,
  registerFailure,
} from "../../redux/actions/action";
import { registerApi } from "../APIs/registerAPI";

function* register(action) {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      dateOfBirth,
      gender,
      password,
    } = action.payload;
    const response = yield call(registerApi, {
      firstName,
      lastName,
      email,
      phoneNumber,
      dateOfBirth,
      gender,
      password,
    });
    yield put(registerSuccess(response.data));
  } catch (error) {
    yield put(registerFailure(error.message));
  }
}

function* watchRegister() {
  yield takeLatest("REGISTER_REQUEST", register);
}

export default watchRegister;
