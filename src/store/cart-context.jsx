import React, { createContext, useEffect, useState } from 'react';

const CartContext = createContext({
  cart: [],
  cartLength: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  increaseQty: () => {},
  decreaseQty: () => {},
});

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState(JSON.parse(window.localStorage.getItem('cart') || '[]'));

  const addToCart = (newItem) => {
    const isPresent = cart.some((item) => item.id === newItem.id);
    if (isPresent) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === newItem.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...newItem, qty: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartLength: cart.length,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
