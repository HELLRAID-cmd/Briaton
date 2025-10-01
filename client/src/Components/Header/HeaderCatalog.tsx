import type { HeaderProps } from "../Types/Types"

export const HeaderCatalog = ({ isOpen ,onClose }: HeaderProps) => {
  return (
    <div className={`header__catalog main-menu ${isOpen ?"main-menu--active" : ""}`}>
      <div className="main-menu__wrapper">
        <div className="main-menu__heading">
          <h2 className="main-menu__title">Категории товаров</h2>
          <button className="main-menu__close" onClick={onClose} id="main-menu-btn-close" type="button">
            <svg className="main-menu__icon" width="24" height="24" aria-hidden="true">
              <use href="images/sprite.svg#icon-close"></use>
            </svg>
          </button>
        </div>
        <ul className="main-menu__list">
          <li className="main-menu__item">
            <a className="main-menu__link" href="#">Люстры</a>
          </li>
          <li className="main-menu__item">
            <a className="main-menu__link main-menu__link--active" href="#">Светильники</a>
          </li>
          <li className="main-menu__item">
            <a className="main-menu__link" href="#">Бра и подсветки</a>
          </li>
          <li className="main-menu__item">
            <a className="main-menu__link" href="#">Споты</a>
          </li>
          <li className="main-menu__item">
            <a className="main-menu__link" href="#">Настольные лампы</a>
          </li>
          <li className="main-menu__item">
            <a className="main-menu__link" href="#">Торшеры</a>
          </li>
          <li className="main-menu__item">
            <a className="main-menu__link" href="#">Трековые системы</a>
          </li>
          <li className="main-menu__item">
            <a className="main-menu__link" href="#">Уличное освещение</a>
          </li>
          <li className="main-menu__item">
            <a className="main-menu__link" href="#">Офисное освещение</a>
          </li>
          <li className="main-menu__item">
            <a className="main-menu__link" href="#">Лампочки</a>
          </li>
          <li className="main-menu__item">
            <a className="main-menu__link" href="#">Светодиоидная подсветка</a>
          </li>
          <li className="main-menu__item">
            <a className="main-menu__link" href="#">Предметы инерьера</a>
          </li>
          <li className="main-menu__item">
            <a className="main-menu__link" href="#">Электротовары</a>
          </li>
          <li className="main-menu__item">
            <a className="main-menu__link" href="#">Комплектующие</a>
          </li>
        </ul>
      </div>
    </div>
  )
}