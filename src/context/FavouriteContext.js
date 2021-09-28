import React, {createContext, useState} from 'react';

export const FavouriteContext = createContext();

export const FavouriteContextProvider = ({children}) => {
  const [favData, setFavData] = useState([]);
  return (
    <FavouriteContext.Provider
      value={{
        favData,
        setFavData,
      }}>
      {children}
    </FavouriteContext.Provider>
  );
};
