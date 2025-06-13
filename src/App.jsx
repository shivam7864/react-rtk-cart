import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Country from "./components/Country";
import Country2 from "./components/Country2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* It will give access of showNotification in the Products page only not in the cart page */}
        {/* <NotificationProvider>
          <Routes>
            <Route path="/" element={<Products />} />
          </Routes>
        </NotificationProvider> */}
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/country" element={<Country />} />
          <Route path="/country_two" element={<Country2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
