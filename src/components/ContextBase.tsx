import { createContext } from "react";
import { ContextTema } from "./ContextTema";

type ContextBaseProviderProps = {
  children: React.ReactNode;
};

export const ContextBase = createContext(ContextTema);

export const ContextBaseProvider = ({ children }: ContextBaseProviderProps) => {
  return (
    <ContextBase.Provider value={ContextTema}>{children}</ContextBase.Provider>
  );
};
