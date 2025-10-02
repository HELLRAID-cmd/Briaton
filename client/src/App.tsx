import "./styles/_reboot.scss";
import "./styles/_container.scss";
import "./styles/_variables.scss";
import "./styles/_fonts.scss";
import "./styles/_btn.scss";
import "./Components/Antd/Antd.scss";

import { Header } from "./Components/Header/Header";
import { Breadcrumbs } from "./Components/Breadcrumbs/Breadcrumbs";

function App() {
  return (
    <>
      <Header />
      <Breadcrumbs />
    </>
  );
}

export default App;
