import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Tabs from "./Tabs";

function Events({ history }) {
  const items = [
    {
      id: 1,
      type: "bootcamp",
      title: "Building a drone",
      time: "26 febbraio - 1 marzo",
      location: "Wild Code School, Milano",
      topic: "drone",
      photo: "/images/kids/kiddos.jpg"
    },
    {
      id: 2,
      type: "event",
      title: "Event fugiat",
      time: "26 febbraio - 1 marzo",
      location: "Wild Code School, Milano",
      topic: "drone",
      photo: "/images/Pescara-1.jpg"
    },
    {
      id: 3,
      type: "workshop",
      title: "Workshop lorem",
      time: "26 febbraio - 1 marzo",
      location: "Wild Code School, Milano",
      topic: "drone",
      photo: "/images/Roseto degli Abruzzi-1.jpg"
    },
    {
      id: 3,
      type: "workshop",
      title: "Workshop lorem",
      time: "26 febbraio - 1 marzo",
      location: "Wild Code School, Milano",
      topic: "drone",
      photo: "/images/Roseto degli Abruzzi-1.jpg"
    }
  ];

  const [activeId, setActiveId] = useState("workshop");
  const [itemsFiltered, setItemsFiltered] = useState([]);

  const getActiveTab = type => {
    setItemsFiltered(items.filter(item => item.type === type));
  };

  useEffect(() => {
    getActiveTab(activeId);
  }, [activeId]);

  return (
    <div className="section-container">
      <h1 className="section-title">Eventi</h1>
      <Tabs activeId={activeId} setActiveId={setActiveId} />
      <div className="card-container">
        {itemsFiltered.map((item, index) => (
          <Card {...item} />
        ))}
      </div>
      <div className="center">
        <button
          className="more-events button"
          type="button"
          onClick={() => {
            history.push("/eventi");
          }}
        >
          Vedi altri eventi
        </button>
      </div>
    </div>
  );
}

export default Events;
