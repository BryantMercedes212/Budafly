import { Link } from "react-router-dom";
import Search from "./Search";
import Product from "./singleProduct";

const NavBar = ({ login }) => {
  return (
    /*<div>
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/About">ABOUT</Link>
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
            <Link to="/userProfile">👤</Link>
          </li>
          <li>
            <Link to="/Cart">🛒</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};*/
    <nav
      class="navbar has-shadow is-white"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="https://budafly.netlify.app/">
          <img
            src="https://i.ibb.co/GWbsnBR/Screen-Shot-2022-05-19-at-12-02-14-PM.png"
            alt=""
            style={{ "max-height": "110px" }}
            class="py-4 px-4"
          />
        </a>

        <a
          role="button"
          class="navbar-burger"
          id="burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-links"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar-links" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item is-size-5 is-bold is-italic">
            <Link to="/">Home</Link>
          </a>

          <a class="navbar-item is-size-5">
            <Link to="/Cart">🛒</Link>
          </a>

          <div class="navbar-item has-dropdown is-hoverable is-bold is-italic is-size-5">
            <a class="navbar-link">More</a>

            <div class="navbar-dropdown">
              <a class="navbar-item is-bold is-size-6">
                <Link to="/About">About Us</Link>
              </a>
              <a class="navbar-item is-bold is-size-6">
                <Link to="/Signup">Create an Account</Link>
              </a>
              <a class="navbar-item is-bold is-size-6">
                <Link to="/FAQs">FAQ's</Link>
              </a>
              <hr class="navbar-divider" />
              <a class="navbar-item is-bold is-size-6">
                <Link to="/Laws">Laws</Link>
              </a>
            </div>
          </div>

          <a class="navbar-item px-4"></a>
          <Search />
        </div>

        <div class="navbar-end">
          {login ? (
            ""
          ) : (
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>
                    <Link to="/Login">Login</Link>
                  </strong>
                </a>
                <a class="button is-light">
                  <Link to="/Signup">Create an Account</Link>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/*<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
        <ul class="container">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Cart">Shopping Cart</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Login">Login</a>
          </li>
          <li>
            <a href="/Signup">Create an Account</a>
          </li>
          <li>
            <a href="/ForgotPassword">Forgot Password</a>
          </li>
          <li>
            <a href="/products/:id">Product</a>
          </li>
          <li>
            <a href="/seller/:id/products/new">Sell New Product</a>
          </li>
          <li>
            <a href="/seller/:id/products/:pid/edit">Edit Your Product</a>
          </li>
          <li>
            <a href="/seller/:id/products/:pid">Products</a>
          </li>
          <li>
            <a href="/seller/:id/products">All Your Products</a>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">
              Current Page
            </a>
          </li>
        </ul>
</nav>*/}
    </nav>
  );
};

export default NavBar;
