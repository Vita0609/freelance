import { useState } from "react";
import sun from "./sun.svg";
import moon from "./moon.svg";
import "./style.css";

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useState("Light");

  const toggLeDarkMode = () => {
    setDarkMode("dark");
  };

  return (
    <button className="dark-mode-btn" onClick={toggLeDarkMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default BtnDarkMode;
