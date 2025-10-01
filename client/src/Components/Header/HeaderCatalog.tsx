import { Drawer } from 'antd';

type HeaderCatalogProps = {
  open: boolean;
  onClose: () => void;
};

export const HeaderCatalog = ({ open, onClose }: HeaderCatalogProps) => {
  return (
    <div
      className={`header__catalog main-menu ${open ? "main-menu--active" : ""}`}
    >
      <Drawer
        title="Категории товаров"
        closable={true}
        placement='left'
        onClose={onClose}
        open={open}
      >
        <div className="main-menu__wrapper">
          <ul className="main-menu__list">
            <li className="main-menu__item">
              <a className="main-menu__link" href="#">
                Люстры
              </a>
            </li>
            <li className="main-menu__item">
              <a className="main-menu__link main-menu__link--active" href="#">
                Светильники
              </a>
            </li>
            <li className="main-menu__item">
              <a className="main-menu__link" href="#">
                Бра и подсветки
              </a>
            </li>
            <li className="main-menu__item">
              <a className="main-menu__link" href="#">
                Споты
              </a>
            </li>
            <li className="main-menu__item">
              <a className="main-menu__link" href="#">
                Настольные лампы
              </a>
            </li>
            <li className="main-menu__item">
              <a className="main-menu__link" href="#">
                Торшеры
              </a>
            </li>
            <li className="main-menu__item">
              <a className="main-menu__link" href="#">
                Трековые системы
              </a>
            </li>
            <li className="main-menu__item">
              <a className="main-menu__link" href="#">
                Уличное освещение
              </a>
            </li>
            <li className="main-menu__item">
              <a className="main-menu__link" href="#">
                Офисное освещение
              </a>
            </li>
            <li className="main-menu__item">
              <a className="main-menu__link" href="#">
                Лампочки
              </a>
            </li>
            <li className="main-menu__item">
              <a className="main-menu__link" href="#">
                Светодиоидная подсветка
              </a>
            </li>
            <li className="main-menu__item">
              <a className="main-menu__link" href="#">
                Предметы инерьера
              </a>
            </li>
            <li className="main-menu__item">
              <a className="main-menu__link" href="#">
                Электротовары
              </a>
            </li>
            <li className="main-menu__item">
              <a className="main-menu__link" href="#">
                Комплектующие
              </a>
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
};
