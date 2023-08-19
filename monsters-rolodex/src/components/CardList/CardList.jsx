import React from "react";
import Card from "../Card/Card";
import "./CardList.css";

const CardList = ({ monsters, index }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

export default CardList;
