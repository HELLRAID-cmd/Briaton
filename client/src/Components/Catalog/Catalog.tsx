import "./Catalog.scss";
import "./Catalog-form.scss";
import "./Catalog-Custom-checkbox.scss";
import "./Catalog-Custom-input.scss";
import "./Catalog-Custom-radio.scss";
import { useEffect, useState } from "react";
import type { CheckProductProps, ProductCard } from "../Types/Types";
import { Card } from "../Card/Card";
import TypeTranslations from "../Types/TypesTranslate";

export const Catalog = () => {
  const [checked, setChecked] = useState("all-item");
  const [products, setProducts] = useState<ProductCard[]>([]);
  const [countCheck, setCountCheck] = useState<CheckProductProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const indexOfLast = currentPage * pageSize;
  const indexOfFirst = indexOfLast - pageSize;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);

  useEffect(() => {
    fetch("http://localhost:3001/lamps")
      .then((res) => res.json())
      .then((data: ProductCard[]) => {
        setProducts(data);

        const allTypes = Array.from(data.flatMap((p) => p.type ?? []));

        const typeCounts: Record<string, number> = {};
        allTypes.forEach((t) => {
          if (t) {
            typeCounts[t] = (typeCounts[t] || 0) + 1;
          }
        });

        // Сортировка по умолчанию
        const sorted = [...data].sort((a, b) => a.price.new - b.price.new);
        setProducts(sorted);

        const checkData: CheckProductProps[] = Object.entries(typeCounts).map(
          ([type, count], id) => ({
            id,
            name: type,
            type: [type],
            count,
          })
        );

        setCountCheck(checkData);
      })
      .catch((err) => console.error("Ошибка:", err));
  }, []);

  // Сортировка по минимальной цене
  const sortClickMin = () => {
    const sorted = [...products].sort((a, b) => a.price.new - b.price.new);
    setProducts(sorted);
  };

  // Сортировка по максимальной цене
  const sortClickMax = () => {
    const sorted = [...currentProducts].sort((a, b) => b.price.new - a.price.new);
    setProducts(sorted);
  };

  // Сортировка по рейтингу
  const sortClickRating = () => {
    const sorted = [...currentProducts].sort((a, b) => b.rating - a.rating);
    setProducts(sorted);
  };

  return (
    <section className="catalog">
      <div className="container">
        <h1 className="catalog__title">Светильники</h1>
        <div className="catalog__wrapper">
          <form action="#!" method="get" className="catalog-form" id="form">
            <button className="catalog-form__reset" type="reset">
              <svg width="24" height="24" aria-hidden="true">
                <use href="images/sprite.svg#icon-filter"></use>
              </svg>
              <span className="catalog-form__reset-text">Сбросить фильтры</span>
            </button>
            <fieldset className="catalog-form__fieldset">
              <legend className="catalog-form__legend">Светильники</legend>
              <ul className="catalog-form__list-col">
                {countCheck.map((item) => (
                  <li className="catalog-form__item-col" key={item.type[0]}>
                    <div className="custom-checkbox custom-checkbox--pendant">
                      <input
                        className="visually-hidden custom-checkbox__field"
                        id={`${item.id}`}
                        type="checkbox"
                        name="type"
                        value="pendant"
                      />
                      <label
                        className="custom-checkbox__label"
                        htmlFor={`${item.id}`}
                      >
                        <span className="custom-checkbox__name">
                          {TypeTranslations[item.name] || item.name}
                        </span>
                        <svg
                          className="custom-checkbox__icon"
                          width="10"
                          height="10"
                          aria-hidden="true"
                        >
                          <use href="images/sprite.svg#icon-check"></use>
                        </svg>
                        <span className="custom-checkbox__count">
                          {item.count}
                        </span>
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </fieldset>
            <fieldset className="catalog-form__fieldset">
              <legend className="catalog-form__legend">Статус</legend>
              <ul className="catalog-form__list-row">
                <li className="catalog-form__item-row">
                  <div className="custom-radio">
                    <input
                      className="visually-hidden custom-radio__field"
                      id="instock"
                      type="radio"
                      name="status"
                      value="instock"
                      checked={checked === "instock"}
                      onChange={(e) => setChecked(e.target.value)}
                    />
                    <label className="custom-radio__label" htmlFor="instock">
                      <span className="custom-radio__toggle"></span>
                      <span className="custom-radio__text">В наличии</span>
                    </label>
                  </div>
                </li>
                <li className="catalog-form__item-row">
                  <div className="custom-radio">
                    <input
                      className="visually-hidden custom-radio__field"
                      id="all-item"
                      type="radio"
                      name="status"
                      value="all-item"
                      checked={checked === "all-item"}
                      onChange={(e) => setChecked(e.target.value)}
                    />
                    <label className="custom-radio__label" htmlFor="all-item">
                      <span className="custom-radio__toggle"></span>
                      <span className="custom-radio__text">Все</span>
                    </label>
                  </div>
                </li>
              </ul>
            </fieldset>
          </form>
          <div className="catalog__products">
            <div className="catalog__sort">
              <p className="catalog__sort-text">Сортировать по:</p>
              <select
                className="catalog__sort-select"
                name="sort"
                onChange={(e) => {
                  const value = e.target.value;

                  if (value === "price-max") {
                    sortClickMax();
                  } else if (value === "rating-max") {
                    sortClickRating();
                  } else {
                    sortClickMin();
                  }
                }}
              >
                <option value="price-min">Сначала дешёвые</option>
                <option value="price-max">Сначала дорогие</option>
                <option value="rating-max">Сначала популярные</option>
              </select>
            </div>
            <ul className="catalog__list" id="catalog-list">
              {currentProducts.map((item) => (
                <Card key={item.id} {...item} />
              ))}
            </ul>

            <div className="catalog__pagination">
              {Array.from(
                { length: Math.ceil(products.length / pageSize) },
                (_, i) => (
                  <button
                    key={i}
                    className={`catalog__pagination-btn ${
                      i + 1 === currentPage ? "active" : ""
                    }`}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
