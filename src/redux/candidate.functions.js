import { API } from "../shared/services/api";
export const getCandidates = ()=>async(dispatch)=>{
    dispatch({type:'gettingCandidates'})

    try {

        const result =await API.get("/candidates")
        console.log(result);
        dispatch({type: 'getCandidate', payload: result.data})

    } catch (error) {
        dispatch({type:'error', payload:error.message})
    }

}