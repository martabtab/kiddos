import React from "react";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-text">
          <h3 className="footer-contacts">Contattaci!</h3>
          <p classname="footer-mail">mail@mail.com</p>
          <p classname="footer-tel">+39 000000</p>
          <h3 className="footer-visit">Oppure passa a trovarci</h3>
          <p classname="footer-address">Via Farini 32, Milano 01234</p>
        </div>
        <div className="footer-go-up">
          <button className="go-up-button">
            <img
              className="footer-logo"
              src="/images/logo.svg"
              alt="kiddos logo"
            ></img>
          </button>
          <div className="go-up">Torna su</div>
        </div>
      </div>
      <div className="legal-specs">
        <p className="legal-specs-text">
          Privacy Policy - Cookie Policy - Policy di sicurezza
        </p>
      </div>
    </div>
  );
}
