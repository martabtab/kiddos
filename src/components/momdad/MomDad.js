import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import Filters from "./Filters";
import Community from "../home/Community";
import Events from "../home/eventi/Events";

function MomDad({ history }) {
  const items = [
    {
      id: 1,
      type: "recenti",
      title: "I 5 migliori tech toys del 2020",
      source: "Wild Code Paper",
      photo: "/images/kids/tech1.jpg"
    },
    {
      id: 2,
      type: "toys",
      title: "Coronavirus: scuola digitale",
      source: "Agenda digitale",
      photo: "/images/kids/tech2.jpg"
    }
  ];

  const [activeId, setActiveId] = useState("recenti");
  const [itemsFiltered, setItemsFiltered] = useState([]);

  const getActiveTab = type => {
    setItemsFiltered(items.filter(item => item.type === type));
  };

  useEffect(() => {
    getActiveTab(activeId);
  }, [activeId]);

  return (
    <div>
      <h1 className="section-title inner-title">Blog</h1>
      <Filters activeId={activeId} setActiveId={setActiveId} />
      <div className="card-container">
        {itemsFiltered.map((item, index) => (
          <BlogCard {...item} />
        ))}
      </div>
      <Community></Community>
      {/* <Events></Events> */}
    </div>
  );
}

export default MomDad;
