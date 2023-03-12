import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/cartItem";
import { someContext } from "../components/context";
export default function Cart() {
  const { cartItems, removeFromCart, totalCartValue, setCartItems} = useContext(someContext);
  const [buttonText, setButtonText] = useState("Place Order")
  function placeOrder () {
   setButtonText("Placing Order...")
    setTimeout(() => {
      setCartItems([]);
      console.log("order placed!");
    }, 3000)
  }
  
  return (
    <div id="cart" className="flex flex-col">
      {cartItems.length ? (
        <h1 className="text-4xl py-5 font-semibold text-center">Checkout</h1>
      ) : (
        <h1 className="text-4xl py-5 font-semibold text-center">Cart Empty</h1>
      )}
      <div className="flex flex-col gap-y-5">
        {
          cartItems.map((item) => (
            <CartItem key={item.id} url={item.url} price={item.price} removeFromCart={removeFromCart} id={item.id}/>
          ))
        }
      </div>
      {cartItems.length ? <div className="flex justify-between items-center py-3">
        <span className="text-xl font-semibold">Subtotal</span>
        <span className="text-xl font-semibold">
          {`${totalCartValue()}/-`}
        </span>
      </div> : null}
     {cartItems.length ?  <button className="rounded-lg bg-indigo-500 self-center text-white px-7 py-3" onClick={placeOrder}>{buttonText}</button> : null}
      <Link className="self-center py-3" to="/">{cartItems.length ? "Or " : ""} <span className="text-indigo-700 font-semibold">continue shopping</span></Link>
      
    </div>
  );
}
