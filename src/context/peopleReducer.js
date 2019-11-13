import { PEOPLE_ACTION_APPEND, PEOPLE_ACTION_CLEAR } from "./actions";

const peopleReducer = (state, action) => {
  switch (action.type) {
    case PEOPLE_ACTION_APPEND: {
      return [...state, ...action.payload];
    }

    case PEOPLE_ACTION_CLEAR: {
      return [];
    }

    default:
      return state;
  }
};

export default peopleReducer;
