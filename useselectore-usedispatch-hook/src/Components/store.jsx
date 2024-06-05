import { createStore } from 'redux';
import crmReducer from './reducers';

const store = createStore(crmReducer);

export default store;