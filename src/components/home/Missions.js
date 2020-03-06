import React from "react";

function Missions() {
  const missionImages = [
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
    <div className="section-container">
      <h1 className="section-title">Missioni</h1>
      <div className="missions-container">
        {missionImages.map((item, index) => (
          <div className="mission">
            <img className="planet-image" src={item.image} alt="planet image" />
            <p className="mission-name">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Missions;
