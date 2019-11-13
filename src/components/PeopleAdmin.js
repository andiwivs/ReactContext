import React from "react";

const PeopleAdmin = ({ people }) => {
  return (
    <div>
      {people.map(p => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
};

export default PeopleAdmin;
