import React from "react";
export default function CartItem({ url, price, removeFromCart, id}) {
  return (
    <div className=" flex flex-col items-center gap-y-2 md:items-stretch md:flex-row md:gap-x-3">
      <div className="w-64 h-80">
          <img className="w-full h-full rounded-lg" src={`${url}&fit=crop&w=256&h=320`} alt="cart item image"  />
        </div>
      <div className="flex flex-col gap-y-1 justify-around flex-auto">
        <div className="flex  justify-between items-start gap-x-12">
          <div>
            <h4 className="text-base md:text-xl font-medium">Nike Shoes</h4>
            <h5 className="text-xs md:text-sm text-gray-600">Product ID: {id.toUpperCase()}</h5>
          </div>
          <h4 className="text-base md:text-xl font-medium">{`${price}/-`}</h4> 
        </div>
        <div className="flex justify-between">
        <span className="flex items-center gap-x-1">
            <i className="ri-check-line"></i> In Stock
          </span> 
        <button onClick={()=>removeFromCart(id)} className=" text-indigo-600 hover:text-indigo-500">Remove</button>
      </div>
        </div>
    </div>
  );
}
