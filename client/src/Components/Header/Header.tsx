import { HeaderTop } from "./HeaderTop";
import { HeaderBottom } from "./HeaderBottom";
import { useState } from "react";

import "./Header.scss";
import "./HeaderLocation.scss";
import "./HeaderMainMenu.scss";
import "./HeaderBasket.scss";

export const Header = () => {
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

  return (
    <header className="header">
      <div className="container">
        <HeaderTop
          isOpenLocation={isLocationOpen}
          onLocationClose={handleLocationToggle}
          isOpenBasket={isBasketOpen}
          onBasketClose={handleBasketToggle}
          city={selectedCity}
          onCityChange={handleLocationCity}
        />
        <HeaderBottom />
      </div>
    </header>
  );
};
