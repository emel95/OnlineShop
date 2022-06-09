import React, { useReducer, createContext, useContext } from "react";
import { reducersCart } from "./reducersCart";

const ShopContext = createContext();
const ShopContextSetState = createContext();

const GlobalStateCart = ({ children }) => {
  const [cartState, dispatch] = useReducer(reducersCart, {
    cart: [],
    totalPrice: 0,
  });

  return (
    <ShopContext.Provider value={cartState}>
      <ShopContextSetState.Provider value={dispatch}>
        {children}
      </ShopContextSetState.Provider>
    </ShopContext.Provider>
  );
}
function useShopContext() {
  return useContext(ShopContext);
}

function useShopContextSetState() {
  return useContext(ShopContextSetState);
}
export { useShopContext, useShopContextSetState }
export default GlobalStateCart;
