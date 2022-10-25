import React from "react";

import MenuItem from "../menuItem/MenuItem";
import SubMenu from "../subMenu/SubMenu";

import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__items">
        <div className="navbar__logo">
          <img
            src="https://i.ibb.co/GWbsnBR/Screen-Shot-2022-05-19-at-12-02-14-PM.png"
            alt=""
            style={{ "max-height": "110px" }}
            class="py-4 px-4"
          />
        </div>

        <div className="navbar__left">
          <ul className="navbar__itemLinks">
            <MenuItem text="Resources">
              <SubMenu />
            </MenuItem>
            <MenuItem text="About" />
            <MenuItem text="Mentors" />
            <MenuItem text="Log In" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
