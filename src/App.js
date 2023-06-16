import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./componant/Header";
import Home from "./componant/Home";
import Cart from "./componant/Cart";
import Loading from "./componant/Loading";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product_Page from "./componant/Product_Page";
import Product_info from "./componant/Product_info";

function App() {
  //Preloader
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 7300);
  });
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="/Product" />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
