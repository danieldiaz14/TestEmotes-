import React from "react";
import RenderNavItems from "./NavItems";

const navLocations = ["Home", "About"];

const Navigation = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <RenderNavItems navTexts={navLocations} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
