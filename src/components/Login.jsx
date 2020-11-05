import React, { useEffect } from "react";

// for multi-lang support
import { userTranslation, useTranslation } from "react-i18next";

//recoil library
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { langState } from "../js/state-information";

import Header from "./parts/Header";

export default function Login() {
  // for multi-lang support
  const [t, i18n] = useTranslation();
  const [lang, setLang] = useRecoilState(langState);

  useEffect(() => {
    console.log(lang);
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <div>
      <Header />
      <h1>Track home</h1>
      <h1>{t("Tracking result")}</h1>
    </div>
  );
}
