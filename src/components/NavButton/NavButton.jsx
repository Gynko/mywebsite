import "./NavButton.styles.css";
import { Link } from "react-router-dom";

function NavButton({ to, label }) {
  return (
    <li className="navig-button">
      <Link to={to}>{label}</Link>
    </li>
  );
}

export default NavButton;
