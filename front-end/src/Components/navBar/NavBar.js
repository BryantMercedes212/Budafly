import React, { useState } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

import MenuItem from "../menuItem/MenuItem";
import MobileMenuItem from "../mobileMenuItem/MobileMenuItem";

import SubMenu from "../subMenu/SubMenu";

import "./NavBar.css";

const Navbar = ({
  cartLength,
  setOpenLoginModal,
  loggedIn,
  setLoggedIn,
  setLoginMessage,
}) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const logOut = () => {
    console.log("logged out");
    localStorage.removeItem("accessToken");
    setLoginMessage("You have successfully logged out");
    setLoggedIn(false);
  };

  return (
    <div className="navbar">
      <div>
        <div className="navbar__items">
          <div className="navbar__logo">
            <Link to="/">
              {" "}
              <img
                src="https://static.thenounproject.com/png/4021632-84.png"
                alt=""
              />{" "}
              <img src="./logo.png" alt="" />{" "}
            </Link>
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
                <div className="submenuItem">High School</div>
                <div className="submenuItem">College</div>
                <div className="submenuItem">Continued Learning</div>
                <div className="submenuItem">Add Resource</div>
              </MobileMenuItem>
              <MenuItem text="About" />
              <MenuItem text="Mentors" />
              <MenuItem text="Log In" />
            </div>
            <ul className="navbar__itemLinks">
              <MenuItem text="Resources">
                <SubMenu />
              </MenuItem>
              <Link to="/products">
                <MenuItem text="Products" />
              </Link>
              <Link to="/Cart">
                <MenuItem text={`🛒 (${cartLength})`} />
              </Link>
              {loggedIn && (
                <Button variant="contained" onClick={logOut}>
                  Log Out
                </Button>
              )}
              {!loggedIn && (
                <Button
                  variant="contained"
                  onClick={() => setOpenLoginModal(true)}
                >
                  Log In
                </Button>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="brokenBottom">
        {" "}
        <img src="/broken.png" />
      </div>
    </div>
  );
};

export default Navbar;
