import NavButton from "../NavButton/NavButton";
import "./HeaderDesktop.styles.css";
import { ReactComponent as MailIcon } from "../../assets/icons/email.svg";

function HeaderDesktop() {
  return (
    <div className="header-desktop-container">
      <nav className="header-desktop-nav">
        <ul className="header-desktop-links-container">
          <NavButton label="Knowledge Base" />
          <NavButton label="Cheat sheets" />
          <NavButton label="Terminology" />
          <MailIcon className="header-desktopicons" />
        </ul>
      </nav>
    </div>
  );
}

export default HeaderDesktop;
