import React, { createContext, useState } from "react";

// create context

export const CartContext = createContext()

const CartProvider = ({  childern }) => {
  const [isOpen, setIsOpen] = useState(false);
  return <CartContext.Provider value={{isOpen,setIsOpen}}>{childern}</CartContext.Provider>;
};

export default CartProvider;
