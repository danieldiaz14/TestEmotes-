import React from "react";
import RenderNavItems from "./NavItems";

const navLocations = ["Home", "About"];

const Navigation = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Emote Tester
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <RenderNavItems navTexts={navLocations} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
