import React, { useState} from 'react'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './Header.css'

const Header = () => {

  const { t, i18n } = useTranslation();

  const selectLanguage = lang => {
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };

  return (
    <header className='main-header'>
    <div className="container">
      <div className="header-layout">
        <Link to="/">
          <img className='logo' src={Logo}  alt="logo" />
        </Link> 
        <div className="header-actions">
          <button
            className={localStorage.language === "kz" ? "languageActive" : "language"}
            style={{ marginRight: "30px", fontWeight: "600" }}
            onClick={() => {
              selectLanguage("kz");
            }}>
            ҚАЗ
          </button>

          <button
            className={localStorage.language === "ru" ? "languageActive" : "language"}
            style={{ marginRight: "40px", fontWeight: "600" }}
            onClick={() => {
              selectLanguage("ru");
            }}>
            РУ
          </button>

          <Link to="/" ><button className='enter-button'>
            {t("Войти")}
          </button>
         </Link>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header