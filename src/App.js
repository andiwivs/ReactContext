import React, { useState, useReducer } from "react";

import loginReducer from "./context/loginReducer";
import peopleReducer from "./context/peopleReducer";

import PeopleAdmin from "./components/PeopleAdmin";
import PeopleLoader from "./components/PeopleLoader";

function App() {
  // const [people, setPeople] = useState([]);
  // const [userName, setUserName] = useState("anon");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [loginState, dispatchLogin] = useReducer(loginReducer, {
    userName: "anon",
    isLoggedIn: false
  });
  const { userName, isLoggedIn } = loginState;

  const [people, dispatchPeople] = useReducer(peopleReducer, []);

  const handlePeopleLoaded = loadedPeople => {
    // const newPeople = [...people, ...loadedPeople];
    // setPeople(newPeople);
    dispatchPeople({ type: "append", payload: loadedPeople });
  };

  const handleLogin = () => {
    dispatchLogin({ type: "login" });
    // setUserName("Fred Flintstone");
    // setIsLoggedIn(true);
  };

  const handleLogout = () => {
    dispatchLogin({ type: "logout" });
    // setUserName("anon");
    // setIsLoggedIn(false);
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
