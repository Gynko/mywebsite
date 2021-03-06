import { Link } from "react-router-dom";
import IconBrainConnect from "../Icons/IconBrainConnect";
import IconMail from "../Icons/IconMail";
import "./HeaderMobile.styles.css";

function HeaderMobile() {
  return (
    <div className="header-mobile-container">
      <header className="header-mobile-header">
        <nav className="header-mobile-nav">
          <ul className="header-mobile-ul">
            <li className="header-mobile-li header-mobile-iconbrain">
              <Link to="/">
                <IconBrainConnect />
              </Link>
            </li>
            <li className="header-mobile-li header-mobile-title">
              {`Frontend\nWonderland`}
            </li>
            <li className="header-mobile-li header-mobile-iconmail">
              <IconMail />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default HeaderMobile;
