import React, { useContext } from "react";
import { someContext } from "../components/context";
import Product from "../components/product";
export default function Products() {
  const context = useContext(someContext);
  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-2xl py-12 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-xl font-semibold">Featured Products</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {context.images.map((image, index) => (
            <Product
              key={image.id}
              source={image.url}
              index={index}
              isFavourited={image.isFavourited}
              setIsFavourited={context.setIsFavourited}
              id={image.id}
              addToCart={context.addToCart}
              isAlreadyInCart={context.isAlreadyInCart}
              removeFromCart={context.removeFromCart}
              price={image.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
