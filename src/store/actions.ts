import { action } from 'typesafe-actions'

export const addJobApplication = (job: JobApplication) => action('ADD_JOBAPPLICATION', job);

export const deleteJobApplication = (id: number) => action('DELETE_JOBAPPLICATION', id);
