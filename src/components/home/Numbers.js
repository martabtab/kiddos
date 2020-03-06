import React from "react";

function Numbers() {
  return (
    <div className="section-container">
      <h1 className="section-title">Numbers</h1>
      <div className="graphic-container">
        <div className="graphic">
          <div className="graphic-visual">
            <img className="graphic-image" src="/images/numbers/1.png"></img>
            <p className="graphic-number">85%</p>
          </div>
          <div className="graphic-text">
            <p className="graphic-description">
              La percentuale dei lavori che esisteranno nel 2030 non ancora
              esistenti al giorno d'oggi
            </p>
            <p className="graphic-source">- Institute for the future -</p>
          </div>
        </div>
        <div className="graphic">
          <div className="graphic-visual">
            <img className="graphic-image" src="/images/numbers/2.png"></img>
            <p className="graphic-number">25%</p>
          </div>
          <div className="graphic-text">
            <p className="graphic-description">
              La percentuale dei lavori che esisteranno nel 2030 non ancora
              esistenti al giorno d'oggi
            </p>
            <p className="graphic-source">- OCSE -</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
