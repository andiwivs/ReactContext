import { LOGIN_ACTION_LOGIN, LOGIN_ACTION_LOGOUT } from "./actions";

const loginReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_ACTION_LOGIN: {
      return {
        ...state,
        isLoggedIn: true,
        userName: "Fred Flintstone"
      };
    }

    case LOGIN_ACTION_LOGOUT: {
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
