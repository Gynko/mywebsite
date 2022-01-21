import "./ButtonLink.styles.css";
import { Link } from "react-router-dom";

function ButtonLink({ label, to, marginTop, color }) {
  return (
    <Link
      className={`button-link button-link-margintop-${marginTop} button-link-color-${color}`}
      to={to}
    >
      {label}
    </Link>
  );
}

export default ButtonLink;
