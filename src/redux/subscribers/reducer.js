import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER } from './types';

/*

action을 Reducer 에서 핸들링한다.
state, action 두 개의 값을 넘겨 받고, 넘겨 받은 action의 type을 통해서 핸들링을 한다.

*/

const init = {
  count: 1,
};
const subscribersReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_SUBSCRIBER:
      return {
        ...state,
        count: state.count + 1,
      };
    case REMOVE_SUBSCRIBER:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default subscribersReducer;
