import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header/header.component";
import { Main } from "./components/Main/main.component";
import { Setting } from "./components/Setting/setting.component";

function App() {
  const [showSetting, setShowSetting] = useState(false);

  const todoClickHandle = () => {
    setShowSetting(false);
  };

  const settingClickHandle = (event) => {
    event.preventDefault();
    setShowSetting(true);
  };

  return (
    <div className="app-container">
      {showSetting ? (
        <Setting />
      ) : (
        <>
          <Header />
          <Main />
        </>
      )}

      <div className="footer-nav">
        <a className="nav-link" href="/" onClick={todoClickHandle}>
          Todo
        </a>
        <a className="nav-link" href="/" onClick={settingClickHandle}>
          Setting
        </a>
      </div>
    </div>
  );
}

export default App;
