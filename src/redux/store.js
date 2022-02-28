import { applyMiddleware, createStore } from 'redux';
import { reduxThunk } from 'redux-thunk'
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from './rootReducer';
import { initialState } from "../Data/initialState"


const store = createStore(
    rootReducer,
    initialState,
    devToolsEnhancer()
);

export default store;