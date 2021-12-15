import "./ButtonLink.styles.css";
import { Link } from "react-router-dom";

function ButtonLink({ label, to }) {
  return (
    <Link className="button-link" to={to}>
      {label}
    </Link>
  );
}

export default ButtonLink;
