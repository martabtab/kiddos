import React from "react";

const Card = ({ title, photo, time, location, topic }) => (
  <div>
    <div className="card-container">
      <div className="card">
        <div className="card-image">
          <div className="card-overlay"></div>
          <img
            className="card-photo"
            src={photo}
            alt="item photo"
            style={{ width: "100%" }}
          />
        </div>
        <div className="card-text">
          <p className="card-title">{title}</p>
          <p className="card-topic">{topic}</p>
          <p className="card-time">{time}</p>
          <p className="card-location">
            <img className="location-icon" src="/images/pin.png"></img>
            {location}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
