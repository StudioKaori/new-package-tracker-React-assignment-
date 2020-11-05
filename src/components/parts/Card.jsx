export default function Card({ parcelData }) {
  console.log("Card");
  console.log("parcelData :", parcelData);

  if (typeof parcelData !== "undefined") {
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
    } = parcelData;

    return (
      <div className="card">
        <h2>{parcel_id}</h2>
        <ul>
          <li>{parcel_id}</li>
          <li>{last_updated}</li>
          <li>{status}</li>
          <li>{eta}</li>
          <li>{sender}</li>
          <li>{verification_required}</li>
          <li>{location_id}</li>
          <li>{location_name}</li>
          <li>{location_coordinate_latitude}</li>
          <li>{location_coordinate_longitude}</li>
          <li>{location_status_ok}</li>
          <li>{user_phone}</li>
          <li>{user_name}</li>
          <li>{notes}</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="card">
        <h2>{parcelid} does not exist.</h2>
      </div>
    );
  }
}
