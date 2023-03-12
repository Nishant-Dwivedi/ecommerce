import React, { useState } from "react";
import PropTypes from "prop-types";
export default function Product({
  source,
  index,
  isFavourited,
  setIsFavourited,
  id,
  addToCart,
  isAlreadyInCart,
  removeFromCart,
  price
}) {
  const [isHovered, setIsHovered] = useState(false);
  function handleHover() {
    setIsHovered((prevIsHovered) => !prevIsHovered);
  }
  function iconsToRender() {
    const heartFilled = (
      <i
        onClick={() => setIsFavourited(id)}
        className="ri-heart-fill ri-2x heart"
      ></i>
    );
    const heartEmpty = (
      <i
        onClick={() => setIsFavourited(id)}
        className="ri-heart-line heart ri-2x"
      ></i>
    );
    const plus = (
      <i
        className="ri-add-circle-line ri-2x plus"
        onClick={() => addToCart(id)}
      ></i>
    );
    const cartFull = (
      <i
        className="ri-shopping-cart-fill ri-2x cartFull"
        onClick={() => removeFromCart(id)}
      ></i>
    );
    let leftIcon;
    let rightIcon;

    if (isFavourited) {
      leftIcon = heartFilled;
    } else if (isHovered) {
      leftIcon = heartEmpty;
    } else {
      leftIcon = null;
    }

    if (isAlreadyInCart(id)) {
      rightIcon = cartFull;
    } else if (isHovered) {
      rightIcon = plus;
    } else {
      rightIcon = null;
    }

    return (
      <>
        {leftIcon}
        {rightIcon}
      </>
    );
  }
  return (
    <div
      className="group"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 image-container">
        <img
          src={source}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
        {iconsToRender()}
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{`Nike AirMax ${
        index + 1 * 100
      }`}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{`${price}/-`}</p>
    </div>
  );
}

Product.propTypes = {
  source: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isFavourited: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};
