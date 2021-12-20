import "./HeaderDesktop.styles.css";
import { Link } from "react-router-dom";

import IconBrainConnect from "../Icons/IconBrainConnect";
import IconMail from "../Icons/IconMail";
import HeaderLink from "../HeaderLinks/HeaderLink";

function HeaderDesktop() {
  return (
    <div className="header-desktop-container">
      <header className="header-desktop-header">
        <nav className="header-desktop-nav">
          <div className="allbut">
            <ul className="header-desktop-ul">
              <li className="header-desktop-icons-container">
                <Link className="header-desktop-icons" to="/">
                  <IconBrainConnect />
                </Link>
              </li>
              <li className="header-desktop-li">
                <HeaderLink label="Css" to="/" />
              </li>
              <li className="header-desktop-li">
                <HeaderLink label="Js" to="/" />
              </li>
              <li className="header-desktop-li">
                <HeaderLink label="React" to="/" />
              </li>
              <li className="header-desktop-li">
                <HeaderLink label="More" to="/" />
              </li>
            </ul>
            <input
              className="header-desktop-searchinput"
              type="search"
              name="Search"
              placeholder="search"
            ></input>
          </div>
          <address className="icon-mail-desktop">
            <IconMail />
          </address>
        </nav>
      </header>
    </div>
  );
}

export default HeaderDesktop;
