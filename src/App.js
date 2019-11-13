import React from "react";

import PeopleAdmin from "./components/PeopleAdmin";
import PeopleLoader from "./components/PeopleLoader";

import { LOGIN_ACTIONS } from "./context/loginReducer";
import { PEOPLE_ACTIONS } from "./context/peopleReducer";

import { useStateValue } from "./context/StateProvider";

function App() {
  const [{ login, people }, dispatch] = useStateValue();

  const handlePeopleLoaded = loadedPeople => {
    dispatch({ type: PEOPLE_ACTIONS.APPEND, payload: loadedPeople });
  };

  const handleLogin = () => {
    dispatch({ type: LOGIN_ACTIONS.LOGIN });
  };

  const handleLogout = () => {
    dispatch({ type: LOGIN_ACTIONS.LOGOUT });
    dispatch({ type: PEOPLE_ACTIONS.CLEAR });
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
