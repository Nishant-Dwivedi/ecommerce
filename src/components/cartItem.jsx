import React from "react";
export default function CartItem({ url, price, removeFromCart, id }) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-x-5">
        <div className="w-64 h-64">
          <img className="w-full h-full rounded-lg" src={url} alt="cart item image"  />
        </div>
        <div className="flex flex-col justify-around align-center">
          <div>
            <h4 className="text-xl font-medium">Nike Shoes</h4>
            <h5 className="text-base text-gray-600">Nike AirMax </h5>
          </div>
          <span className="flex align-center gap-x-1">
            <i className="ri-check-line"></i> In Stock
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-around items-center">
        <h4 className="text-xl font-medium">{`${price}/-`}</h4>
        <button onClick={()=>removeFromCart(id)} className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
      </div>
    </div>
  );
}
