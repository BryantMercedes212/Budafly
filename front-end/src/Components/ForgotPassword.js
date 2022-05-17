import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="text-center m-5-auto">
      <h2>Reset your password</h2>
      <h5>
        Enter the email address on your account and we will send you a new
        password
      </h5>
      <form action="/login">
        <p>
          <label id="reset_password">Email address</label>
          <br />
          <input type="email" name="email" required />
        </p>
        <p>
          <button id="submit_button" type="submit">
            Reset Password
          </button>
        </p>
      </form>
      <footer>
        <p>
          New To Us? <Link to="/signup">Create an account</Link>.
        </p>
        <p>
          <Link to="/">Lets Go Back Home</Link>.
        </p>
      </footer>
    </div>
  );
}
