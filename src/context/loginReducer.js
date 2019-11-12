const loginReducer = (state, action) => {
  switch (action.type) {
    case "login": {
      return {
        ...state,
        isLoggedIn: true,
        userName: "Fred Flintstone"
      };
    }

    case "logout": {
      return {
        ...state,
        isLoggedIn: false,
        userName: "anon"
      };
    }

    default:
      return state;
  }
};

export default loginReducer;
