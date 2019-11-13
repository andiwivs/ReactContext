import React from "react";

import LogIn from "./components/LogIn";
import LogOut from "./components/LogOut";
import LoginStatus from "./components/LoginStatus";
import PeopleViewer from "./components/PeopleViewer";
import PeopleLoader from "./components/PeopleLoader";

import { useStateValue } from "./context/StateProvider";

function App() {
  const [{ login }] = useStateValue();

  return (
    <>
      {login.isLoggedIn && (
        <div>
          <LoginStatus />
          <LogOut />
          <div>
            <PeopleViewer />
            <PeopleLoader />
          </div>
        </div>
      )}
      {!login.isLoggedIn && <LogIn />}
    </>
  );
}

export default App;
