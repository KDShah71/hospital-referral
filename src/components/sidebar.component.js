import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./assests/hospital_referral_logo.png";

function Sidebar() {
  return (
    <div
      className="d-flex bg-whitw flex-column py-3 px-3 shadow"
      style={{
        height: "100vh",
        position: "fixed",
        left: 0,
        width: "200px",
      }}
    >
      <a
        href="/"
        className="d-flex justify-content-center
         align-items-center "
      >
        <img src={logo} alt="hospital referral logo" width="110" />
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item ">
          <NavLink
            exact
            to="/"
            className="nav-link link-dark"
            activeClassName="active"
          >
            Hospitals
          </NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default Sidebar;
