import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import { initialState } from "../Data/initialState"


const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware()));

export default store;