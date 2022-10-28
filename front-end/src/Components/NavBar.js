import { Link } from "react-router-dom";
import Search from "./Search";
import Product from "./ProductDetails";

const NavBar = ({ login, cartLength, setInput, input }) => {
  //   <nav class="navbar" role="navigation" aria-label="main navigation">
  //   <div class="navbar-brand">
  //     <a class="navbar-item" href="https://budafly.netlify.app/">
  //     <img
  //             src="https://i.ibb.co/GWbsnBR/Screen-Shot-2022-05-19-at-12-02-14-PM.png"
  //             alt=""
  //             style={{ "max-height": "110px" }}
  //             class="py-4 px-4"
  //           />
  //     </a>

  //     <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
  //       <span aria-hidden="true"></span>
  //       <span aria-hidden="true"></span>
  //       <span aria-hidden="true"></span>
  //     </a>
  //   </div>

  //   <div id="navbarBasicExample" class="navbar-menu">
  //     <div class="navbar-start">
  //       <a class="navbar-item">
  //       <Link to="/">Home</Link>
  //       </a>

  //       <a class="navbar-item">
  //         Documentation
  //       </a>

  //       <div class="navbar-item has-dropdown is-hoverable">
  //         <a class="navbar-link">
  //           More
  //         </a>

  //         <div class="navbar-dropdown">
  //           <a class="navbar-item ">
  //             About
  //           </a>
  //           <a class="navbar-item">
  //             Jobs
  //           </a>
  //           <a class="navbar-item">
  //             Contact
  //           </a>
  //           <hr class="navbar-divider">
  //           <a class="navbar-item">
  //             Report an issue
  //           </a>
  //         </div>
  //       </div>
  //     </div>

  //     <div class="navbar-end">
  //       <div class="navbar-item">
  //         <div class="buttons">
  //           <a class="button is-primary">
  //             <strong>Sign up</strong>
  //           </a>
  //           <a class="button is-light">
  //             Log in
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </nav>

  return (
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
          <div className="cart">
            <p>{cartLength}</p>
            <a class="navbar-item is-size-5">
              <Link to="/Cart">🛒</Link>
            </a>
          </div>

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
    </nav>
  );
};

export default NavBar;
