import "./App.css";
import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Product from "./Components/singleProduct";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </div>
    );
  }
}

export default App;
