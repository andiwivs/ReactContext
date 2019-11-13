import React from "react";

import { useStateValue } from "../context/StateProvider";

import { PEOPLE_ACTION_APPEND } from "../context/actions";

const PeopleLoader = () => {
  const [, dispatch] = useStateValue();

  const handleClick = () => {
    const seed = new Date().getTime();
    const loadedPeople = [
      { id: seed + 1, name: `test ${seed + 1}` },
      { id: seed + 2, name: `test ${seed + 2}` },
      { id: seed + 3, name: `test ${seed + 3}` }
    ];

    dispatch({ type: PEOPLE_ACTION_APPEND, payload: loadedPeople });
  };

  return <button onClick={handleClick}>Load people</button>;
};

export default PeopleLoader;
