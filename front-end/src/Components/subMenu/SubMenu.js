import React from "react";

import "./SubMenu.css";

const SubMenu = () => {
  return (
    <div className="submenu">
      <div className="submenu__item" id="allResources">
        All Resources
      </div>
      <div className="submenu__item">High School</div>
      <div className="submenu__item">College</div>
      <div className="submenu__item">Continued Learning</div>
      <div className="submenu__item">Add Resource</div>
    </div>
  );
};

export default SubMenu;
