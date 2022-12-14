import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField, Button } from "@mui/material";
import axios from "axios";

const LoginAccountForm = ({
  setOpenLoginModal,
  setLoggedIn,
  setLoginMessage,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const URL = process.env.REACT_APP_API_URL;
  const [formMessage, setFormMessage] = useState("");

  const validateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const logInUser = () => {
    axios
      .post(`${URL}/users/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "error") {
          setFormMessage(response.data.message);
        } else {
          setEmail("");
          setPassword("");
          setOpenLoginModal(false);
          document.cookie = "accessToken" + response.data.accessToken;
          localStorage.setItem("accessToken", response.data.accessToken);
          setLoggedIn(true);
          setLoginMessage("You have successfully Logged In ");
        }
      })
      .catch((error) => console.log(error));
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
        Please Log In
      </Typography>
      {formMessage && (
        <div className="form__errorText" style={{ color: "red" }}>
          {formMessage}
        </div>
      )}

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
      <Button onClick={logInUser} variant="contained">
        Submit
      </Button>
    </Box>
  );
};

export default LoginAccountForm;
