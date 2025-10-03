import { useEffect, useState } from "react";
import "./DayProducts.scss";
import type { ProductCard } from "../Types/Types";
import { Card } from "../Card/Card";

export const DayProduct = () => {
  const [products, setProducts] = useState<ProductCard[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/lamps")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Ошибка:", err));
  }, []);

  return (
    <section className="day-products">
      <div className="container">
        <div className="day-products__top">
          <h2 className="day-products__title">Товары дня</h2>

          {/* Навигация для слайдера */}
          <div className="day-products__navigation">
            <button
              className="day-products__navigation-btn day-products__navigation-btn--prev swiper-button-next"
              disabled
              type="button"
            >
              <svg width="41" height="9" aria-hidden="true">
                <use href="images/sprite.svg#icon-arrow-prev"></use>
              </svg>
            </button>
            <button
              className="day-products__navigation-btn day-products__navigation-btn--next swiper-button-prev"
              type="button"
            >
              <svg width="41" height="9" aria-hidden="true">
                <use href="images/sprite.svg#icon-arrow-next"></use>
              </svg>
            </button>
          </div>
        </div>

        {/* <!-- Slider main container --> */}
        <div className="swiper">
          {/* <!-- Additional required wrapper --> */}
          <div className="swiper-wrapper">
            {products
              .filter((item) => item.goodsOfDay)
              .map((item) => (
                <Card key={item.id} {...item} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
