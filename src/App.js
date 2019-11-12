import React, { useReducer } from "react";

import loginReducer from "./context/loginReducer";
import peopleReducer from "./context/peopleReducer";

import PeopleAdmin from "./components/PeopleAdmin";
import PeopleLoader from "./components/PeopleLoader";

function App() {
  const [loginState, dispatchLogin] = useReducer(loginReducer, {
    userName: "anon",
    isLoggedIn: false
  });
  const { userName, isLoggedIn } = loginState;

  const [people, dispatchPeople] = useReducer(peopleReducer, []);

  const handlePeopleLoaded = loadedPeople => {
    dispatchPeople({ type: "append", payload: loadedPeople });
  };

  const handleLogin = () => {
    dispatchLogin({ type: "login" });
  };

  const handleLogout = () => {
    dispatchLogin({ type: "logout" });
    dispatchPeople({ type: "clear" });
  };

  return (
    <>
      {isLoggedIn && (
        <div>
          Hello, {userName}
          <button onClick={handleLogout}>Log out</button>
          <div>
            <PeopleAdmin people={people} />
            <PeopleLoader onLoad={handlePeopleLoaded} />
          </div>
        </div>
      )}
      {!isLoggedIn && <button onClick={handleLogin}>Log in</button>}
    </>
  );
}

export default App;
