import "./LabelledIcon.styles.css";

function LabelledIcon({ svgFile, title, activated, ...otherProps }) {
  return (
    <button className={`labelled-icon-container-${activated}`} {...otherProps}>
      <div className="labelled-icon-svg">{svgFile}</div>
      <p className={`labelled-icon-title labelled-icon-title-${activated}`}>
        {title}
      </p>
    </button>
  );
}

export default LabelledIcon;
