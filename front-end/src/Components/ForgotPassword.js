import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div>
      <div className="text-center m-5">
        <label class="label is-large">Reset Your Password</label>
        <form action="/login">
          <label class="label is-medium">
            Enter Your Email Address To Receive Reset Email
          </label>
          <label class="label is-medium">Email Address</label>
          <div class="field-body">
            <p class="control has-icons-left">
              <input
                class="input is-medium"
                type="email"
                placeholder="Email"
                required
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button
                class="button is-success"
                button
                id="submit_button"
                type="submit"
              >
                Reset Password
              </button>
            </p>
          </div>
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
    </div>
  );
}
