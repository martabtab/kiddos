import React from "react";

const Filters = ({ activeId, setActiveId }) => {
  const handleChangeTab = e => {
    const buttonId = e.target.id;
    setActiveId(buttonId);
  };

  return (
    <div className="Filters inner-title">
      <button
        id="recenti"
        onClick={handleChangeTab}
        className={activeId === "recenti" ? "active" : ""}
      >
        Recenti
      </button>
      <button
        id="toys"
        onClick={handleChangeTab}
        className={activeId === "toys" ? "active" : ""}
      >
        Toys
      </button>
      <button
        id="school"
        onClick={handleChangeTab}
        className={activeId === "school" ? "active" : ""}
      >
        School
      </button>
    </div>
  );
};

export default Filters;
