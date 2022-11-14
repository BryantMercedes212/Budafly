import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewUserForm() {
  const URL = process.env.REACT_APP_API_URL;
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleTextChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  let userSignUp = {};
  let userFirstName = {};
  console.log(user.firstname);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${URL}/users`, user)
      .then((res) => {
        userSignUp = res.data.id;
        userFirstName = res.data.firstname;
        localStorage.setItem("userid", userSignUp);
        localStorage.setItem("firstName", userFirstName);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  let { firstname, lastname, email, password } = user;

  return (
    <div className="newForm">
      <div className="banner-container">
        <h1 id="descript"> 🥰🤪😂🥳😬🙃😎🤩</h1>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          style={{ color: "white", paddingTop: "35px" }}
        >
          <input
            style={{ margin: "25px" }}
            id="firstname"
            value={firstname}
            type="text"
            onChange={handleTextChange}
            placeholder="First Name"
            required
          />

          <input
            style={{ margin: "25px" }}
            id="lastname"
            value={lastname}
            type="text"
            onChange={handleTextChange}
            placeholder="Last Name"
          />
          <br />

          <input
            style={{ margin: "25px" }}
            id="email"
            value={email}
            type="email"
            onChange={handleTextChange}
            placeholder="Email"
            required
          />

          <input
            style={{ margin: "25px" }}
            id="password"
            value={password}
            type="password"
            onChange={handleTextChange}
            placeholder="Password"
            required
          />
          <br />

          <button id="nSubmit" type="Submit" style={{ margin: "25px" }}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
