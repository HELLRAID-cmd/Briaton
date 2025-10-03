import "./styles/_reboot.scss";
import "./styles/_container.scss";
import "./styles/_variables.scss";
import "./styles/_visually-hidden.scss";
import "./styles/_fonts.scss";
import "./styles/_btn.scss";
import "./Components/Antd/Antd.scss";

import { Header } from "./Components/Header/Header";
import { Breadcrumbs } from "./Components/Breadcrumbs/Breadcrumbs";
import { Catalog } from "./Components/Catalog/Catalog";
import { DayProduct } from "./Components/DayProduct/DayProducts";
import { Desc } from "./Components/Desc/Desc";

function App() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Catalog />
      <DayProduct />
      <Desc />
    </>
  );
}

export default App;
