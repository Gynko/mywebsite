import "../FlexboxGraph.styles.css";
import "./FlexboxGraphFlexGrow.styles.css";

function FlexGrow({ flexGrowAlone }) {
  const styles = {
    backgroundColor: "var(--color-button-yellow)",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Bungee",
    textAlign: "center",
    border: "1px black solid",
    lineHeight: "1rem",
    flexGrow: `${flexGrowAlone}`,
  };
  return (
    <div
      className={`flexbox-graphics-container flexbox-graphics-container-flexgrow`}
    >
      <div style={styles}>item 1</div>
      <div className="flexbox-graphics-items flexbox-graphics-items-flexgrow-blue">
        item 2
      </div>
      <div className="flexbox-graphics-items flexbox-graphics-items-flexgrow-blue">
        item 3
      </div>
    </div>
  );
}

export default FlexGrow;
