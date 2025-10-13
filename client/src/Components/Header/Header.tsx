import { HeaderTop } from "./HeaderTop";
import { HeaderBottom } from "./HeaderBottom";

import "./Header.scss";
import "./HeaderLocation.scss";
import "./HeaderMainMenu.scss";
import "./HeaderBasket.scss";
import { useHeader } from "./useHeader/useHeader";

export const Header = () => {
  const {
    isBasketOpen,
    isLocationOpen,
    selectedCity,
    handleBasketToggle,
    handleLocationToggle,
    handleLocationCity,
  } = useHeader();

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
