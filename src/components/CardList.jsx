import React from "react";

function CardList({ monsters }) {
  return (
    <div>
      {monsters.map((monster, index) => (
        <h1 key={index}>{monster.name}</h1>
      ))}
    </div>
  );
}

export default CardList;
