import "../FlexboxGraph.styles.css";
import "./FlexboxGraphFlexShrink.styles.css";

function FlexboxGraphFlexShrink({ flexShrink }) {
  return (
    <div
      className={`flexbox-graphics-container flexbox-graphics-container-flexshrink`}
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
          flexShrink: `${flexShrink}`,
          border: "1px black solid",
          lineHeight: "1rem",
          width: "10rem",
        }}
      >
        1
      </div>
      <div className="flexbox-graphics-items flexbox-graphics-items-flexshrink flexbox-graphics-items-flexshrink-blue">
        2
      </div>
      <div className="flexbox-graphics-items flexbox-graphics-items-flexshrink flexbox-graphics-items-flexshrink-blue">
        3
      </div>
    </div>
  );
}

export default FlexboxGraphFlexShrink;
