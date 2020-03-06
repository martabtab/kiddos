import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import KiddosCard from "./KiddosCard";
import Subjects from "./Subjects";

function Eduntainment({ history }) {
  const items = [
    {
      id: 1,
      type: "coding",
      title: "Un accoppiata vincente",
      time: "45 min",
      hardness: "medium",
      eta: "7-11 anni",
      photo: "/images/kids/astro.png"
    },
    {
      id: 2,
      type: "robotica",
      title: "Robotica",
      time: "3 ore",
      hardness: "medium",
      eta: "7-11 anni",
      photo: "/images/kids/astro.png"
    },
    {
      id: 3,
      type: "stampa-3d",
      title: "Stampa 3d",
      time: "50 min",
      hardness: "medium",
      eta: "7-11 anni",
      photo: "/images/kids/astro.png"
    },
    {
      id: 3,
      type: "elettronica",
      title: "Elettronica",
      time: "20 min",
      hardness: "medium",
      eta: "7-11 anni",
      photo: "/images/Roseto degli Abruzzi-1.jpg"
    }
  ];

  const [activeId, setActiveId] = useState("coding");
  const [itemsFiltered, setItemsFiltered] = useState([]);

  const getActiveTab = type => {
    setItemsFiltered(items.filter(item => item.type === type));
  };

  useEffect(() => {
    getActiveTab(activeId);
  }, [activeId]);

  return (
    <div>
      {/* <h1 className="section-title"></h1> */}
      <Subjects activeId={activeId} setActiveId={setActiveId} />
      <div className="card-container">
        {itemsFiltered.map((item, index) => (
          <KiddosCard {...item} />
        ))}
      </div>
    </div>
  );
}

export default Eduntainment;
