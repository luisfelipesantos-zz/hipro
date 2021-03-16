import { action } from "typesafe-actions";

export const addJobApplication = (job: JobApplication) =>
  action("ADD_JOBAPPLICATION", job);

export const fetchJobs = () => action("JOBAPPLICATION_FETCH");

export const fetchJobsSuccess = (jobs: JobApplication[]) => {
  return action("JOBAPPLICATION_FETCH_SUCCESS", jobs);
};

export const fetchJobsError = () => action("JOBAPPLICATION_FETCH_ERROR");


export const deleteJobApplication = (id: number) =>
  action("DELETE_JOBAPPLICATION", id);
