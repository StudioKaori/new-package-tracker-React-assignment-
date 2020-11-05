import React, { useEffect, useState } from "react";
// for multi-lang support
import { userTranslation, useTranslation } from "react-i18next";

import Card from "./parts/Card";
// todo replace fake db to real
import Data from "../PackageTrackingData.json";

export default function TrackingResults({ match }) {
  console.log("TrackingResults");

  // for multi-lang support
  const [t, i18n] = useTranslation();
  const [lang, setLang] = useState("en");

  // loading status, 0= loading, 1=ready, 2= no parcel_id error, 3=loading error
  const [status, setStatus] = useState(1);

  // if query is empty, set error
  const query = match.params.query;
  if (query === "" || query === null) {
    setStatus(2);
  }

  // todo remove param 'data' from useState later, useState(), param should be empty
  const [information, setInformation] = useState(Data);
  //const endpoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  // Create pacelIDs array, split by ","
  let parcelIDs;
  if (query !== "" && query !== null) {
    parcelIDs = query.split("%2C");
  } else {
    setStatus(2);
  }

  // todo change to useState([]), after replace fake DB
  //inside of useeffect, setcard.
  const [cards, setCards] = useState(
    parcelIDs.map((parcelid) => (
      <Card key={parcelid} parcelid={parcelid} data={information} />
    ))
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
        // Set status data loading error(3)
        setStatus(3);
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

  return (
    <div>
      <h1>{t("Tracking result")}</h1>
      {/* Todo, show seach box */}

      {/* if status is ready(1), display multiple cards.
      Otherwise display error.       */}
      {status === 0 ? <p>Loading...</p> : null}
      {status === 1 ? cards : null}
      {status === 2 ? <p>Query is empty. show serch box.</p> : null}
      {status === 3 ? <p>Data loading error. Please try agai later.</p> : null}
    </div>
  );
}
