import { all, put, takeLatest, fork } from "redux-saga/effects";
import { addJobApplication } from "./actions";

const fakeAsync = (ms: number) => new Promise((res) => setTimeout(res, ms));

function* handleAddJob(action: any) {
  yield fakeAsync(2000);
  yield put(addJobApplication(action.payload.job));

  if (typeof action.payload.callback === "function")
    yield action.payload.callback();
}

function* watchAddJob() {
  yield takeLatest("ADD_JOBAPPLICATION_ASYNC", handleAddJob);
}

export function* rootSaga() {
  yield all([fork(watchAddJob)]);
}
