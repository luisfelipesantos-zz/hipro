import { all, put, takeLatest, fork, select } from "redux-saga/effects";
import { fetchJobsSuccess } from "./actions";
import * as selectors from "./selectors";
import axios, { AxiosResponse } from "axios";
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
  const res: AxiosResponse = yield axios.get(
    `${process.env.REACT_APP__AXIOS_BASEURL}/jobs`
  );

  const jobs = res.data;
  localStorage.setItem("jobs", jobs);

  yield put(fetchJobsSuccess(jobs));
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
  yield all([fork(watchJobLocalStorage), fork(watchFetchJobs)]);
}
