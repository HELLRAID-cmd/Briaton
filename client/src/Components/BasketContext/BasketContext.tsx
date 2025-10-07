import { createContext, useState, useContext } from "react";

type BasketItem = {
  id: number;
  name: string;
  price: {
    new: number;
  };
  image: string;
};

type BasketContextType = {
  basketCount: number;
  addToBasket: (item: BasketItem) => void;
  clearBasket: () => void;
  basketItems: BasketItem[];
  removeFromBasket: (id: number) => void;
};

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider = ({ children }: { children: React.ReactNode }) => {
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);
  
  const addToBasket = (item: BasketItem) => {
    setBasketItems((prev) => [...prev, item]);
  };

  const removeFromBasket = (id:number) => {
    setBasketItems((prev) => prev.filter(item => item.id !== id));
  }

  const clearBasket = () => setBasketItems([]);
  const basketCount = basketItems.length;

  return (
    <BasketContext.Provider value={{ basketCount, basketItems, addToBasket, clearBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within BasketProvider");
  }

  return context;
};
