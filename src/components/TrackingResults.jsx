import React, { useEffect, useState } from "react";

import Card from "./parts/Card";
import Data from "../PackageTrackingData.json";

export default function Test({ match }) {
  // loading status, 0= loading, 1=ready, 2= invalid id error, 3=loading error
  const [status, setStatus] = useState(0);

  const parcelId = match.params.query;
  // check parcelId is valid number
  if (Number.isInteger(parcelId)) setStatus(2);

  // todo empty useState later
  const [information, setInformation] = useState(Data);

  const [matchedParcels, setMatchedParcels] = useState([]);

  const endpoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

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

  function findMatchedParcels() {
    if (information.length !== 0) {
      //Filter data by IDs
      const filteredParcels = information.filter((parcel) => {
        return parcel.parcel_id === parcelId;
      });

      setMatchedParcels(filteredParcels);

      console.log("Filter data");
      console.log("filteredParcels :", filteredParcels);

      //Set status ready(1)
      setStatus(1);
    }
  }

  useEffect(() => {
    console.log("tracking results");
    console.log("parcelId :", parcelId);

    console.log("information results");
    console.log("information :", information);
    findMatchedParcels();
  }, []);

  return (
    <div>
      <h1>Tracking result</h1>
      {status === 0 ? <p>Loading...</p> : null}
      {status === 1 ? <Card key={parcelId} data={matchedParcels[0]} /> : null}
      {status === 2 ? <p>The tracking ID does not exist.</p> : null}
    </div>
  );
}
