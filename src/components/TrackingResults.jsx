import React, { useEffect, useState } from "react";

import Card from "./parts/Card";
import Data from "../PackageTrackingData.json";

export default function TrackingResults({ match }) {
  console.log("TrackingResults");

  // loading status, 0= loading, 1=ready, 2= no parcel_id error, 3=loading error
  const [status, setStatus] = useState(1);

  // if query is empty
  const query = match.params.query;
  if (query === "" || query === null) {
    setStatus(2);
  }

  // todo empty useState later
  const [information, setInformation] = useState(Data);
  //const endpoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  // Create pacelIDs array, split by ","
  let parcelIDs;
  if (query !== "" && query !== null) {
    parcelIDs = query.split("%2C");
  } else {
    setStatus(2);
  }

  //console.log("parcelIDs: ", parcelIDs);

  const [cards, setCards] = useState(
    parcelIDs.map((parcelid) => (
      <Card key={parcelid} parcelid={parcelid} data={information} />
    ))
  );

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

  return (
    <div>
      <h1>Tracking result</h1>
      {/* if status is ready(1), display multiple cards.
      Otherwise display error.       */}
      {status === 0 ? <p>Loading...</p> : null}
      {status === 1 ? cards : null}
      {/* Todo, show seach box */}
      {status === 2 ? <p>Query is empty. show serch box.</p> : null}
      {status === 3 ? <p>Data loading error. Please try agai later.</p> : null}
    </div>
  );
}
