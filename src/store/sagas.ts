import { all, put, takeLatest, fork, select } from "redux-saga/effects";
import { addJobApplication, fetchJobsSuccess } from "./actions";
import * as selectors from "./selectors";

function* handleLocalStorage() {
  const jobs: JobApplicationState = yield select(selectors.jobState);

  try {
    yield localStorage.setItem("jobs", JSON.stringify(jobs));
  } catch (error: any) {
    console.log(error);
  }
}

function* handleFetchJobs() {
  yield new Promise((res) => setTimeout(res, 1000));
  const jobs = localStorage.getItem("jobs");

  if (jobs !== null) {
    yield put(fetchJobsSuccess(JSON.parse(jobs)));
  } else {
    yield put(fetchJobsSuccess([]));
  }
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
