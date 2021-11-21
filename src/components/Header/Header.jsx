import NavButton from "../NavButton/NavButton";
import "./Header.styles.css";
import { ReactComponent as LightIcon } from "../../assets/icons/lightmode.svg";
import { ReactComponent as MailIcon } from "../../assets/icons/email.svg";

function Header() {
  return (
    <header className="header">
      <LightIcon className="header-icons" />
      <div className="header-links-container">
        <NavButton label="Portfolio" />
        <NavButton label="Articles" />
        <NavButton label="About me" />
      </div>
      <MailIcon className="header-icons" />
    </header>
  );
}

export default Header;
