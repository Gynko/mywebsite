import NavButton from "../NavButton/NavButton";
import "./Header.styles.css";
import { ReactComponent as LightIcon } from "../../assets/icons/lightmode.svg";
import { ReactComponent as MailIcon } from "../../assets/icons/email.svg";

function Header() {
  return (
    <header className="header">
      <LightIcon />
      <NavButton label="Home" />
      <NavButton label="Portfolio" />
      <NavButton label="Articles" />
      <NavButton label="About me" />
      <MailIcon />
    </header>
  );
}

export default Header;
