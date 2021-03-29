import { action } from "typesafe-actions";

export const addJobApplication = (job: JobApplication) =>
  action("ADD_JOBAPPLICATION", job);

export const fetchJobs = () => action("JOBAPPLICATION_FETCH");

export const fetchUser = () => action("USER_FETCH");

export const fetchUserSuccess = () => {
  return action("USER_FETCH_SUCCESS");
};

export const userLogOut = () => {
  return action("USER_LOG_OUT");
};

export const fetchUserError = () => {
  return action("USER_FETCH_ERROR");
};

export const fetchJobsSuccess = (jobs: JobApplication[]) => {
  return action("JOBAPPLICATION_FETCH_SUCCESS", jobs);
};

export const fetchJobsError = () => action("JOBAPPLICATION_FETCH_ERROR");

export const deleteJobApplication = (id: number) =>
  action("DELETE_JOBAPPLICATION", id);
