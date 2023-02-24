import { combineReducers } from 'redux';
import subscribersReducer from './subscribers/reducer';
import viewsReducer from './views/reducer';

const rootReducer = combineReducers({
  views: viewsReducer, // views에 viewsReducer를 맵핑
  subscriber: subscribersReducer,
});

export default rootReducer;

/*

combineReducers 를 통해서 두개(subscribersReducer,viewsReducer)를 하나의 Reducers로 합쳐준다.

*/
