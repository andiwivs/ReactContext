import React, { useState } from "react";

import PeopleAdmin from "./components/PeopleAdmin";
import PeopleLoader from "./components/PeopleLoader";

function App() {
  const [people, setPeople] = useState([]);
  const [userName, setUserName] = useState("anon");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handlePeopleLoaded = loadedPeople => {
    const newPeople = [...people, ...loadedPeople];
    setPeople(newPeople);
  };

  const handleLogin = () => {
    setUserName("Fred Flintstone");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUserName("anon");
    setIsLoggedIn(false);
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
