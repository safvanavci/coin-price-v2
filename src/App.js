import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Coin from "./pages/Coin";
import Coins from "./pages/Coins";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div data-theme="dark" className="min-h-screen">
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
