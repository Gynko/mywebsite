import "./HeaderDesktop.styles.css";

import IconBrainConnect from "../Icons/IconBrainConnect";
import IconMail from "../Icons/IconMail";

function HeaderDesktop() {
  return (
    <div className="header-desktop-container">
      <header className="header-desktop-header">
        <nav className="header-desktop-nav">
          <div className="header-desktop-allbutmail">
            <ul className="header-desktop-ul">
              <li className="header-desktop-li">
                <IconBrainConnect />
              </li>
              <li className="header-desktop-li">Css</li>
              <li className="header-desktop-li">Js</li>
              <li className="header-desktop-li">React</li>
              <li className="header-desktop-li">More</li>
            </ul>
            <input
              className="header-desktop-searchinput"
              type="search"
              name="Search"
              placeholder="search"
            ></input>
          </div>
        </nav>
        <address className="icon-mail-desktop">
          <IconMail />
        </address>
      </header>
    </div>
  );
}

export default HeaderDesktop;
