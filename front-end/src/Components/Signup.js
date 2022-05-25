import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="text-center m-5-auto">
      <h2>Sign Up </h2>
      <h5>Create an Account</h5>
      <form action="/login">
        <div>
          <label for="email">Email Address</label>
          <br />
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label for="password">Password</label>
          <br />
          <input type="password" id="password" name="password" required />
        </div>
        <div>
          <input type="checkbox" name="checkbox" id="checkbox" required />{" "}
          <span>I'm at least 21yrs old</span>.
        </div>
        <div>
          <button id="submitButton" type="submit">
            Sign Up
          </button>
        </div>
      </form>
      <footer>
        <div>
          <Link to="/">Lets Go Back Home</Link>.
        </div>
      </footer>
    </div>
  );
}
