import "./Button.styles.css";
import { Link } from "react-router-dom";

function Button({ name, value, label, link, to }) {
  return (
    <button type="button" name={name} value={value} className="button-main">
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

export default Button;
