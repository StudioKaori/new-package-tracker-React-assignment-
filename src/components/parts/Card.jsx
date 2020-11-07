import React, { useEffect } from "react";

// for multi-lang support
import { useTranslation } from "react-i18next";

//recoil library
import { useRecoilState } from "recoil";
import { langState } from "./../../js/state-information";

export default function Card({ parcelData }) {
  const [t, i18n] = useTranslation();
  const [lang, setLang] = useRecoilState(langState);

  // for multi-lang support
  useEffect(() => {
    console.log(lang);
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  if (typeof parcelData !== "undefined") {
    const {
      parcel_id,
      last_updated,
      status,
      eta,
      sender,
      verification_required,
      location_name,
      location_coordinate_latitude,
      location_coordinate_longitude,
      notes,
    } = parcelData;

    // format date
    function formatDate(date) {
      return date.slice(0, -1).replace("T", " ");
    }

    return (
      <article className="package">
        <h3>
          <i className="fas fa-box"></i>
          {t("Package ID")} : {parcel_id}
        </h3>
        <div className="package-status">
          <div className="package-status-text">{t(status)}</div>
          <span className="done">
            <i className="fas fa-file-upload"></i>
          </span>
          <span
            className={
              status === "on-the-way" ||
              status === "ready-for-pickup" ||
              status === "delivered"
                ? "done"
                : "none"
            }
          >
            <i className="fas fa-shipping-fast"></i>
          </span>
          <span
            className={
              status === "ready-for-pickup" || status === "delivered"
                ? "done"
                : "none"
            }
          >
            <i className="far fa-check-circle"></i>
          </span>
          <span className={status === "delivered" ? "done" : "none"}>
            <i className="fas fa-check-circle"></i>
          </span>
        </div>

        <div className="package-details-wrapper">
          <table className="package-details">
            <tbody>
              <tr>
                <th>{t("Last update")}</th>
                <td>{formatDate(last_updated)}</td>
              </tr>
              <tr className="col2">
                <th>{t("ETA")}</th>
                <td>{formatDate(eta)}</td>
              </tr>
              <tr>
                <th>{t("Sender")}</th>
                <td>{sender}</td>
              </tr>
              <tr className="col2">
                <th>{t("Location")}</th>
                <td>
                  {location_name} <i className="fas fa-map-marker-alt"></i>
                  <a
                    href={`https://www.google.co.jp/maps/@${location_coordinate_latitude},${location_coordinate_longitude},16z`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("Map")}
                  </a>
                </td>
              </tr>
              <tr>
                <th>{t("Verification")}</th>
                <td>
                  {verification_required ? t("Required") : t("Not required")}
                </td>
              </tr>
              <tr className="col2">
                <th>{t("Notes")}</th>
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
        <h2>{t("Package ID does not exist.")}</h2>
      </div>
    );
  }
}
