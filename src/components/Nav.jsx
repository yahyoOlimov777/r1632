import React from "react";
import { useTranslation } from "react-i18next";
const Nav = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <nav>
      <div className="container">
        <div className="n_wrapper">
          <img src="/vite.svg" alt="" />
          {localStorage.getItem("i18nextLng") == "uz" ? (
            <img src="/img1.png" />
          ) : localStorage.getItem("i18nextLng") == "en" ? (
            <img src="/img2.png" />
          ) : localStorage.getItem("i18nextLng") == "ru" ? (
            <img src="/img3.png" />
          ) : null}
          <div className="til">
            <button onClick={() => changeLanguage("uz")}>Ozbek</button>
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("ru")}>Русский</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
