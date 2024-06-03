import React from "react";
import Home from "./routers/home/Home";
import SingleRoute from "./routers/singleRoute/SingleRoute";
import Shop from "./routers/shop/Shop";
import Header from "./components/header/Header";
import "./scss/main.scss";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wishlist from "./routers/wishlist/Wishlist";
import "number-brm";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleRoute />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="*"
          element={
            <h1
              style={{ textAlign: "center", paddingTop: "40px" }}
              className="container"
            >
              404
            </h1>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
