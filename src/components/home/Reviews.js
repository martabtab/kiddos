import React from "react";

export default function Reviews() {
  return (
    <div className="section-container">
      <h2 className="kid-name">Nicole, 9</h2>
      <div className="kid-review">
        <img className="kid-photo" src="/images/kids/nicole.png"></img>
        <p className="kid-quote center">
          "La tecnologia è il futuro ma non avremo mai il cuore di pietra!"
        </p>
      </div>
      {/*<h2 className="section-title">Marco, 11</h2>
      <div className="kid-review">
        <img className="kid-photo" />
        <p className="kid-quote center">
          "Mi sono divertito molto e ora so che la mia tecnologia preferita è la
          robotica."
        </p>
      </div>*/}
    </div>
  );
}
