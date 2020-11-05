import React, { useEffect, useState } from "react";

import Card from "./parts/Card";
import Data from "../PackageTrackingData.json";

export default function TrackingResults({ match }) {
  console.log("TrackingResults");
  console.log("Data :", Data);

  // loading status, 0= loading, 1=ready, 2= no parcel_id error, 3=loading error
  const [status, setStatus] = useState(1);

  // todo empty useState later
  const [information, setInformation] = useState(Data);
  //const endpoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  let parcelIDs;
  if (match.params.query !== "" && match.params.query !== null) {
    // Create pacelIDs array
    parcelIDs = match.params.query.split("%2C");
  } else {
    setStatus(2);
  }

  console.log("parcelIDs: ", parcelIDs);

  const [cards, setCards] = useState(
    parcelIDs.map((item) => <Card key={item} data={information} />)
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
      {status === 2 ? <p>Data loading error. Please try agai later.</p> : null}
    </div>
  );
}
