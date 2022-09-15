import React, { useState, createContext } from "react";

type AuthClient = {
  alias: string;
  city: string;
};

type ClientContextType = {
  client: AuthClient | null;
  setClient: React.Dispatch<React.SetStateAction<AuthClient | null>>;
};

type ClientContextProviderProps = {
  children: React.ReactNode;
};

// export const ClientContext = createContext<ClientContextType | null>(null)
export const ClientContext = createContext({} as ClientContextType);

export const ClientContextProvider = ({
  children,
}: ClientContextProviderProps) => {
  const [client, setClient] = useState<AuthClient | null>(null);
  return (
    <ClientContext.Provider value={{ client, setClient }}>
      {children}
    </ClientContext.Provider>
  );
};
