import "./DisplayCopyProperty.styles.css";
import IconCopy from "../Icons/IconCopy";

function DisplayCopyProperty({ property, marginTop }) {
  return (
    <div
      className={`display-copy-property-container display-copy-property-container-${marginTop}`}
    >
      <div className="display-copy-icon-container">
        <button className="display-copy-icon-button"></button>
        <IconCopy />
      </div>
      <p className="display-copy-property-text">{property}</p>
    </div>
  );
}

export default DisplayCopyProperty;
