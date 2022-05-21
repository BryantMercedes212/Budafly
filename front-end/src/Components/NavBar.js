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
          <li>
            <Link to="/Login">User Login</Link>
          </li>
          <li>
            <Link to="/Signup">Create an Account</Link>
          </li>
          <li>
            <Link to="/Search">search</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
