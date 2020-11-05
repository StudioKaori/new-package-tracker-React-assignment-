import React, { useEffect, useState } from 'react';

import Card from './parts/Card';
import Data from '../PackageTrackingData.json';

export default function Test({ match }) {
  const parcelId = match.params.query;

  // loading status, 0= loading, 1=ready, 2= invalid id error, 3=loading error
  const [status, setStatus] = useState(0);

  // todo change to bellow later
  //const [information, setInformation] = useState(rawInformation);
  const [information, setInformation] = useState(Data);

  const [matchedParcels, setMatchedParcels] = useState([]);

  console.log('tracking results');
  console.log('parcelId :', parcelId);

  console.log('information results');
  console.log('information :', information);

  console.log('jsondata :', Data);

  const endpoint = 'https://my.api.mockaroo.com/orders.json?key=e49e6840';

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

  useEffect(() => {
    if (information.length !== 0) {
      //Filter data by IDs
      const filteredParcels = information.filter((parcel) => {
        return parcel.parcel_id === parcelId;
      });

      setMatchedParcels(filteredParcels);

      console.log('Filter data');
      console.log('filteredParcels :', filteredParcels);

      //Set status ready(1)
      setStatus(1);
    }
  }, []);

  return (
    <div>
      <h1>Tracking result</h1>
      {status === 0 ? <p>Loading...</p> : null}
      {status === 1 ? <Card key={parcelId} data={matchedParcels[0]} /> : null}
      {status === 2 ? <p>The tracking ID is not exist.</p> : null}
    </div>
  );
}
