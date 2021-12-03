import NavButton from "../NavButton/NavButton";
import "./HeaderDesktop.styles.css";

import { Link } from "react-router-dom";

function HeaderDesktop() {
  return (
    <div className="header-desktop-container">
      <nav className="header-desktop-nav">
        <ul className="header-desktop-links-container">
          <NavButton to="/" label="Home" />
          <NavButton to="/knowledge-base" label="Knowledge Base" />
          <Link to="/contact-me"></Link>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderDesktop;
