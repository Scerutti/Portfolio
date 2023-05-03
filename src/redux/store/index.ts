import { createStore, applyMiddleware, compose, Store } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/index';
import { LenguageState } from "../reducer/types"

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const store: Store<LenguageState> = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
