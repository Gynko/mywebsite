import "./NavButton.styles.css";
import { Link } from "react-router-dom";

function NavButton({ to, label }) {
  return (
    <Link className="nav-link" to={to}>
      {label}
    </Link>
  );
}

export default NavButton;
