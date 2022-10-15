import { applyMiddleware, compose, createStore } from "redux";
import reducers from './reducers/index';
import thunk from 'redux-thunk';

const initialState = {}

const store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(thunk))
)

export default store;