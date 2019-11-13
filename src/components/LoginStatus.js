import React from "react";

import { useStateValue } from "../context/StateProvider";

const LoginStatus = () => {
  const [{ login }] = useStateValue();

  return <>Hello, {login.userName}</>;
};

export default LoginStatus;
