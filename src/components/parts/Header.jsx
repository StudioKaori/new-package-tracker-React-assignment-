import { atom, useRecoilState, useRecoilValue } from "recoil";

import { langState } from "../../js/state-information";

export default function Header() {
  const [lang, setLang] = useRecoilState(langState);

  // for navigation drawer
  const mySidenav = document.getElementById("mySidenav");

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
      mySidenav.style.width = "100%";
      mySidenav.classList.add("header-menu-PC");
    } else if (window.innerWidth < 750) {
      mySidenav.style.width = "0";
      mySidenav.classList.remove("header-menu-PC");
    }
  }

  function openNav() {
    mySidenav.style.width = "250px";
  }

  function closeNav() {
    mySidenav.style.width = "0";
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
              <li onClick={() => setLang("en")}>
                <a href="index.html" target="_self" id="checked">
                  EN
                </a>
              </li>
              <li onClick={() => setLang("sv")}>
                <a href="about.html" target="_self">
                  SV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
