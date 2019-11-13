import React from "react";

import { useStateValue } from "../context/StateProvider";

const PeopleViewer = () => {
  const [{ people }] = useStateValue();

  return (
    <div>
      {people.map(p => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
};

export default PeopleViewer;
