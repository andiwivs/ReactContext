export const PEOPLE_ACTIONS = {
  APPEND: "people.append",
  CLEAR: "people.clear"
};

const peopleReducer = (state, action) => {
  switch (action.type) {
    case PEOPLE_ACTIONS.APPEND: {
      return [...state, ...action.payload];
    }

    case PEOPLE_ACTIONS.CLEAR: {
      return [];
    }

    default:
      return state;
  }
};

export default peopleReducer;
