import { ADD_VIEW } from './types';

const init = {
  count: 0,
};
const viewsReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_VIEW:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default viewsReducer;
