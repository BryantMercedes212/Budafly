import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState({});

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:3333/login/${email}`);
      setAccount(res.data);
    } catch (error) {
      console.log(error);
      setAccount({});
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <div className="text-center m-5">
        <label class="label is-large">Log In To Your Account</label>
        <form action="/">
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
