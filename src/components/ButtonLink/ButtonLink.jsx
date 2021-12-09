import "./ButtonLink.styles.css";
import { Link } from "react-router-dom";

function ButtonLink({ name, value, label, link, to }) {
  return (
    <button
      type="button"
      name={name}
      value={value}
      className="button-link-main"
    >
      {link === "true" ? (
        <Link className="button-link" to={to}>
          {label}
        </Link>
      ) : (
        label
      )}
    </button>
  );
}

export default ButtonLink;
