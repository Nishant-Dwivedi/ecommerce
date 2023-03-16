import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { someContext } from "./context";
import logo from "../assets/sneakers.png";

export default function Header() {
  const { isCartFilled } = useContext(someContext);
  return (
    <header className="flex justify-between items-center py-3 px-3 rounded-xl bg-gray-300">
      <Link to="/">
        <div className="flex gap-x-1 items-center">
          <img src={logo} className="w-12 h-12 md:w-max md:h-max" />
          <h2 className="text-4xl md:text-5xl font-semibold">Shoekart</h2>
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
