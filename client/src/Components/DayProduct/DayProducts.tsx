import { useEffect, useState } from "react";
import "./DayProducts.scss";
import type { ProductCard } from "../Types/Types";
import { Card } from "../Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          navigation={{
            prevEl: ".day-products__navigation-btn--prev",
            nextEl: ".day-products__navigation-btn--next",
          }}
        >
          {products
            .filter((item) => item.goodsOfDay)
            .map((item) => (
              <SwiperSlide key={item.id}>
                <Card className="product-card--small" {...item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};
