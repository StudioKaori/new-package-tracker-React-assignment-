import React, { useEffect, useState } from "react";

// Router
import { Link } from "react-router-dom";

// for multi-lang support
import { userTranslation, useTranslation } from "react-i18next";

//recoil library
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { langState } from "../js/state-information";

import Header from "./parts/Header";

// import css
import "../css/login.css";

export default function Login() {
  console.log("Login");

  // for multi-lang support
  const [t, i18n] = useTranslation();
  const [lang, setLang] = useRecoilState(langState);

  // for multi-lang support
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  // user infor
  const [userName, setUserName] = useState("");

  // set lang to lang, and username to state
  const to = {
    pathname: `/results/${lang}`,
    state: { userName: userName },
  };

  return (
    <div>
      <Header />

      <div className="body_wrapper">
        <header className="introduction">
          <div className="header_textbox">
            <h2>{t("Package Tracker")}</h2>

            <div className="seachbox">
              <label>{t("Name")}</label>
              <input
                placeholder={t("Input your name for search")}
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
              />
              <Link to={to}>
                <span>
                  <i className="fas fa-search" title={t("Search")}></i>
                </span>
              </Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
