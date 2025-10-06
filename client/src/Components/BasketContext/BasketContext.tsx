import { createContext, useState, useContext } from "react";

type BasketContextType = {
  basketCount: number;
  addToBasket: () => void;
};

const basketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider = ({ children }: { children: React.ReactNode }) => {
  const [basketCount, setBasketCount] = useState(0);
  const addToBasket = () => setBasketCount((prev) => prev + 1);

  return (
    <basketContext.Provider value={{ basketCount, addToBasket }}>
      {children}
    </basketContext.Provider>
  )
}

export const useBasket = () => {
  const context = useContext(basketContext);
  if (!context) {
    throw new Error("useBasket must be used within BasketProvider");
  }
  
  return context;
}

