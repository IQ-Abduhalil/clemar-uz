import { createContext, useState } from "react";

export const LikeContext = createContext();

export function LikeContextProvider({ children }) {
  const [like, setLike] = useState(0);

  let values = {
    like: like,
    setLike: setLike,
  };

  return <LikeContext.Provider value={values}>{children}</LikeContext.Provider>;
}
