import React, { useState } from "react";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import "./MenuItem.css";

const MenuItem = ({ text, ...props }) => {
  const [displaySubMenu, setDisplaySubMenu] = useState(false);

  return (
    <li
      className="menuItem"
      onMouseEnter={() => setDisplaySubMenu(true)}
      onMouseLeave={() => setDisplaySubMenu(false)}
    >
      {text}{" "}
      {props.children && (
        <ArrowDropDownIcon className="downArrowIcon" size="small" />
      )}
      {displaySubMenu && props.children}
    </li>
  );
};

export default MenuItem;
