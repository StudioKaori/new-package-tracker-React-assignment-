import React from 'react';

export default function Card({ data }) {
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
  } = data;

  console.log('Card : ', user_name);

  return (
    <div>
      <h2>Card</h2>
    </div>
  );
}
