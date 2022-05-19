import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Home from "./Components/Home";
import Cart from "./Components/Cart/Cart";

import Modal from "./Components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <br></br>
      <br></br>
      <div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
    </div>
  );
}


export default App;
