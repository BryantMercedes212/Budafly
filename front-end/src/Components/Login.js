import React from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <div className="text-center m-5-auto">
      <h2>Log In</h2>
      <form action="/">
        <div>
          <label for="email">Email Address</label>
          <br />
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input type="password" id="password" name="password" required />
        </div>
        <div>
          <button id="submitButton" type="submit">
            Login
          </button>
        </div>
      </form>
      <footer>
        <div>
          Need to Sign Up? <Link to="/signup">Sign Up</Link>.
        </div>
        <Link to="/forgotPassword">
          <label className="right-label">Forgot Your Password?</label>
        </Link>
        <div>
          <Link to="/">Back to Home</Link>.
        </div>
      </footer>
    </div>
  );
}
