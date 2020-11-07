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
      id,
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
    const formattedETA = formatDate(eta);
    const formattedLastUpdate = formatDate(last_updated);

    // link for google map
    const mapURL =
      "https://www.google.co.jp/maps/@" +
      location_coordinate_latitude +
      "," +
      location_coordinate_longitude +
      ",16z";

    // for delivery status images
    const deliveryStatus1ID = id + "order-info-received";
    const deliveryStatus2ID = id + "on-the-way";
    const deliveryStatus3ID = id + "ready-for-pickup";
    const deliveryStatus4ID = id + "delivered";

    window.addEventListener(
      "load",
      function () {
        changeStatusImgs();
      },
      false
    );

    function addClassToElements(...args) {
      args.forEach((element) => {
        document.getElementById(element).classList.add("done");
      });
    }

    function changeStatusImgs() {
      switch (status) {
        case "delivered":
          addClassToElements(
            deliveryStatus1ID,
            deliveryStatus2ID,
            deliveryStatus3ID,
            deliveryStatus4ID
          );
          break;
        case "ready-for-pickup":
          addClassToElements(
            deliveryStatus1ID,
            deliveryStatus2ID,
            deliveryStatus3ID
          );
          break;
        case "on-the-way":
          addClassToElements(deliveryStatus1ID, deliveryStatus2ID);
          break;
        default:
          addClassToElements(deliveryStatus1ID);
          break;
      }
    }

    return (
      <article className="package">
        <h3>
          <i className="fas fa-box"></i>
          {t("Package ID")} : {parcel_id}
        </h3>
        <div className="package-status">
          <div className="package-status-text">{t(status)}</div>
          <span id={deliveryStatus1ID}>
            <i className="fas fa-file-upload"></i>
          </span>
          <span id={deliveryStatus2ID}>
            <i className="fas fa-shipping-fast"></i>
          </span>
          <span id={deliveryStatus3ID}>
            <i className="far fa-check-circle"></i>
          </span>
          <span id={deliveryStatus4ID}>
            <i className="fas fa-check-circle"></i>
          </span>
        </div>

        <div className="package-details-wrapper">
          <table className="package-details">
            <tbody>
              <tr>
                <th>{t("Last update")}</th>
                <td>{formattedLastUpdate}</td>
              </tr>
              <tr className="col2">
                <th>{t("ETA")}</th>
                <td>{formattedETA}</td>
              </tr>
              <tr>
                <th>{t("Sender")}</th>
                <td>{sender}</td>
              </tr>
              <tr className="col2">
                <th>{t("Location")}</th>
                <td>
                  {location_name} <i className="fas fa-map-marker-alt"></i>
                  <a href={mapURL} target="_blank" rel="noreferrer">
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
