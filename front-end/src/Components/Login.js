import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

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

  const handleLogin = (e) => {
    e.preventDefault();
    setLogin(true);
    navigate("/userProfile");
  };
  console.log(login);

  return (
    <div className="wrapper">
      <div className="text-center m-5-auto">
        <h2>Log In</h2>
        <form action="/userProfile" onSubmit={handleLogin}>
          <p>
            <label>Username or Email address</label>
            <br />
            <input
              type="text"
              name="user_name"
              required
              value={email}
              onChange={handleEmail}
            />
          </p>
          <p>
            <label>Password</label>
            <br />
            <input
              type="password"
              name="password"
              value={password}
              required
              onChange={handlePassword}
            />
          </p>
          <p>
            <button id="submit_button" type="submit">
              login
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
    </div>
  );
}
