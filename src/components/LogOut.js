import React from "react";

import { useStateValue } from "../context/StateProvider";

import { LOGIN_ACTION_LOGOUT, PEOPLE_ACTION_CLEAR } from "../context/actions";

const LogOut = () => {
  const [, dispatch] = useStateValue();

  const handleLogout = () => {
    dispatch({ type: LOGIN_ACTION_LOGOUT });
    dispatch({ type: PEOPLE_ACTION_CLEAR });
  };
  return <button onClick={handleLogout}>Log out</button>;
};

export default LogOut;
