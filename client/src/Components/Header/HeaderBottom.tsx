export const HeaderBottom = () => {
  return (
    <div className="header__bottom">
      <ul className="header__nav-list">
        <li className="header__nav-item">
          <a className="header__nav-link" href="#">Отраслевые решения</a>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="#">Портфолио</a>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="#">Клиентам</a>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="#">Партнерам</a>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="#">Контакты</a>
        </li>
      </ul>
      <div className="header__contacts">
        <a href="tel:+78002220037" className="header__phone">+7 (800) 222-00-37</a>
        <button className="header__btn btn" type="button">Обратный звонок</button>
      </div>
    </div>
  )
}