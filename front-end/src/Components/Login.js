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
    <div className="wrapper">
      <div className="text-center m-5-auto">
        <h2>Log In</h2>
        {/*fix routing path/link for where a user goes after they log in */}
        <form action="/">
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
    </div>
  );
}
