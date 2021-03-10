declare const ADD_JOBAPPLICATION = 'ADD_JOBAPPLICATION';
declare const DELETE_JOBAPPLICATION = 'DELETE_JOBAPPLICATION';
declare const FETCH_JOBAPPLICATIONS = 'FETCH_JOBAPPLICATIONS';
declare const ADD_JOBAPPLICATION_ASYNC = 'ADD_JOBAPPLICATION_ASYNC';

interface JobApplication {
    id:number,
    company: string;
    role: string;
    status: string;
}

interface JobApplicationProps {
  job: JobApplication;
}

interface JobApplicationState {
  jobs: JobApplication[],
  loading: boolean
}

interface AddJobApplicationAction {
  type: typeof ADD_JOBAPPLICATION,
  payload: JobApplication
}

interface AddJobApplicationAsyncAction {
  type: typeof ADD_JOBAPPLICATION_ASYNC
}

interface FetchJobApplicationsAction {
  type: typeof FETCH_JOBAPPLICATIONS,
  payload: JobApplication[]
}

interface DeleteJobApplicationAction {
  type: typeof DELETE_JOBAPPLICATION,
  payload: number
}

type JobApplicationActionTypes = AddJobApplicationAction | DeleteJobApplicationAction | FetchJobApplicationsAction | AddJobApplicationAsyncAction;
type AddJobApplication = (job: JobApplication) => void;