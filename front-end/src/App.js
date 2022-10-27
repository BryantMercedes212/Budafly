//import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, createPath } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import NavBar from "./Components/navBar/NavBar";
import Product from "./Components/productDetails/ProductDetails";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ForgotPassword from "./Components/ForgotPassword";
// import Modal from "./Components/Modal";
import Search from "./Components/Search";
import Faqs from "./Components/FAQs";
import Laws from "./Components/Laws";
import Demo from "./Components/seller/demoProfile";
import Footer from "./Components/footer/Footer";
import axios from "axios";

//import Search from "./Components/Search";

import Cart from "./Components/Cart";
import LandingPage from "./Components/seller/landingPage";
import SingleView from "./Components/seller/singleView";
import EditProductForm from "./Components/seller/editProduct";
import AddProductForm from "./Components/seller/addProductForm";
import FourOFour from "./Components/FourOFour";
import ProductCards from "./Components/productCards/ProductCards";

const App = () => {
  // const [modalOpen, setModalOpen] = useState(false);
  const [input, setInput] = useState("");
  const [cart, setCart] = useState([]);
  const [login, setLogin] = useState(false);
  const URL = process.env.REACT_APP_API_URL;
  const [products, setProducts] = useState([]);

  const addItem = (item) => {
    item.quantity = 1;

    setCart([...cart, item]);

    let tempArr = [...cart];
    if (!cart.length) {
      localStorage.setItem(
        "cart",
        JSON.stringify(tempArr.length === 0 ? [item] : tempArr)
      );
    } else {
      tempArr.push(item);
      localStorage.setItem("cart", JSON.stringify(tempArr));
    }
  };

  const deleteItem = (i) => {
    let tempArr = [...cart];
    tempArr.splice(i, 1);
    setCart(tempArr);
    localStorage.setItem("cart", JSON.stringify(tempArr));
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${URL}/products/`);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
      setProducts([]);
    }
  };
  let filterProducts = [];

  if (input) {
    if (
      input.toLocaleLowerCase() === "sativa" ||
      input === "indica" ||
      input === "hybrid"
    ) {
      filterProducts = products.filter(
        (product) =>
          product.type.toLocaleLowerCase() === input.toLocaleLowerCase()
      );
    } else {
      filterProducts = products.filter((product) =>
        product.name.toLowerCase().includes(input.toLocaleLowerCase())
      );
    }

    console.log(filterProducts);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  return (
    <div className="App">
      <NavBar
        login={login}
        cartLength={cart.length}
        setInput={setInput}
        input={input}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ProductCards
              addItem={addItem}
              products={products}
              filterProducts={filterProducts}
              input={input}
              setInput={setInput}
            />
          }
        />
        <Route path="/About" element={<About />} />
        <Route path="/products/:id" element={<Product addItem={addItem} />} />
        <Route
          path="/seller/:id/products"
          element={<LandingPage login={login} />}
        />
        <Route path="/seller/:id/products/new" element={<AddProductForm />} />
        <Route
          path="/seller/:id/products/:pid"
          element={<SingleView login={login} />}
        />
        <Route
          path="/seller/:id/products/:pid/edit"
          element={<EditProductForm />}
        />
        <Route
          path="/Login"
          element={<Login setLogin={setLogin} login={login} />}
        />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route
          path="/Cart"
          element={
            <Cart cart={cart} deleteItem={deleteItem} setCart={setCart} />
          }
        />{" "}
        <Route
          path="/Search"
          element={<Search setInput={setInput} input={input} />}
        />
        <Route path="/FAQs" element={<Faqs />} />
        <Route path="/Laws" element={<Laws />} />
        <Route path="/userProfile" element={<Demo />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
