export default function Card({ parcelData }) {
  console.log("Card");
  console.log("parcelData :", parcelData);

  function formatDate(date) {
    return date.slice(0, -1).replace("T", " ");
  }

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

    const formattedETA = formatDate(eta);
    const formattedLastUpdate = formatDate(last_updated);
    const mapURL =
      "https://www.google.co.jp/maps/@" +
      location_coordinate_latitude +
      "," +
      location_coordinate_longitude +
      ",16z";

    return (
      <div className="card">
        <h2>{parcel_id}</h2>
        <ul>
          <li>{parcel_id}</li>
          <li>{formattedLastUpdate}</li>
          <li>{status}</li>
          <li>{formattedETA}</li>
          <li>{sender}</li>
          <li>{verification_required}</li>
          <li>{location_id}</li>
          <li>{location_name}</li>
          <li>
            <a href={mapURL} target="_blank">
              Map
            </a>
          </li>
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
        <h2>Package does not exist.</h2>
      </div>
    );
  }
}
