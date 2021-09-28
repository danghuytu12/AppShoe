import React, {createContext} from 'react';
import Data from '../Data';

export const DataContext = createContext();

export const DataContextProvider = ({children}) => {
  return (
    <DataContext.Provider
      value={{
        data: Data,
      }}>
      {children}
    </DataContext.Provider>
  );
};
