import "./Catalog.scss"
import "./Catalog-form.scss"
import "./Catalog-Custom-checkbox.scss"
import "./Catalog-Custom-input.scss"
import "./Catalog-Custom-radio.scss"
import { useState } from "react"

export const Catalog = () => {
  const [checked, setChecked] = useState('all-item');
  
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
              <li className="catalog-form__item-col">
                <div className="custom-checkbox custom-checkbox--pendant">
                  <input className="visually-hidden custom-checkbox__field" id="pendant" type="checkbox" name="type" value="pendant"/>
                  <label className="custom-checkbox__label" htmlFor="pendant">
                      <span className="custom-checkbox__name">
                        Подвесные
                      </span>
                    <svg className="custom-checkbox__icon" width="10" height="10" aria-hidden="true">
                      <use href="images/sprite.svg#icon-check"></use>
                    </svg>
                    <span className="custom-checkbox__count">0</span>
                  </label>
                </div>
              </li>
              <li className="catalog-form__item-col">
                <div className="custom-checkbox custom-checkbox--ceiling">
                  <input className="visually-hidden custom-checkbox__field" id="ceiling" type="checkbox" name="type" value="ceiling"/>
                  <label className="custom-checkbox__label" htmlFor="ceiling">
                      <span className="custom-checkbox__name">
                        Потолочные
                      </span>
                    <svg className="custom-checkbox__icon" width="10" height="10" aria-hidden="true">
                      <use href="images/sprite.svg#icon-check"></use>
                    </svg>
                    <span className="custom-checkbox__count">0</span>
                  </label>
                </div>
              </li>
              <li className="catalog-form__item-col">
                <div className="custom-checkbox custom-checkbox--overhead">
                  <input className="visually-hidden custom-checkbox__field" id="overhead" type="checkbox" name="type" value="overhead"/>
                  <label className="custom-checkbox__label" htmlFor="overhead">
                      <span className="custom-checkbox__name">
                        Накладные
                      </span>
                    <svg className="custom-checkbox__icon" width="10" height="10" aria-hidden="true">
                      <use href="images/sprite.svg#icon-check"></use>
                    </svg>
                    <span className="custom-checkbox__count">0</span>
                  </label>
                </div>
              </li>
              <li className="catalog-form__item-col">
                <div className="custom-checkbox custom-checkbox--point">
                  <input className="visually-hidden custom-checkbox__field" id="point" type="checkbox" name="type" value="point"/>
                  <label className="custom-checkbox__label" htmlFor="point">
                      <span className="custom-checkbox__name">
                        Точечные
                      </span>
                    <svg className="custom-checkbox__icon" width="10" height="10" aria-hidden="true">
                      <use href="images/sprite.svg#icon-check"></use>
                    </svg>
                    <span className="custom-checkbox__count">0</span>
                  </label>
                </div>
              </li>
              <li className="catalog-form__item-col">
                <div className="custom-checkbox custom-checkbox--nightlights">
                  <input className="visually-hidden custom-checkbox__field" id="nightlights" type="checkbox"
                         name="type" value="nightlights"/>
                  <label className="custom-checkbox__label" htmlFor="nightlights">
                      <span className="custom-checkbox__name">
                        Ночники
                      </span>
                    <svg className="custom-checkbox__icon" width="10" height="10" aria-hidden="true">
                      <use href="images/sprite.svg#icon-check"></use>
                    </svg>
                    <span className="custom-checkbox__count">0</span>
                  </label>
                </div>
              </li>
            </ul>
          </fieldset>
          <fieldset className="catalog-form__fieldset">
            <legend className="catalog-form__legend">Статус</legend>
            <ul className="catalog-form__list-row">
              <li className="catalog-form__item-row">
                <div className="custom-radio">
                  <input className="visually-hidden custom-radio__field" id="instock" type="radio" name="status"
                         value="instock" checked={checked === "instock"} onChange={(e) => setChecked(e.target.value)}/>
                  <label className="custom-radio__label" htmlFor="instock">
                    <span className="custom-radio__toggle"></span>
                    <span className="custom-radio__text">В наличии</span>
                  </label>
                </div>
              </li>
              <li className="catalog-form__item-row">
                <div className="custom-radio">
                  <input className="visually-hidden custom-radio__field" id="all-item" type="radio" name="status"
                         value="all-item" checked={checked === "all-item"} onChange={(e) => setChecked(e.target.value)}/>
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
            <select className="catalog__sort-select" name="sort">
              <option value="price-min">Сначала дешёвые</option>
              <option value="price-max">Сначала дорогие</option>
              <option value="rating-max">Сначала популярные</option>
            </select>
          </div>
          <ul className="catalog__list" id="catalog-list">
            <li className="loader"></li>
          </ul>
          
          <ul className="catalog__pagination">

          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}