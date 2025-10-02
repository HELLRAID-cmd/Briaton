import "./Breadcrumbs.scss"

export const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link" href="#">
              Главная
            </a>
          </li>
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link" href="#">
              Каталог
            </a>
          </li>
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link" href="#">
              Светильники
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
