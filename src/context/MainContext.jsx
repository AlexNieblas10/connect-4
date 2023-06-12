import { createContext, useState } from "react";

export const MainContext = createContext();

export function ContextProvider({ children }) {
  const [player, setPlayer] = useState(1);
  const [modal, setModal] = useState(false);
  return (
    <MainContext.Provider value={{ player, setPlayer, modal, setModal }}>
      {children}
    </MainContext.Provider>
  );
}
