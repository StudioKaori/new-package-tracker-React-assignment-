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

export default function TrackingResults({ match }) {
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
  const [data, setData] = useState([]);
  const [cards, setCards] = useState([]);

  // fetch data
  useEffect(() => {
    const getData = async () => {
      try {
        // Fetch whole data
        const response = await fetch(endpoint, { mode: "cors" });
        const liveData = await response.json();

        const filteredData = liveData.filter(
          (parcel) =>
            removeSpaceAndlower(parcel.user_name) ===
            removeSpaceAndlower(userName)
        );
        setData(filteredData);
        console.log("filteredData ;", filteredData);

        setCards(sortAndCreatCards("last_updated"));

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
  // for sort
  var sorts = [
    { code: "last_updated", name: t("Last update") },
    { code: "eta", name: t("ETA") },
    { code: "sender", name: t("Sender") },
  ];

  var sortOptions = sorts.map((sort) => (
    <option key={sort.code} value={sort.code}>
      {sort.name}
    </option>
  ));

  function sortAndCreatCards(key) {
    const sortedResults = data.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    return sortedResults.map((parcel) => (
      <Card key={parcel.id} parcelData={parcel} />
    ));
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
          <div className="sort">
            <i className="fas fa-sort"></i>
            <select
              onChange={(event) => {
                setCards(sortAndCreatCards(event.target.value));
                console.log(event.target.value);
              }}
            >
              {sortOptions}
            </select>
          </div>
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
