import React from "react";

export default function Card({ parcelid, data }) {
  console.log("Card");
  console.log("parcelid :", parcelid);
  console.log("data :", data);

  // check parcelId is valid number
  //if (Number.isInteger(parcelId)) setStatus(2);

  /*
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
*/

  const {
    parcel_id,
    last_updated,
    status,
    eta,
    sender,
    verification_required,
    location_id,
    location_name,
    location_coordinate_latitude,
    location_coordinate_longitude,
    location_status_ok,
    user_phone,
    user_name,
    notes,
  } = data[0];

  console.log("Card : ", user_name);

  return (
    <div>
      <h2>Card</h2>
    </div>
  );
}
