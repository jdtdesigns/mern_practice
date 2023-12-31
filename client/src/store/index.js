import { useState, createContext, useContext } from 'react';

const StoreContext = createContext();

export function StoreProvider(props) {
  const [globalState, setGlobalState] = useState({
    loading: true,
    title: 'Some example title'
  });

  return (
    <StoreContext.Provider value={{ ...globalState, setGlobalState }}>
      {props.children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext);