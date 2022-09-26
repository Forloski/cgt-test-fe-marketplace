import { createContext, useMemo, useContext, useState, ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";
import { usePostCart } from "../queries/carts/postCart.query";

type ProviderProps = {
  children: ReactNode;
};

type CartManagementContext = {
  localUserIdentifier: string;
};

const LocalUserIdentifier = createContext<CartManagementContext | undefined>(undefined);

const LocalUserIdentifierProvider = ({ children }: ProviderProps) => {
  const postCard = usePostCart();
  const [localUserIdentifier] = useState<string>(() => {
    const localUserIdentifier = localStorage.getItem("localUserIdentifier");
    if (localUserIdentifier) {
      return localUserIdentifier;
    }
    const newLocalUserIdentifier = uuidv4() + "-" + uuidv4();
    localStorage.setItem("localUserIdentifier", newLocalUserIdentifier);
    postCard.mutate(newLocalUserIdentifier);
    return newLocalUserIdentifier;
  });

  const value = useMemo(
    () => ({
      localUserIdentifier,
    }),
    [localUserIdentifier]
  );

  return <LocalUserIdentifier.Provider value={value}>{children}</LocalUserIdentifier.Provider>;
};

const useLocalUserIdentifier = () => {
  const context = useContext(LocalUserIdentifier);

  if (context === undefined) {
    throw new Error("useLocalUserIdentifier must be used within a LocalUserIdentifierProvider");
  }

  return context;
};

export { LocalUserIdentifierProvider, useLocalUserIdentifier };
