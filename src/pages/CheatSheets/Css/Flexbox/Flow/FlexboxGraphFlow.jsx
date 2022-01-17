import "../FlexboxGraph.styles.css";
import "./FlexboxGraphFlow.styles.css";

function FlexboxGraphFlow({ direction, wrap }) {
  return (
    <div
      className={`flexbox-graphics-container flexbox-flow-container-wrap-${wrap} flexbox-flow-container-direction-${direction}`}
    >
      <div className="flexbox-graphics-items">1</div>
      <div className="flexbox-graphics-items">2</div>
      <div className="flexbox-graphics-items">3</div>
      <div className="flexbox-graphics-items">4</div>
      <div className="flexbox-graphics-items">5</div>
    </div>
  );
}

export default FlexboxGraphFlow;
