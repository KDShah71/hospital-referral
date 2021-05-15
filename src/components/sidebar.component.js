import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./assests/hospital_referral_logo.png";

const routes = [
  // { route: "/profile", name: "Profile" },
  // { route: "/icus", name: "Icu" },
  // { route: "/ventilators", name: "Ventilator" },
  // { route: "/oxygen", name: "Oxygen" },
  // { route: "/normal", name: "Normal" },
  // { route: "/hdu", name: "Hdu" },
  // { route: "/discharge", name: "Discharge" },
  // { route: "/death", name: "Death" },
  // { route: "/focal", name: "Focal" },
];

function Sidebar() {
  return (
    <div
      className="d-flex bg-light flex-column py-3 px-3 shadow"
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

        {routes.map((route, index) => (
          <li key={index} className="nav-item ">
            <NavLink
              to={route.route}
              className="nav-link link-dark"
              activeClassName="active"
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <hr />

      {/* <div className="dropdown">
        <a
          href="/#"
          className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>admin</strong>
        </a>
        <ul
          className="dropdown-menu text-decoration-none  text-small shadow"
          aria-labelledby="dropdownUser2"
        >
          <li>
            <a className="dropdown-item" href="/#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="/#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    */}
    </div>
  );
}

export default Sidebar;
