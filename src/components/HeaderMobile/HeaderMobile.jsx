import { Link } from "react-router-dom";
import "./HeaderMobile.styles.css";

function HeaderMobile() {
  return (
    <header className="header-mobile-container">
      <nav className="header-mobile-nav">
        <ul className="header-mobile-links-container">
          <li className="header-mobile-li">
            <svg
              width="auto"
              height="50"
              viewBox="0 0 25 25"
              preserveAspectRatio="xMidYMid meet"
              fill="#ffffff"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderMobile;
