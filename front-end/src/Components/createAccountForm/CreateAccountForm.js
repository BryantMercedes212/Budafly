import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField, Button } from "@mui/material";
import "./CreateAccountForm.css";
import axios from "axios";

const CreateAccountForm = ({ setOpenLoginModal, setLoggedIn }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const URL = process.env.REACT_APP_API_URL;

  const createUser = (e) => {
    axios
      .post(`${URL}/users/newuser`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "error") {
          if (response.data.message.includes("users_email_key")) {
            setFormMessage(
              "Please choose another email. This one is already taken."
            );
          }
        } else {
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          localStorage.setItem("accessToken", response.data.accessToken);
          setLoggedIn(true);
          setOpenLoginModal(false);
        }
      })
      .catch((error) => console.log(error));
  };

  const validateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const validatePassword = () => {
    if ("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$".test(password)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { my: 1, width: "30ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography
        className="loginModal__title"
        id="modal-modal-title"
        variant="h6"
        component="h2"
      >
        Please Create an Account
      </Typography>
      {formMessage && (
        <div className="form__errorText" style={{ color: "red" }}>
          {formMessage}
        </div>
      )}

      <TextField
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        required
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
      <TextField
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        required
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        required
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        onBlur={validateEmail}
        error={emailError}
        helperText={emailError && "Please enter a valid email."}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        type="password"
        variant="outlined"
        required
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Button onClick={createUser} variant="contained">
        Submit
      </Button>
    </Box>
  );
};

export default CreateAccountForm;
