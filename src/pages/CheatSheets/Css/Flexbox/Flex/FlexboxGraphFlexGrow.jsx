import "../FlexboxGraph.styles.css";
import "./FlexboxGraphFlexGrow.styles.css";

function FlexboxGraphFlexGrow({ flexGrow }) {
  return (
    <div
      className={`flexbox-graphics-container flexbox-graphics-container-flexgrow`}
    >
      <div
        style={{
          backgroundColor: "var(--color-button-yellow)",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Bungee",
          textAlign: "center",
          flexGrow: `${flexGrow}`,
          border: "1px black solid",
          lineHeight: "1rem",
        }}
      >
        1
      </div>
      <div className="flexbox-graphics-items flexbox-graphics-items-flexgrow flexbox-graphics-items-flexgrow-blue">
        2
      </div>
      <div className="flexbox-graphics-items flexbox-graphics-items-flexgrow flexbox-graphics-items-flexgrow-blue">
        3
      </div>
    </div>
  );
}

export default FlexboxGraphFlexGrow;
