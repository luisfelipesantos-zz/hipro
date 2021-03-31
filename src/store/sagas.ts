//@ts-ignore
import { all, put, takeLatest, fork, select, call } from "redux-saga/effects";
import { fetchJobsSuccess, fetchUserSuccess, fetchUserError } from "./actions";
import * as selectors from "./selectors";
import api from "../api";
import { Auth } from "aws-amplify";

require("dotenv").config();

interface User {
  subid: string;
  phone: string;
  name: string;
  email: string;
  gender: string;
  birthDate: string;
}

function* handleLocalStorage() {
  const jobs: JobApplicationState = yield select(selectors.jobState);

  try {
    yield localStorage.setItem("jobs", JSON.stringify(jobs));
  } catch (error: any) {
    console.log(error);
  }
}

function* handleFetchJobs() {
  const url = `${process.env.REACT_APP__AXIOS_BASEURL}/jobs`;
  const res: any = yield call(
    {
      context: api,
      fn: "get",
    },
    url
  );

  const jobs = res.data;
  localStorage.setItem("jobs", jobs);

  yield put(fetchJobsSuccess(jobs));
}

function* handleFetchUser() {
  const url = `${process.env.REACT_APP__AXIOS_BASEURL}/users/userSync`;
  try {
    const user = yield call({
      context: Auth,
      fn: "currentUserInfo",
    });

    const {
      sub,
      phone_number,
      name,
      email,
      gender,
      birthdate,
    } = user.attributes;

    const userSync: User = {
      subid: sub,
      phone: phone_number,
      name: name,
      email: email,
      gender: gender,
      birthDate: birthdate,
    };

    yield api.get(url, userSync);

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
