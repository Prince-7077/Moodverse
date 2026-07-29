import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (item) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.title === item.title);
      if (exists) return prev;
      return [...prev, item];
    });
  };

  const removeFavorite = (item) => {
    setFavorites((prev) =>
      prev.filter((fav) => fav.title !== item.title)
    );
  };

  const setAllFavorites = (items) => {
    setFavorites(items);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        setAllFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);