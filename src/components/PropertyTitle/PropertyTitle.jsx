import "./PropertyTitle.styles.css";

function PropertyTitle(props) {
  const { marginTop } = props;
  return (
    <div
      className={`property-title-container property-title-container-margin-${marginTop}`}
    >
      <p className="property-title-paragraph">{props.children}</p>
    </div>
  );
}

export default PropertyTitle;
