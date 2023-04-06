import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Products from "./pages/products";
import Cart from "./pages/cart";

function App() {
  return (
    <div className="App py-5 px-7">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div className="text-center text-4xl font-bold py-4">404 Not Found</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
