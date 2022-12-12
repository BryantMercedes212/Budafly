import "./App.css";
import AllSellerView from "./Components/allSellersView/AllSellersView";
import { useState, useEffect } from "react";
import { Routes, Route, createPath } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/home/Home";
import NavBar from "./Components/navBar/NavBar";
import Product from "./Components/productDetails/ProductDetails";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ForgotPassword from "./Components/ForgotPassword";
import Modal from "./Components/modal/Modal";
import Faqs from "./Components/FAQs";
import Laws from "./Components/Laws";
import LoginModal from "./Components/loginModal/LoginModal";
import Footer from "./Components/footer/Footer";
import CheckOut from "./Components/checkOut/CheckOut";
import axios from "axios";
import Cart from "./Components/cart/Cart";
import LandingPage from "./Components/seller/landigPage/LandingPage";
import SingleView from "./Components/seller/singleView";
import EditProductForm from "./Components/seller/editProduct";
import AddProductForm from "./Components/seller/addProductForm";
import FourOFour from "./Components/FourOFour";
import ProductCards from "./Components/productCards/ProductCards";
import CouponGenerator from "./Components/couponGenerator/CouponGenerator";
import Game from "./Components/game/Game";
import NewsLetter from "./Components/newsLetter/NewsLetter";

const App = () => {
  const URL = process.env.REACT_APP_API_URL;
  const [input, setInput] = useState("");
  const [cart, setCart] = useState([]);
  const [login, setLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("accessToken") ? true : false
  );
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [openLoginModal, setOpenLoginModal] = useState(false);
  let filterProducts = [];

  const handleModalChange = () => {
    setModalOpen(true);
    localStorage.setItem("modal", JSON.stringify(true));
  };

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
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }

    if (localStorage.getItem("modal")) {
      setModalOpen(true);
    }
  }, []);

  return (
    <div className="App">
      {!modalOpen && (
        <Modal
          setOpenModal={setModalOpen}
          handleModalChange={handleModalChange}
        />
      )}
      <NavBar
        cartLength={cart.length}
        setOpenLoginModal={setOpenLoginModal}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
      <LoginModal
        openLoginModal={openLoginModal}
        setOpenLoginModal={setOpenLoginModal}
        setLoggedIn={setLoggedIn}
      ></LoginModal>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          exact
          path="/products"
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
          element={<LandingPage login={login} addItem={addItem} />}
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
        <Route path="/FAQs" element={<Faqs />} />
        <Route path="/Laws" element={<Laws />} />
        <Route
          path="/checkOut"
          element={
            <CheckOut
              cart={cart}
              setCart={setCart}
              deleteItem={deleteItem}
              discountCode={discountCode}
            />
          }
        />
        <Route path="*" element={<FourOFour />} />
        <Route path="/sellers" element={<AllSellerView />} />
        <Route
          path="/coupons"
          element={<CouponGenerator setDiscountCode={setDiscountCode} />}
        />
        <Route
          path="/game"
          element={<Game setDiscountCode={setDiscountCode} />}
        />
        <Route path="/news" element={<NewsLetter />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
