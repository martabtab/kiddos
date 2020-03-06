import React from "react";

function Community() {
  return (
    <div className="section-container community-container">
      <div className="community-box center section-container">
        <div className="community-wrapper">
          <img
            className="community-illustration"
            src="/images/astronaut.png"
            alt="astronaut illustration"
          ></img>
          <p className="community-text">Diventa un kiddo!</p>
        </div>
        <button className="community-cta button">Entra nella community!</button>
      </div>
    </div>
  );
}

export default Community;
