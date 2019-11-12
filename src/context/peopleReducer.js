const peopleReducer = (state, action) => {
  switch (action.type) {
    case "append": {
      return [...state, ...action.payload];
    }

    default:
      return state;
  }
};

export default peopleReducer;
