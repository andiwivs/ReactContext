import React from "react";

const PeopleAdmin = ({ people }) => {
  return (
    <div>
      {people.map(p => (
        <div>{p.name}</div>
      ))}
    </div>
  );
};

export default PeopleAdmin;
