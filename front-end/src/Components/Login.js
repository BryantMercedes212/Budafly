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
    <div className="text-center m-5-auto">
      <h2>Log In</h2>
      <form action="/">
        <div>
          <label for="email">Email Address</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmail}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            required
            onChange={handlePassword}
          />
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
