import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "@components/layout";

const App = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const closeAll = () => {
    setMenuIsActive(false);
  }

  return (
    <div className="app" onClick={closeAll}>
      <Header
        menuIsActive={menuIsActive}
        setMenuIsActive={setMenuIsActive}
      />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;