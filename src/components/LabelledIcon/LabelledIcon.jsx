import "./LabelledIcon.styles.css";

function LabelledIcon({
  svgFile,
  title,
  activated,
  value,
  onClick,
  ...otherProps
}) {
  return (
    <div
      className={`labelled-icon-main-container labelled-icon-main-container-${activated}`}
    >
      <div className="labelled-icon-svg">{svgFile}</div>
      <span className={`labelled-icon-title labelled-icon-title-${activated}`}>
        {title}
      </span>
      <button
        className="labelled-icon-button"
        value={value}
        onClick={onClick}
        {...otherProps}
      >
        {title}
      </button>
    </div>
  );
}

export default LabelledIcon;
