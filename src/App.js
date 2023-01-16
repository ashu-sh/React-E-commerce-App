import React from "react";
import './App.css'
import Header from "./componant/Header";
import Home from "./componant/Home";
import Cart from "./componant/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="Cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
