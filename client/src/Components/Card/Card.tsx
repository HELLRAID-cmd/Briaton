import { useBasket } from "../BasketContext/BasketContext";
import type { ProductCard, ProductCardBasket } from "../Types/Types";
import "./Card-product.scss";
import "./Card-tooltip.scss";

export const Card = ({
  id,
  image,
  name,
  price,
  info,
  availability,
  goodsOfDay,
  className,
}: ProductCard) => {
  const { addToBasket } = useBasket();

  const handleClick = () => {
    const item =  {id, name, price, image}
    addToBasket(item);
  }

  return (
    <li className="catalog__item" key={id}>
      <div
        className={`product-card ${className ?? ""}`}
        data-goods-of-day={goodsOfDay}
      >
        <div className="product-card__visual">
          <img
            className="product-card__img"
            src={image}
            height="436"
            width="290"
            alt="Изображение товара"
          />
          <div className="product-card__more">
            <button
              type="button"
              onClick={handleClick}
              className="product-card__link button--add-basket btn btn--icon"
            >
              <span className="btn__text">В корзину</span>
              <svg width="24" height="24" aria-hidden="true">
                <use href="images/sprite.svg#icon-basket"></use>
              </svg>
            </button>
            <button
              className="product-card__link btn btn--secondary"
              type="button"
            >
              Подробнее
            </button>
            <p className="product-card__info-text">{info}</p>
          </div>
        </div>
        <div className="product-card__info">
          <h2 className="product-card__title">{name}</h2>
          <span className="product-card__old">
            <span className="product-card__old-number">
              {price.old.toLocaleString("ru-Ru")}
            </span>
            <span className="product-card__old-add">₽</span>
          </span>
          <span className="product-card__price">
            <span className="product-card__price-number">
              {price.new.toLocaleString("ru-Ru")}
            </span>
            <span className="product-card__price-add">₽</span>
          </span>
          <div className="product-card__tooltip tooltip">
            <button
              id="tooltip-btn"
              className="tooltip__btn"
              aria-label="Показать подсказку"
            >
              <svg
                className="tooltip__icon"
                width="5"
                height="10"
                aria-hidden="true"
              >
                <use href="images/sprite.svg#icon-i"></use>
              </svg>
            </button>
            <div className="tooltip__content">
              <span className="tooltip__text">Наличие товара по городам:</span>
              <ul className="tooltip__list">
                <li className="tooltip__item">
                  <span className="tooltip__text">
                    Москва:{" "}
                    <span className="tooltip__count">
                      {availability.moscow}
                    </span>
                  </span>
                </li>
                <li className="tooltip__item">
                  <span className="tooltip__text">
                    Оренбург:{" "}
                    <span className="tooltip__count">
                      {availability.orenburg}
                    </span>
                  </span>
                </li>
                <li className="tooltip__item">
                  <span className="tooltip__text">
                    Санкт-Петербург:{" "}
                    <span className="tooltip__count">
                      {availability.saintPetersburg}
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export const CardBasket = ({ id, name, price, image, delCard }: ProductCardBasket) => {
  return (
    <li className="basket__item" key={id}>
      <div className="basket__img">
        <img src={image} alt="Фотография товара" height="60" width="60" />
      </div>
      <span className="basket__name">{name}</span>
      <span className="basket__price">
        {price.new.toLocaleString("ru-Ru") ?? "-"} руб
      </span>
      <button className="basket__item-close" onClick={() => delCard(id)} type="button">
        <svg
          className="main-menu__icon main-menu__icon--basket"
          width="24"
          height="24"
          aria-hidden="true"
        >
          <use href="images/sprite.svg#icon-close"></use>
        </svg>
      </button>
    </li>
  );
};
