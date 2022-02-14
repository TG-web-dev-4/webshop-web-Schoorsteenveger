import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import { initialState } from "../Data/initialState"


const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools());
export default store;