import React from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <div className="text-center m-5-auto">
      <h2>Log In</h2>
      <form action="/">
        <p>
          <label>Username or Email address</label>
          <br />
          <input type="text" name="user_name" required />
        </p>
        <p>
          <label>Password</label>
          <br />
          <input type="password" name="password" required />
        </p>
        <p>
          <button id="submit_button" type="submit">
            Login
          </button>
        </p>
      </form>
      <footer>
        <p>
          Need to Sign Up? <Link to="/signup">Sign Up</Link>.
        </p>
        <Link to="/forgotpassword">
          <label className="right-label">Forgot Your Password?</label>
        </Link>
        <p>
          <Link to="/">Back to Home</Link>.
        </p>
      </footer>
    </div>
  );
}
