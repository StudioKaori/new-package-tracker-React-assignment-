import React, { useEffect, useState } from "react";

// for multi-lang support
import { userTranslation, useTranslation } from "react-i18next";

//recoil library
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { langState } from "../js/state-information";

import { useLocation } from "react-router-dom";

import Card from "./parts/Card";
import Header from "./parts/Header";
// todo replace fake db to real
import Data from "../PackageTrackingData.json";

// import css
import "../css/trackingResults.css";

export default function TrackingResults({ match }) {
  console.log("TrackingResults");

  // for multi-lang support
  const [t, i18n] = useTranslation();
  const [lang, setLang] = useRecoilState(langState);

  // todo set0 when fake db is replaced
  // loading status, 0= loading, 1=ready, 2=loading error
  const [status, setStatus] = useState(1);

  // user name and phone
  const location = useLocation();
  console.log("location :", location);

  const userName = location.state.userName;

  // todo remove param 'data' from useState later, useState(), param should be empty
  const [information, setInformation] = useState(Data);
  //const endpoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  // todo change to useState([]), after replace fake DB
  //inside of useeffect, setcard.
  const [cards, setCards] = useState(
    information
      .filter(
        (parcel) =>
          removeSpaceAndlower(parcel.user_name) ===
          removeSpaceAndlower(userName)
      )
      .map((parcel) => <Card key={parcel.id} parcelData={parcel} />)
  );

  // todo replace fake db to real
  /*
  useEffect(() => {
    const getData = async () => {
      try {
        // Fetch whole data
        const response = await fetch(endpoint, { mode: 'cors' });
        const data = await response.json();

        setInformation(data);
        console.log('fetch data, ok');
        console.log('data :', data);
      } catch {
        // Set status data loading error(2)
        setStatus(2);
        console.log('fetch data, no');
      }
    };

    getData();
  }, []);

  */

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
            {/* cards */}
            {/* if status is ready(1), display multiple cards.
      Otherwise display error.       */}

            {status === 0 ? <p>Loading...</p> : null}
            {status === 1 ? (
              cards.length === 0 ? (
                <div className="no-result">{t("No result")}</div>
              ) : (
                cards
              )
            ) : null}
            {status === 2 ? (
              <p>Data loading error. Please try again later.</p>
            ) : null}
          </div>
        </section>
      </div>
    </div>
  );
}
