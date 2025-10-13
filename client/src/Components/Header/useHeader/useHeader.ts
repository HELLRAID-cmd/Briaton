import { useState } from "react";

export const useHeader = () => {
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Оренбург");

  // Переключения показа корзины
  const handleBasketToggle = () => {
    setIsBasketOpen((prev) => !prev);
  };

  // Переключения показа городов
  const handleLocationToggle = () => {
    setIsLocationOpen((prev) => !prev);
  };

  // Переключения городов
  const handleLocationCity = (city: string) => {
    setSelectedCity(city);
    setIsLocationOpen(false);
  };

  return {
    isBasketOpen,
    isLocationOpen,
    selectedCity,
    handleBasketToggle,
    handleLocationToggle,
    handleLocationCity,
  }
};
