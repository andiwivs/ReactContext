import React from "react";

import PeopleAdmin from "./components/PeopleAdmin";
import PeopleLoader from "./components/PeopleLoader";

import {
  LOGIN_ACTION_LOGIN,
  LOGIN_ACTION_LOGOUT,
  PEOPLE_ACTION_APPEND,
  PEOPLE_ACTION_CLEAR
} from "./context/actions";

import { useStateValue } from "./context/StateProvider";

function App() {
  const [{ login, people }, dispatch] = useStateValue();

  const handlePeopleLoaded = loadedPeople => {
    dispatch({ type: PEOPLE_ACTION_APPEND, payload: loadedPeople });
  };

  const handleLogin = () => {
    dispatch({ type: LOGIN_ACTION_LOGIN });
  };

  const handleLogout = () => {
    dispatch({ type: LOGIN_ACTION_LOGOUT });
    dispatch({ type: PEOPLE_ACTION_CLEAR });
  };
  return (
    <>
      {login.isLoggedIn && (
        <div>
          Hello, {login.userName}
          <button onClick={handleLogout}>Log out</button>
          <div>
            <PeopleAdmin people={people} />
            <PeopleLoader onLoad={handlePeopleLoaded} />
          </div>
        </div>
      )}
      {!login.isLoggedIn && <button onClick={handleLogin}>Log in</button>}
    </>
  );
}

export default App;
