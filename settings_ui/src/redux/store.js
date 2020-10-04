import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

const middlewares = [thunk, logger];

// We could add an optional preloadedState argument here that would override the default state
// being set by our reducers
// But we're doing to hydrate the initial state right when the component mounts
// So using reducer state is fine here, I guess?
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

