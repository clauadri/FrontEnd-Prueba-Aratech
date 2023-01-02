const INITIAL_STATE = {
    candidates:[],
    loading:false,
    error:false,

}

const candidateReducer = (state = INITIAL_STATE, action)=>{
    
    switch (action.type) {
        case 'gettingCandidates':
            return{...state, loading:true, error: false};
        case 'getCandidate':
            return{...state, loading:false, candidates: action.payload, error: false}
        case 'error':
            return{...state, loading: false, candidates:[], error: action.payload}
        default:
            return state;
    }
}
export default candidateReducer;