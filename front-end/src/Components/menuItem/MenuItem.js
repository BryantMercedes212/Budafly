import React, { useState } from "react";

import "./MenuItem.css";

const MenuItem = ({ text, ...props }) => {
  const [displaySubMenu, setDisplaySubMenu] = useState(false);

  return (
    <li
      className="menuItem"
      onMouseEnter={() => setDisplaySubMenu(true)}
      onMouseLeave={() => setDisplaySubMenu(false)}
    >
      {text}
      {displaySubMenu && props.children}
    </li>
  );
};

export default MenuItem;
