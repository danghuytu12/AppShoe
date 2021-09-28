import React, {createContext, useState, useEffect} from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
  const [cartData, setCartData] = useState([]);
  return (
    <CartContext.Provider
      value={{
        cartData,
        setCartData,
      }}>
      {children}
    </CartContext.Provider>
  );
};
