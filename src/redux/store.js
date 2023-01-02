import {applyMiddleware, combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import candidateReducer from './candidate.reducer';


const rootReducer = combineReducers({
    candidates: candidateReducer, 
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;