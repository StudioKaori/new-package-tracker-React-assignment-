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
    console.log(lang);
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  // user name
  const [query, setQuery] = useState("");

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
                placeholder={t("Name")}
                value={query}
                // when the value in search box changed, update to new value by setQuery
                onChange={(event) => setQuery(event.target.value)}
              />
              {/* add query to the url */}
              <Link to={`/results/${query}`}>
                <span>
                  <i class="fas fa-search" title={t("Search")}></i>
                </span>
              </Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
