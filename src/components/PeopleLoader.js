import React from "react";

const PeopleLoader = ({ onLoad }) => {
  const handleClick = () => {
    const loadedPeople = [
      { id: 1, name: "test 1" },
      { id: 2, name: "test 2" }
    ];
    onLoad(loadedPeople);
  };

  return <button onClick={handleClick}>Load people</button>;
};

export default PeopleLoader;
