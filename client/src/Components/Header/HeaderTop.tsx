import { useState } from "react";
import { HeaderCatalog } from "./HeaderCatalog";
import { HeaderLocation } from "./HeaderLocation";
import type { HeaderBasketProps, HeaderLocationProps } from "../Types/Types";
import { useBasket } from "../BasketContext/BasketContext";
import { CardBasket } from "../Card/Card";

type HeaderTopProps = HeaderBasketProps & HeaderLocationProps;

export const HeaderTop = ({
  isOpenBasket,
  onBasketClose,
  city,
  isOpenLocation,
  onLocationClose,
  onCityChange,
}: HeaderTopProps) => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const { basketCount, basketItems, removeFromBasket } = useBasket();

  const handleCatalogOpen = () => setIsCatalogOpen(true);
  const handleCatalogClose = () => setIsCatalogOpen(false);

  return (
    <>
      <div className="header__top">
        <a href="#" className="header__logo-link">
          <svg
            className="header__logo"
            width="140"
            height="26"
            aria-hidden="true"
          >
            <use href="images/sprite.svg#icon-logo"></use>
          </svg>
        </a>
        <button
          className="header__catalog-btn"
          id="catalog-btn"
          onClick={handleCatalogOpen}
          type="button"
        >
          <svg
            className="header__logo"
            width="24"
            height="24"
            aria-hidden="true"
          >
            <use href="images/sprite.svg#icon-menu"></use>
          </svg>
          <span className="header__catalog-text">Каталог</span>
        </button>

        <HeaderCatalog open={isCatalogOpen} onClose={handleCatalogClose} />

        <HeaderLocation
          city={city}
          isOpenLocation={isOpenLocation}
          onLocationClose={onLocationClose}
          onCityChange={onCityChange}
        />

        <ul className="header__user-list">
          <li className="header__user-item">
            <button
              className="header__user-btn"
              id="header-user-btn"
              type="button"
              onClick={onBasketClose}
            >
              <span className="header__user-text">Корзина</span>
              <svg
                className="header__user-icon"
                width="24"
                height="24"
                aria-hidden="true"
              >
                <use href="images/sprite.svg#icon-basket"></use>
              </svg>
              <span className="header__user-count">{basketCount}</span>
            </button>

            <div
              className={`header__basket basket ${
                isOpenBasket ? "basket--active" : ""
              }`}
            >
              <ul className="basket__list basket--scroll" id="basket-list">
                {basketItems.length === 0 ? (
                  <div className="basket__empty-block basket__empty-block--active">
                    Корзина пока пуста
                  </div>
                ) : (
                  <>
                    {basketItems.map((item) => (
                      <CardBasket
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        delCard={removeFromBasket}
                      />
                    ))}
                  </>
                )}
              </ul>
              {basketItems.length >= 1 ? (
                <a className={`basket__link btn ${basketCount ? "basket__link--active" : ""}`} href="#">
                  Перейти к оформлению
                </a>
              ) : null}
            </div>
          </li>
          <li className="header__user-item">
            <button className="header__user-btn" type="button">
              <span className="header__user-text">Войти</span>
              <svg
                className="header__user-icon"
                width="24"
                height="24"
                aria-hidden="true"
              >
                <use href="images/sprite.svg#icon-user"></use>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
