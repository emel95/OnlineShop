import React, { useState,createContext,useContext } from "react";

 const ProductsContextCache =createContext();
 const ProductsContextSetStateCache =createContext();

const GlobalStateProductsCache=({children}) =>{
  const [productsCache, setProductsCache] = useState([]);

  return (
    <ProductsContextCache.Provider value={productsCache}>
      <ProductsContextSetStateCache.Provider value={setProductsCache}>
      {children}
      </ProductsContextSetStateCache.Provider>
    </ProductsContextCache.Provider>
  );
}
function useProductsContextCache(){
  return useContext(ProductsContextCache);
}

function useProductsContextSetStateCache(){
  return useContext(ProductsContextSetStateCache);
}
export {useProductsContextCache,useProductsContextSetStateCache}
export default GlobalStateProductsCache;
