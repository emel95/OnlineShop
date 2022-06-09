import React, { useState, createContext, useContext } from "react";
import { useProductsContext } from "../product/GlobalStateProducts";



const FavoritesContext = createContext();
const FavoritesContextSetState = createContext();

const GlobalStateFavorites = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoritesContext.Provider value={favorites}>
      <FavoritesContextSetState.Provider value={setFavorites}>
        {children}
      </FavoritesContextSetState.Provider>
    </FavoritesContext.Provider>
  );
}
function useFavoritesContext() {
  return useContext(FavoritesContext);
}

function useFavoritesContextSetState() {
  return useContext(FavoritesContextSetState);
}

function useFavoritesActions(id) {
  const favorite = useFavoritesContext();

  if (favorite.findIndex(item => item === id) < 0)
    return false
  else {
    return true
  }


}

function useProductFavoritesActions() {
  const favorite = useFavoritesContext();
  const products = useProductsContext();
  const productsFavorite = products.filter(item => favorite.includes(item.id));
  return productsFavorite;
}

export { useFavoritesContext, useFavoritesContextSetState, useProductFavoritesActions, useFavoritesActions }
export default GlobalStateFavorites;