import "./LabelledIcon.styles.css";

function LabelledIcon({ svgFile, title }) {
  return (
    <div className="labelled-icon-container">
      <div className="labelled-icon-svg">{svgFile}</div>
      <p className="labelled-icon-title">{title}</p>
    </div>
  );
}

export default LabelledIcon;
