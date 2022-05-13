import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/">🅷🅾🅼🅴</Link>
          </li>
          <li>
            <Link to="/About">🅰🅱🅾🆄🆃</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
