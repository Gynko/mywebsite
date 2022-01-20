import "../FlexboxGraph.styles.css";
import "./FlexboxItemAlignGraph.styles.css";

function FlexboxItemAlignGraph({ alignSelf }) {
  const style = {
    backgroundColor: "#f4ae44",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: `${alignSelf}`,
    fontFamily: "Bungee",
    textAlign: "center",
    border: "1px black solid",
    lineHeight: "1rem",
    whiteSpace: "pre",
    padding: "1rem",
    minHeight: "2rem",
    width: "100%",
  };
  return (
    <div className={`flexbox-graphics-container flexbox-alignself-container`}>
      <div
        className={`flexbox-graphics-items flexbox-alignself-items flexbox-align-self-1`}
      >
        ❄️
      </div>
      <div
        className={`flexbox-graphics-items flexbox-alignself-items flexbox-align-self-2`}
      >
        ❄️
      </div>
      <div style={style}>🚀</div>
      <div
        className={`flexbox-graphics-items flexbox-alignself-items flexbox-align-self-4`}
      >
        ❄️
      </div>
    </div>
  );
}

export default FlexboxItemAlignGraph;
