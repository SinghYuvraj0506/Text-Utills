import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-danger" type="submit">
              Search
            </button> */}
          <div className={`form-check form-check-inline text-${props.mode === "dark" ? "light" : "dark"}`}
          >
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              onClick={props.toggleDark}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Green
            </label>
          </div>
          <div className={`form-check form-check-inline text-${props.mode === "dark" ? "light" : "dark"}`}
          >
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
              onClick={props.toggleDark}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Red
            </label>
          </div>
          <div className={`form-check form-check-inline text-${props.mode === "dark" ? "light" : "dark"}`}
          >
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="option3"
              onClick={props.toggleDark}
            />
            <label className="form-check-label" htmlFor="inlineRadio3">
              Blue
            </label>
          </div>
          <div className={`form-check form-check-inline text-${props.mode === "dark" ? "light" : "dark"}`}
          >
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio4"
              value="option4"
              onClick={props.toggleDark}
            />
            <label className="form-check-label" htmlFor="inlineRadio3">
              Light
            </label>
          </div>
          <div className={`form-check form-check-inline text-${props.mode === "dark" ? "light" : "dark"}`}
          >
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio5"
              value="option5"
              onClick={props.toggleDark}
              />
            <label className="form-check-label" htmlFor="inlineRadio3">
              Dark
            </label>
          </div>
          {/* <div
            className={`form-check form-switch text-${props.mode === "dark" ? "light" : "dark"}`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleDark}
            />
            <label
              className="form-check-label"
              htmlhtmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title Here",
  aboutText: "About",
};
