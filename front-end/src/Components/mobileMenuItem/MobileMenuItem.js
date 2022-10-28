import { useState } from "react";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import "./MobileMenuItem.css";

const MobileMenuItem = ({ text, ...props }) => {
  const [displaySubMenu, setDisplaySubMenu] = useState(false);

  return (
    <li
      className="mobileMenuItem"
      onClick={() => setDisplaySubMenu(!displaySubMenu)}
    >
      {text}{" "}
      {props.children && (
        <ArrowDropDownIcon className="downArrowIcon" size="small" />
      )}
      {displaySubMenu && props.children}
    </li>
  );
};

export default MobileMenuItem;
