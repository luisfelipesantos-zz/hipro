//@ts-ignore
import {
  all,
  put,
  takeLatest,
  fork,
  select,
  call,
  CallEffect,
} from "redux-saga/effects";
import { fetchJobsSuccess, fetchUserSuccess, fetchUserError } from "./actions";
import * as selectors from "./selectors";
import { AxiosResponse } from "axios";
import api from "../api";
import { Auth } from "aws-amplify";

require("dotenv").config();

function* handleLocalStorage() {
  const jobs: JobApplicationState = yield select(selectors.jobState);

  try {
    yield localStorage.setItem("jobs", JSON.stringify(jobs));
  } catch (error: any) {
    console.log(error);
  }
}

function* handleFetchJobs() {
  const res: AxiosResponse = yield api.get(
    `${process.env.REACT_APP__AXIOS_BASEURL}/jobs`
  );

  const jobs = res.data;
  localStorage.setItem("jobs", jobs);

  yield put(fetchJobsSuccess(jobs));
}

function* handleFetchUser() {
  try {
    yield call({
      context: Auth,
      fn: "currentSession",
    });

    yield put(fetchUserSuccess());
  } catch (error) {
    yield put(fetchUserError());
    console.log("Not logged in");
  }
}

function* watchFetchUser() {
  yield takeLatest("USER_FETCH", handleFetchUser);
}

function* watchFetchJobs() {
  yield takeLatest("JOBAPPLICATION_FETCH", handleFetchJobs);
}

function* watchJobLocalStorage() {
  yield takeLatest(
    ["ADD_JOBAPPLICATION", "DELETE_JOBAPPLICATION"],
    handleLocalStorage
  );
}

export function* rootSaga() {
  yield all([
    fork(watchJobLocalStorage),
    fork(watchFetchJobs),
    fork(watchFetchUser),
  ]);
}
