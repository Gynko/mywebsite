import { Link } from "react-router-dom";
import "./HeaderLink.styles.css";

function HeaderLink({ children, to, label }) {
  return (
    <Link className="header-link" to={to}>
      {label}
    </Link>
  );
}

export default HeaderLink;
