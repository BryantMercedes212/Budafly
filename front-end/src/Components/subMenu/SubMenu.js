import React from "react";
import { useNavigate } from "react-router-dom";

import "./SubMenu.css";

const SubMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="submenu">
      <div className="submenu__item" onClick={() => navigate("/sellers")}>
        View all Sellers
      </div>
      <div className="submenu__item">College</div>
      <div className="submenu__item">Continued Learning</div>
      <div className="submenu__item">Add Resource</div>
    </div>
  );
};

export default SubMenu;
