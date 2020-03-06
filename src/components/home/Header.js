import React from "react";
import "../../sass/home/home.scss";

function Header() {
  return (
    <div>
      <div className="header-container">
        <div className="claim">
          <h1 className="claim-text">Esplora il tuo potenziale!</h1>
          <button className="header-cta">Scopri cosa facciamo</button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Header;
