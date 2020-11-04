import React, { useEffect, useState } from 'react';

import Card from './parts/Card';

export default function TrackingResult() {
  // loading status, 0= loading, 1=ready, 2= error
  const [status, setStatus] = useState(0);
  const [information, setInformation] = useState([]);
  const endpoint = 'https://my.api.mockaroo.com/orders.json?key=e49e6840';

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(endpoint, { mode: 'cors' });
        const data = await response.json();

        setInformation(data);
        setStatus(1);

        console.log('fetch data, ok');
        console.log('data :', data);
      } catch {
        setStatus(2);
        console.log('fetch data, no');
      }
    };

    getData();
  }, []);
  return (
    <div>
      <h1>Tracking result</h1>
      <Card key="0" data={information[0]} />
    </div>
  );
}
