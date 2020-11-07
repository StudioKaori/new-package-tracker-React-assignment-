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
    if (window.innerWidth >= 750) {
      document.getElementById("mySidenav").classList.add("header-menu-PC");
    } else if (window.innerWidth < 750) {
      document.getElementById("mySidenav").classList.remove("header-menu-PC");
    }
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function changeState() {
    if (window.innerWidth < 750) {
      closeNav();
    }
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
                  changeState();
                }}
                id="checked"
              >
                EN
              </li>
              <li
                onClick={() => {
                  setLang("sv");
                  changeState();
                }}
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
