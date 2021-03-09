const initialState: JobApplicationState = {
    jobs: []
}

const reducer = (state: JobApplicationState = initialState, action: JobApplicationActionTypes) => {
    switch (action.type) {
        case "ADD_JOBAPPLICATION":
            return {
                ...state, 
                jobs: [...state.jobs, action.payload]
            }
            

        case "FETCH_JOBAPPLICATIONS":
            return {
                ...state, 
                jobs: [...state.jobs]
            }

        case "DELETE_JOBAPPLICATION":
            return {
                ...state, 
                jobs: state.jobs.filter(job => job.id !== action.payload)
            }
            
        default:
            return state;
    }
}



export default reducer;