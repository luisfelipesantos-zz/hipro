import { action } from "typesafe-actions";

export const addJobApplication = (job: JobApplication) =>
  action("ADD_JOBAPPLICATION", job);

export const addJobApplicationAsync = (
  job: JobApplication,
  callback?: () => void
) => action("ADD_JOBAPPLICATION_ASYNC", { job, callback });

export const deleteJobApplication = (id: number) =>
  action("DELETE_JOBAPPLICATION", id);
