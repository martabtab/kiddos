import React from "react";
import { NavLink } from "react-router-dom";

export default () => (
  <div className="navbar-container">
    {/* <div className="logo-container">
      <span>
        <NavLink exact to="/" activeClassName="active">
          <img
            className="kiddos-logo"
            src="/images/logo.svg"
            alt="logo-kiddos"
          />
        </NavLink>
      </span>
    </div> */}
    <ul className="navbar-list">
      <li>
        <NavLink exact to="/" activeClassName="active">
          <img
            className="kiddos-logo"
            src="/images/logo.svg"
            alt="logo-kiddos"
          />
        </NavLink>
      </li>
      <li>
        <NavLink className="navbar-item" to="/kiddos" activeClassName="active">
          Kiddos
        </NavLink>
      </li>
      <li>
        <NavLink className="navbar-item" to="/momdad" activeClassName="active">
          Mom&Dad
        </NavLink>
      </li>
      <li>
        <NavLink className="navbar-item" to="/aziende" activeClassName="active">
          Aziende
        </NavLink>
      </li>
    </ul>
  </div>
);
