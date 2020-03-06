import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AziendaCard from "./AziendaCard";

function Aziende({ history }) {
  const items = [
    {
      id: 1,
      title: "Workshop",
      specs: "stampa 3d, Robotica, Coding, Droni, Elettonica, Voice Tech...",
      photo: "/images/kids/workshop.jpg"
    },
    {
      id: 2,
      title: "Eventi privati",
      photo: "/images/kids/eventiprivati.png"
    },
    {
      id: 3,
      title: "Bootcamp",
      photo: "/images/kids/bootcamp.png"
    }
  ];

  return (
    <div>
      <h1 className="section-title inner-title">Attività ludico-educative</h1>
      <div className="card-container">
        {items.map((item, index) => (
          <AziendaCard {...item} />
        ))}
      </div>
    </div>
  );
}

export default Aziende;
