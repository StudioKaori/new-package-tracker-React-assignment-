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
      <article className="package">
        <h3>
          <i className="fas fa-box"></i>Package ID: 3501
        </h3>
        <div className="package-status">
          <div className="package-status-text">order-info-received</div>
          <span className="done">
            <i className="fas fa-file-upload"></i>
          </span>
          <span>
            <i className="fas fa-shipping-fast"></i>
          </span>
          <span>
            <i className="far fa-check-circle"></i>
          </span>
          <span>
            <i className="fas fa-check-circle"></i>
          </span>
        </div>

        <div className="package-details-wrapper">
          <table className="package-details">
            <tbody>
              <tr>
                <td>Last update</td>
                <td>2020-04-03 14:55</td>
              </tr>
              <tr className="col2">
                <td>ETA</td>
                <td>2020-04-03 14:55</td>
              </tr>
              <tr>
                <td>Sender</td>
                <td>Kaori Persson</td>
              </tr>
              <tr className="col2">
                <td>Location</td>
                <td>
                  Packers <i className="fas fa-map-marker-alt"></i>
                  <a>Map</a>
                </td>
              </tr>
              <tr>
                <td>Verification</td>
                <td>Required</td>
              </tr>
              <tr className="col2">
                <td>Notes</td>
                <td>Comment</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    );
  } else {
    return (
      <div className="card">
        <h2>Package does not exist.</h2>
      </div>
    );
  }
}
