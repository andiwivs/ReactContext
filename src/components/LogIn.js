import React from "react";

import { useStateValue } from "../context/StateProvider";

import { LOGIN_ACTION_LOGIN } from "../context/actions";

const LogIn = () => {
  const [, dispatch] = useStateValue();

  const handleLogin = () => {
    dispatch({ type: LOGIN_ACTION_LOGIN });
  };

  return <button onClick={handleLogin}>Log in</button>;
};

export default LogIn;
