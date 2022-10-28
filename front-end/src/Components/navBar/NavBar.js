import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import MenuItem from "../menuItem/MenuItem";
import MobileMenuItem from "../mobileMenuItem/MobileMenuItem";

import SubMenu from "../subMenu/SubMenu";

import "./NavBar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__items">
        <div className="navbar__logo">
          <img
            src="https://i.ibb.co/GWbsnBR/Screen-Shot-2022-05-19-at-12-02-14-PM.png"
            alt=""
          />
        </div>

        <div className="navbar__left">
          <div
            className="navbar__hamburger"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            {!toggleMenu && (
              <MenuIcon
                sx={{
                  width: 50,
                  height: 50,
                }}
              />
            )}
            {toggleMenu && (
              <CloseIcon
                sx={{
                  width: 50,
                  height: 50,
                }}
              />
            )}
          </div>
          <div
            className="navbar__mobileMenu"
            style={{ right: toggleMenu ? "0px" : "-181px" }}
          >
            <MobileMenuItem text="Resources">
              <div className="">
                <div className="submenuItem">High School</div>
                <div className="submenuItem">College</div>
                <div className="submenuItem">Continued Learning</div>
                <div className="submenuItem">Add Resource</div>
              </div>
            </MobileMenuItem>
            <MenuItem text="About" />
            <MenuItem text="Mentors" />
            <MenuItem text="Log In" />
          </div>
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
