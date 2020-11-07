import React, { useEffect } from "react";

// for multi-lang support
import { userTranslation, useTranslation } from "react-i18next";

//recoil library
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { langState } from "./../../js/state-information";

export default function Card({ parcelData }) {
  const [t, i18n] = useTranslation();
  const [lang, setLang] = useRecoilState(langState);

  // for multi-lang support
  useEffect(() => {
    console.log(lang);
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

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
          <i className="fas fa-box"></i>
          {t("Package ID")} : {parcel_id}
        </h3>
        <div className="package-status">
          <div className="package-status-text">{status}</div>
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
                <th>Last update</th>
                <td>{formattedLastUpdate}</td>
              </tr>
              <tr className="col2">
                <th>ETA</th>
                <td>{formattedETA}</td>
              </tr>
              <tr>
                <th>Sender</th>
                <td>{sender}</td>
              </tr>
              <tr className="col2">
                <th>Location</th>
                <td>
                  {location_name} <i className="fas fa-map-marker-alt"></i>
                  <a href={mapURL} target="_blank" rel="noreferrer">
                    Map
                  </a>
                </td>
              </tr>
              <tr>
                <th>Verification</th>
                <td>{verification_required ? "Required" : "Not required"}</td>
              </tr>
              <tr className="col2">
                <th>Notes</th>
                <td>{notes}</td>
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
