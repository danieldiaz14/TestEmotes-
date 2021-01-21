import React from "react";

const renderNavItems = ({ navTexts }) => {
  const navItems = navTexts.map((navItem) => {
    return (
      <li key={navItem} className="nav-item">
        <a className="nav-link" aria-current="page" href="#">
          {navItem}
        </a>
      </li>
    );
  });

  return <ul className="navbar-nav me-auto mb-2 mb-lg-0">{navItems}</ul>;
};

export default renderNavItems;
