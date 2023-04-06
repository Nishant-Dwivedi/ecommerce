import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/cartItem";
import { someContext } from "../components/context";
export default function Cart() {
  const { cartItems, removeFromCart, totalCartValue, setCartItems} = useContext(someContext);
  const [buttonText, setButtonText] = useState("Place Order")
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  function placeOrder () {
   setButtonText("Placing Order...")
    setTimeout(() => {
      setCartItems([]);
      setIsOrderPlaced(true);
    }, 3000)
  }
  
  return (
    <div id="cart" className="flex flex-col gap-y-2">
      {cartItems.length ? (
        <h1 className="text-3xl py-5 font-semibold text-center">Checkout</h1>
      ) : (
        <h1 className="text-3xl py-5 font-semibold text-center">{isOrderPlaced ? "Thank you for placing an order!" : "Cart empty"}</h1>
      )}
      {cartItems.length ? ( <div className="flex flex-col gap-y-7 md:gap-y-5 mb-4">
        {
          cartItems.map((item) => (
            <CartItem key={item.id} url={item.url} price={item.price} removeFromCart={removeFromCart} id={item.id}/>
          ))
        }
      </div>) : null}
      {cartItems.length ? <div className="flex justify-center gap-x-24 md:justify-between items-center py-2">
        <span className="text-xl font-semibold">Subtotal</span>
        <span className="text-xl font-semibold">
          {`${totalCartValue()}/-`}
        </span>
      </div> : null}
     {cartItems.length ?  <button className="rounded-lg bg-indigo-500 self-center text-white px-7 py-3" onClick={placeOrder}>{buttonText}</button> : null}
      <Link className="self-center py-3" to="/">{cartItems.length ? "or " : ""} <span className="text-indigo-700 font-semibold">Continue shopping</span></Link>
      
    </div>
  );
}
