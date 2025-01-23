import { createContext, useState } from "react";

export const HeroNextContext = createContext();

export function HeroNextContextProvider({ children }) {
  const [next, setNext] = useState(0);
  let values = {
    next: next,
    setNext: setNext,
  };
  return (
    <HeroNextContext.Provider value={values}>
      {children}
    </HeroNextContext.Provider>
  );
}
