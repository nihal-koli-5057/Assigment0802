import { takeLatest, put, call } from "redux-saga/effects";
import {
  addressSuccess,
  addressFailure,
} from "../../redux/actions/action";
import { addressApi } from "../APIs/addAddressAPI";

function* addAddress(action) {
  try {
    const {
      userId,
      streetAddress,
      city,
      state,
      postalCode,
      country
    } = action.payload;
    const response = yield call(addressApi, {
      userId,
      streetAddress,
      city,
      state,
      postalCode,
      country
    });
    yield put(addressSuccess(response.data));
  } catch (error) {
    yield put(addressFailure(error.message));
  }
}

function* watchAddress() {
  yield takeLatest("ADDRESS_REQUEST", addAddress);
}

export default watchAddress;
