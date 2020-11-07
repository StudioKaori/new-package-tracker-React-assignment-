import React from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";

import { langState } from "../../js/state-information";

export default function Header() {
  const [lang, setLang] = useRecoilState(langState);

  // for navigation drawer
  window.addEventListener(
    "resize",
    function () {
      resizeNav();
    },
    false
  );

  window.addEventListener(
    "load",
    function () {
      resizeNav();
    },
    false
  );

  function resizeNav() {
    const mySidenav = document.getElementById("mySidenav");

    if (window.innerWidth >= 750) {
      mySidenav.classList.add("header-menu-PC");
      mySidenav.style.width = "100%";
    } else if (window.innerWidth < 750) {
      mySidenav.classList.remove("header-menu-PC");
      closeNav();
    }
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    if (window.innerWidth < 750) {
      document.getElementById("mySidenav").style.width = "0";
    }
  }

  function switchLangColor(id) {
    const langSwitchs = document.getElementsByClassName("lang-switch");

    Array.prototype.forEach.call(langSwitchs, function (langSwitch) {
      langSwitch.classList.remove("checked");
    });

    console.log(id);

    document.getElementById(id).classList.add("checked");
  }

  return (
    <nav>
      <div className="header-menu-bg">
        <div className="header-menu-wrapper">
          <div className="header-menu-log">
            <h1>
              YELLOW<i className="fas fa-shipping-fast"></i>
            </h1>
          </div>

          <div className="mobile-menu">
            <span onClick={() => openNav()}>
              <i className="fas fa-globe"></i>
            </span>
          </div>

          <div id="mySidenav" className="header-menu">
            <div className="pc-icon">
              <i className="fas fa-globe"></i>
            </div>
            <span className="closebtn" onClick={() => closeNav()}>
              &times;
            </span>
            <ul>
              <li
                onClick={() => {
                  setLang("en");
                  closeNav();
                  switchLangColor("en");
                }}
                id="en"
                className="lang-switch checked"
              >
                EN
              </li>
              <li
                onClick={() => {
                  setLang("sv");
                  closeNav();
                  switchLangColor("sv");
                }}
                id="sv"
                className="lang-switch"
              >
                SV
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
