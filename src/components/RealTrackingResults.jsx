import React, { useEffect, useState } from "react";

// for multi-lang support
import { userTranslation, useTranslation } from "react-i18next";

//recoil library
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { langState } from "../js/state-information";

import { useLocation } from "react-router-dom";

import Card from "./parts/Card";
import Header from "./parts/Header";

// import css
import "../css/trackingResults.css";

export default function RealTrackingResults({ match }) {
  console.log("TrackingResults");

  // for multi-lang support
  const [t, i18n] = useTranslation();
  const [lang, setLang] = useRecoilState(langState);

  // loading status, 0= loading, 1=ready, 2=loading error
  const [status, setStatus] = useState(0);

  // user name and phone
  const location = useLocation();
  const userName = location.state.userName;

  //data
  const endpoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  const [cards, setCards] = useState([]);

  // todo replace fake db to real
  useEffect(() => {
    const getData = async () => {
      try {
        // Fetch whole data
        const response = await fetch(endpoint, { mode: "cors" });
        const data = await response.json();

        setCards(
          data
            .filter(
              (parcel) =>
                removeSpaceAndlower(parcel.user_name) ===
                removeSpaceAndlower(userName)
            )
            .map((parcel) => <Card key={parcel.id} parcelData={parcel} />)
        );

        setStatus(1);
      } catch {
        // Set status data loading error(2)
        setStatus(2);
      }
    };

    getData();
  }, []);

  // for multi-lang support
  useEffect(() => {
    console.log(lang);
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  // remove space and lower case for string
  function removeSpaceAndlower(str) {
    return str.replace(/\s+/g, "").toLowerCase();
  }

  return (
    <div>
      <Header />

      <div className="body_wrapper">
        <header className="introduction">
          <div className="header_textbox">
            <h2>
              {t("Welcome")},
              <br />
              {userName}
            </h2>
          </div>
        </header>

        <section className="content">
          <div className="content-wrapper">
            {status === 0 ? (
              <div className="display-status">Loading...</div>
            ) : null}
            {status === 1 ? (
              cards.length === 0 ? (
                <div className="display-status">{t("No result")}</div>
              ) : (
                cards
              )
            ) : null}
            {status === 2 ? (
              <div className="display-status">
                Data loading error. Please try again later.
              </div>
            ) : null}
          </div>
        </section>
      </div>
    </div>
  );
}
