import "./TitleHeader.styles.css";

function TitleHeader({ title }) {
  return (
    <div className="flex-center-hv titleheader-container">
      <h1 className="titleheader-title">{title}</h1>
    </div>
  );
}

export default TitleHeader;
