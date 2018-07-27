import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//reducers for all pages
import counter from './counter';
import workOrdersReducer from '../containers/workOrders/ReducerWorkOrders';

// "root reducer"
export default combineReducers({
  router: routerReducer,
  counter,
  workOrders: workOrdersReducer,
});
