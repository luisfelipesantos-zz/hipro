const initialState: JobApplicationState = {
  jobs: [],
  loading: false,
  userLoading: true,
  userLogged: false,
};

const reducer = (
  state: JobApplicationState = initialState,
  action: JobApplicationActionTypes
) => {
  switch (action.type) {
    case "ADD_JOBAPPLICATION":
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };

    case "JOBAPPLICATION_FETCH":
      return {
        ...state,
        loading: true,
      };

    case "JOBAPPLICATION_FETCH_SUCCESS":
      return {
        ...state,
        jobs: action.payload,
        loading: false,
      };

    case "DELETE_JOBAPPLICATION":
      return {
        ...state,
        jobs: state.jobs.filter((job) => job.id !== action.payload),
      };

    case "USER_FETCH_SUCCESS":
      return {
        ...state,
        userLoading: false,
        userLogged: true,
      };

    case "USER_FETCH_ERROR":
      return {
        ...state,
        userLoading: false,
      };

    case "USER_FETCH":
      return {
        ...state,
        userLoading: true,
      };

    default:
      return state;
  }
};

export default reducer;
