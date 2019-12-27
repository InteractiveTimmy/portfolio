// dependencies
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// reducers
import rootReducer from './reducers';

// initialize redux state
const initialState = {};

// create middleware array
const middleware = [
  thunk,
];

// generate store
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
  ),
);

// export
export default store;
