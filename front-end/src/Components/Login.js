import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function LogIn({ login, setLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState({});
  let navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin(true);
    navigate("/userProfile");
  };
  console.log(login);

  return (
    <div>
      <div className="text-center m-5">
        <label class="label is-large">Log In To Your Account</label>
        <form action="/" onSubmit={handleSubmit}>
          <label class="label is-medium">Email Address</label>
          <div class="field-body">
            <p class="control has-icons-left">
              <input
                class="input is-medium"
                type="email"
                placeholder="Email"
                //style={{ "max-length": "30px" }}
                required
                value={email}
                onChange={handleEmail}
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
                value={password}
                required
                onChange={handlePassword}
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
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
                Login
              </button>
            </p>
          </div>
        </form>
        <footer>
          <p>
            <Link to="/signup"> Need to Sign Up</Link>.
          </p>
          <Link to="/forgotpassword">
            <label className="right-label">Forgot Your Password?</label>
          </Link>
          <p>
            <Link to="/">Back to Home</Link>.
          </p>
        </footer>
      </div>
    </div>
  );
}
