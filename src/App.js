import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Coin from "./pages/Coin";
import Coins from "./pages/Coins";
import Home from "./pages/Home";
import React from "react";
import NotFound from "./pages/NotFound";
import { useSelector } from "react-redux";

function App() {
  // eslint-disable-next-line no-unused-vars
  const theme = useSelector((state) => state.theme.value);
  return (
    <div
      data-theme={theme ? "light" : "dark"}
      className="min-h-screen w-screen"
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="coin/:id" element={<Coin />} />
        <Route path="coins" element={<Coins />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
