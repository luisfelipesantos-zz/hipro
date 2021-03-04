declare const ADD_JOBAPPLICATION = 'ADD_JOBAPPLICATION';
declare const DELETE_JOBAPPLICATION = 'DELETE_JOBAPPLICATION';

interface JobApplication {
    company: string;
    role: string;
    status: string;
}

interface JobApplicationProps {
  job: JobApplication;
}

interface JobApplicationState {
  jobs: JobApplication[]
}

interface AddJobApplicationAction {
  type: typeof ADD_JOBAPPLICATION,
  payload: JobApplication
}

interface DeleteJobApplicationAction {
  type: typeof DELETE_JOBAPPLICATION,
  payload: JobApplication
}

type JobApplicationActionTypes = AddJobApplicationAction | DeleteJobApplicationAction;
type AddJobApplication = (job: JobApplication) => void;