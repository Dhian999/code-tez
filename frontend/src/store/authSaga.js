import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { loginRequest, loginSuccess, loginFailure } from "./authSlice";

function* handleLogin(action) {
  try {
    const response = yield call(axios.post, "http://localhost:5000/api/login", {
      email: action.payload.email,
      password: action.payload.password,
    });
    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(loginFailure(error.response?.data?.message || "Login failed"));
  }
}

function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
}

export default authSaga;
