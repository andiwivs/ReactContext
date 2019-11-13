export const LOGIN_ACTIONS = {
  LOGIN: "login.login",
  LOGOUT: "login.logout"
};

const loginReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_ACTIONS.LOGIN: {
      return {
        ...state,
        isLoggedIn: true,
        userName: "Fred Flintstone"
      };
    }

    case LOGIN_ACTIONS.LOGOUT: {
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
