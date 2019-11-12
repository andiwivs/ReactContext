const peopleReducer = (state, action) => {
  switch (action.type) {
    case "append": {
      return [...state, ...action.payload];
    }

    case "clear": {
      return [];
    }

    default:
      return state;
  }
};

export default peopleReducer;
