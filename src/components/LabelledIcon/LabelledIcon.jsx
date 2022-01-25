import "./LabelledIcon.styles.css";

function LabelledIcon({
  svgFile,
  title,
  activated,
  value,
  onClick,
  color,
  ...otherProps
}) {
  return (
    <div
      className={`labelled-icon-main-container labelled-icon-main-container-${activated} labelled-icon-main-container-${color} labelled-icon-main-container-${color}-${activated}`}
    >
      <div className="labelled-icon-svg">{svgFile}</div>
      <span
        className={`labelled-icon-title labelled-icon-title-${activated} labelled-icon-title-color-${color}`}
      >
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
