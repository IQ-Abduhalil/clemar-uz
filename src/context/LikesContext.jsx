import { createContext, useState } from "react";

export const LikeContext = createContext();

export function LikeContextProvider({ children }) {
  const [count, setCount] = useState(0);
  const [likes, setLikes] = useState();

  let values = {
    count,
    setCount,
  };

  return <LikeContext.Provider value={values}>{children}</LikeContext.Provider>;
}
