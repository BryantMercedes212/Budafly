import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="text-center m-5">
      <label class="label is-large">Create An Account</label>
      <form action="/">
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
        <label class="label is-medium">Password</label>
        <div class="field-body">
          <p class="control has-icons-left">
            <input
              class="input is-medium"
              type="password"
              placeholder="Password"
              required
            />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <label class="checkbox">
          <input type="checkbox" name="checkbox" id="checkbox" required />{" "}
          <span>I'm at least 21yrs old</span>.
        </label>

        <div class="field">
          <p class="control">
            <button
              class="button is-success"
              button
              id="submit_button"
              type="submit"
            >
              Create Account
            </button>
          </p>
        </div>
      </form>
      <footer>
        <p>
          <Link to="/">Lets Go Back Home</Link>.
        </p>
      </footer>
    </div>
  );
}
