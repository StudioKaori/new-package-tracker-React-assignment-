import { atom, useRecoilState, useRecoilValue } from "recoil";

import { langState } from "../../js/state-information";

export default function Header() {
  const [lang, setLang] = useRecoilState(langState);
  console.log("Header");

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
            <span onclick="openNav()">
              <i className="fas fa-globe"></i>
            </span>
          </div>

          <div id="mySidenav" className="header-menu">
            <div className="pc-icon">
              <i className="fas fa-globe"></i>
            </div>
            <a>&times;</a>
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
