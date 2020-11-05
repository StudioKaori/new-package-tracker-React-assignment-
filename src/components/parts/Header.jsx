import { atom, useRecoilState, useRecoilValue } from "recoil";

import { langState } from "../../js/state-information";

export default function Header() {
  const [lang, setLang] = useRecoilState(langState);
  console.log("Header");

  return (
    <header>
      <h2>Header</h2>
      <ul>
        <div onClick={() => setLang("en")}>EN</div>
        <div onClick={() => setLang("sv")}>SV</div>
      </ul>
    </header>
  );
}
