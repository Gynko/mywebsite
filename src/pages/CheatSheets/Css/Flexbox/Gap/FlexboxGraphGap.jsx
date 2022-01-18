import { useEffect, useState } from "react";
import "../FlexboxGraph.styles.css";
import "./FlexboxGraphGap.styles.css";

function FlexboxGraphGap({ rowGap, columnGap }) {
  return (
    <div
      style={{
        marginTop: "var(--margin-top-small)",
        backgroundColor: "#7b728f",
        width: "var(--container-mobile-width)",
        display: "flex",
        flexDirection: "row",
        borderRadius: "5px",
        height: "var(--container-flexbox-graph)",
        flexFlow: "row wrap",
        alignContent: "flex-start",
        rowGap: `${rowGap}px`,
        columnGap: `${columnGap}px`,
      }}
    >
      <div className="flexbox-graphics-items flexbox-gap-items">0</div>
      <div className="flexbox-graphics-items flexbox-gap-items">1</div>
      <div className="flexbox-graphics-items flexbox-gap-items">2</div>
      <div className="flexbox-graphics-items flexbox-gap-items">3</div>
      <div className="flexbox-graphics-items flexbox-gap-items">4</div>
      <div className="flexbox-graphics-items flexbox-gap-items">5</div>
      <div className="flexbox-graphics-items flexbox-gap-items">6</div>
      <div className="flexbox-graphics-items flexbox-gap-items">7</div>
    </div>
  );
}

export default FlexboxGraphGap;
