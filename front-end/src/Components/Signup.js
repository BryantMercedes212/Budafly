import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="text-center m-5-auto">
      <h2>Sign Up </h2>
      <h5>Create an Account</h5>
      <form action="/">
        <p>
          <label>Username</label>
          <br />
          <input type="text" name="user_name" required />
        </p>
        <p>
          <label>Email address</label>
          <br />
          <input type="email" name="email" required />
        </p>
        <p>
          <label>Password</label>
          <br />
          <input type="password" name="password" required />
        </p>
        <p>
          <input type="checkbox" name="checkbox" id="checkbox" required />{" "}
          <span>I'm at least 21yrs old</span>.
        </p>
        <p>
          <button id="submit_button" type="submit">
            Sign Up
          </button>
        </p>
      </form>
      <footer>
        <p>
          <Link to="/">Lets Go Back Home</Link>.
        </p>
      </footer>
    </div>
  );
}
