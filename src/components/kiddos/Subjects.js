import React from "react";

const Subjects = ({ activeId, setActiveId }) => {
  const handleChangeTab = e => {
    const buttonId = e.target.id;
    setActiveId(buttonId);
  };

  const subjectImages = [
    { image: "/images/planets/mercurio@2x.png", name: "Stampa 3D" },
    {
      image: "/images/planets/venere@2x.png",
      name: "Elettronica Programmabile"
    },
    { image: "/images/planets/terra@2x.png", name: "Robotica" },
    { image: "/images/planets/marte@2x.png", name: "Voice Technology" },
    { image: "/images/planets/giove@2x.png", name: "Coding" },
    { image: "/images/planets/saturno@2x.png", name: "Droni" }
  ];

  return (
    <div className="Subjects" style={{ margin: "2rem 0" }}>
      <div className="missions-container subjects-container">
        <button
          id="stampa-3d"
          onClick={handleChangeTab}
          className={activeId === "stampa-3d" ? "active" : ""}
        >
          <div className="mission">
            <img
              className="planet-image"
              src={"/images/planets/mercurio@2x.png"}
              alt="planet image"
            />
            <p className="mission-name">Stampa 3D</p>
          </div>
        </button>
        <button
          id="elettronica"
          onClick={handleChangeTab}
          className={activeId === "elettronica" ? "active" : ""}
        >
          <div className="mission">
            <img
              className="planet-image"
              src={"/images/planets/venere@2x.png"}
              alt="planet image"
            />
            <p className="mission-name">Elettronica Programmabile</p>
          </div>
        </button>
        <button
          id="robotica"
          onClick={handleChangeTab}
          className={activeId === "robotica" ? "active" : ""}
        >
          <div className="mission">
            <img
              className="planet-image"
              src={"/images/planets/terra@2x.png"}
              alt="planet image"
            />
            <p className="mission-name">Robotica</p>
          </div>
        </button>
        <button
          id="voice"
          onClick={handleChangeTab}
          className={activeId === "voice" ? "active" : ""}
        >
          <div className="mission">
            <img
              className="planet-image"
              src={"/images/planets/marte@2x.png"}
              alt="planet image"
            />
            <p className="mission-name">Voice Technology</p>
          </div>
        </button>

        <button
          id="coding"
          onClick={handleChangeTab}
          className={activeId === "coding" ? "active" : ""}
        >
          <div className="mission">
            <img
              className="planet-image"
              src={"/images/planets/giove@2x.png"}
              alt="planet image"
            />
            <p className="mission-name">Coding</p>
          </div>
        </button>

        <button
          id="droni"
          onClick={handleChangeTab}
          className={activeId === "droni" ? "active" : ""}
        >
          <div className="mission">
            <img
              className="planet-image"
              src={"/images/planets/saturno@2x.png"}
              alt="planet image"
            />
            <p className="mission-name">Droni</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Subjects;
