import { createStore,applyMiddleware,compose } from "redux";
import reducers from './reducers/index.js';
import thunk from 'redux-thunk';
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnchancers(applyMiddleware(thunk)));

export default store;