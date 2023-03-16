import React, { useEffect, useState } from "react";
import { createContext } from "react";

const someContext = createContext(null);

function ContextProvider(props) {
  const [images, setImages] = useState([]);
  useEffect(() => {}, []);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    // search query
    const query = "nike shoes";
    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=24&client_id=${
      import.meta.env.VITE_ACCESS_KEY
    }
      `;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const imagesArray = data.results.map((result) => ({
          // added query parameters to crop image and resize
          url: result.urls.raw,
          id: result.id,
          isFavourited: false,
          price: Math.floor(Math.random() * (5999 - 2999) + 2999),
        }));
        setImages(imagesArray);
      });
  }, []);
  function addToCart(id) {
    const itemToAdd = images.find((image) => image.id == id);
    setCartItems((prevCartItems) => [...prevCartItems, itemToAdd]);
  }
  function removeFromCart(id) {
    setCartItems((prevCartItems) => {
      return prevCartItems.filter((item) => item.id != id);
    });
  }
  function setIsFavourited(id) {
    setImages((prevImages) => {
      return prevImages.map((image) => {
        if (image.id == id) {
          return {
            ...image,
            isFavourited: !image.isFavourited,
          };
        } else return image;
      });
    });
  }

  function isAlreadyInCart(id) {
    if (cartItems.find((item) => item.id == id)) {
      return true;
    } else return false;
  }

  function isCartFilled() {
    return cartItems.length ? true : false;
  }

  function totalCartValue () {
    let total =
      cartItems.reduce((accumulator, current) => {
        return (
          accumulator + current.price
        )
      }, 0)
      return total
  }

  return (
    <someContext.Provider
      value={{
        images,
        setIsFavourited,
        addToCart,
        isAlreadyInCart,
        removeFromCart,
        isCartFilled,
        cartItems,
        totalCartValue,
        setCartItems
      }}
    >
      {props.children}
    </someContext.Provider>
  );
}

export { someContext, ContextProvider };
