import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index.js';

const middleware = applyMiddleware(thunk, createLogger());

export default createStore(rootReducer, middleware);
