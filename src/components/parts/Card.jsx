import React, { useState } from "react";

export default function Card({ parcelid, data }) {
  console.log("Card");
  console.log("parcelid :", parcelid);
  console.log("data :", data);
  console.log("findMatchedParcels :", findMatchedParcels());

  // check parcelId is valid number
  //if (Number.isInteger(parcelId)) setStatus(2);

  function findMatchedParcels() {
    return data.find((item) => item.parcel_id === parcelid);
  }

  /*
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

*/

  return (
    <div className="card">
      <h2>Card</h2>
    </div>
  );
}
