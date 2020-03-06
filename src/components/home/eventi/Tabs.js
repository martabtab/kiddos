import React from "react";

const Tabs = ({ activeId, setActiveId }) => {
  const handleChangeTab = e => {
    const buttonId = e.target.id;
    setActiveId(buttonId);
  };

  return (
    <div className="Tabs">
      <button
        id="workshop"
        onClick={handleChangeTab}
        className={activeId === "workshop" ? "active" : ""}
      >
        Workshop
      </button>
      <button
        id="event"
        onClick={handleChangeTab}
        className={activeId === "event" ? "active" : ""}
      >
        Events
      </button>
      <button
        id="bootcamp"
        onClick={handleChangeTab}
        className={activeId === "bootcamp" ? "active" : ""}
      >
        Bootcamp
      </button>
    </div>
  );
};

export default Tabs;
