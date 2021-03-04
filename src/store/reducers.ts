
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
    
        default:
            return state;
    }
}

export default reducer;