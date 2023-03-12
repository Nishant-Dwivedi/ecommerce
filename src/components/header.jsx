import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { someContext } from "./context";
import logo from "../assets/sneakers.png";

export default function Header() {
  const { isCartFilled } = useContext(someContext);
  return (
    <header>
      <Link to="/">
        <div className="logo-container">
          <img src={logo} />
          <h2>Shoekart</h2>
        </div>
      </Link>
      <Link to="/cart">
        {isCartFilled() ? (
          <i className="ri-shopping-cart-2-fill ri-2x"></i>
        ) : (
          <i className="ri-shopping-cart-2-line ri-2x"></i>
        )}
      </Link>
    </header>
  );
}
