import React from "react";

function Partner() {
  const partnerLogo = [
    "/images/partner/meccano.png",
    "/images/partner/tag.png",
    "/images/partner/shetech.png"
  ];
  return (
    <div className="section-container">
      <h1 className="section-title">Partner</h1>
      <div className="partner-container">
        {partnerLogo.map((item, index) => (
          <div className="partner">
            <img className="partner-logo" src={item} alt="partner logo" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partner;
