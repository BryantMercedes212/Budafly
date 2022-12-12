import { useState } from "react";
import { Modal, Tabs, Tab, Stack } from "@mui/material";
import CreateAccountForm from "../createAccountForm/CreateAccountForm";
import LoginAccountForm from "../loginAccountForm/LoginAccountForm";
import "./LoginModal.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const LoginModal = ({ openLoginModal, setOpenLoginModal, setLoggedIn }) => {
  const [value, setValue] = useState(0);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    width: "30ch",
  };

  const handleClose = () => {
    setOpenLoginModal(false);
  };
  const handleChange = (e) => {
    setValue(Number(e.target.id[e.target.id.length - 1]));
  };

  return (
    <Modal
      className="loginModal"
      open={openLoginModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack
        component="form"
        sx={style}
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Log in and create account tabs"
        >
          <Tab label="Log In" {...a11yProps(0)} />
          <Tab label="Create Account" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <LoginAccountForm
            setOpenLoginModal={setOpenLoginModal}
            setLoggedIn={setLoggedIn}
            // setLoginMessage={setLoginMessage}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CreateAccountForm
            setOpenLoginModal={setOpenLoginModal}
            setLoggedIn={setLoggedIn}
            // setLoginMessage={setLoginMessage}
          />
        </TabPanel>
      </Stack>
    </Modal>
  );
};

export default LoginModal;
