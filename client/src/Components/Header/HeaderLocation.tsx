import type { HeaderLocationProps } from "../Types/Types";

export const HeaderLocation = ({city, isOpenLocation, onLocationClose, onCityChange}: HeaderLocationProps) => {
  const cities = ["Москва", "Оренбург", "Санкт-Петербург"];
  
  return (
    <div className="header__location location">
          <svg className="location__icon" width="24" height="24" aria-hidden="true">
            <use href="images/sprite.svg#icon-location"></use>
          </svg>
          <span className="location__text">Ваш город:</span>
          <button className={`location__city ${isOpenLocation ? "location__city--active" : ""}`} id="location-city" onClick={onLocationClose} type="button">
            <span className="location__city-name">{city}</span>
            <svg className="location__arrow" width="9" height="6" aria-hidden="true">
              <use href="images/sprite.svg#icon-arrow-bottom"></use>
            </svg>
          </button>
          <ul className="location__sublist ">
            {cities.map((cityName) => (
              <li className="location__subitem" key={cityName}>
                <button className="location__sublink" type="button" onClick={() => onCityChange(cityName)}>{cityName}</button>
              </li>
            ))}
          </ul>
        </div>
  )
}