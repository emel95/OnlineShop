import React, { useState,createContext,useContext } from "react";

 const ProductsContext =createContext();
 const ProductsContextSetState =createContext();

const GlobalStateProducts=({children}) =>{
  const [products, setProducts] = useState([]);

  return (
    <ProductsContext.Provider value={products}>
      <ProductsContextSetState.Provider value={setProducts}>
      {children}
      </ProductsContextSetState.Provider>
    </ProductsContext.Provider>
  );
}
function useProductsContext(){
  return useContext(ProductsContext);
}

function useProductsContextSetState(){
  return useContext(ProductsContextSetState);
}
export {useProductsContext,useProductsContextSetState}
export default GlobalStateProducts;
