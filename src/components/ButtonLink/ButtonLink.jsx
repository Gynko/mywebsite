import "./ButtonLink.styles.css";
import { Link } from "react-router-dom";

function ButtonLink({ label, to }) {
  return (
    <Link to={to}>
      <button className="button-link">{label}</button>
    </Link>
  );
}

export default ButtonLink;
