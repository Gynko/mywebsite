import "../FlexboxGraph.styles.css";
import "./FlexboxGraphFlow.styles.css";

function FlexboxGraphFlow({ direction, wrap }) {
  return (
    <div
      className={`flexbox-graphics-container flexbox-flow-container flexbox-flow-container-wrap-${wrap} flexbox-flow-container-direction-${direction}`}
    >
      <div className="flexbox-graphics-items flexbox-items-flow">1</div>
      <div className="flexbox-graphics-items flexbox-items-flow">2</div>
      <div className="flexbox-graphics-items flexbox-items-flow">3</div>
      <div className="flexbox-graphics-items flexbox-items-flow">4</div>
      <div className="flexbox-graphics-items flexbox-items-flow">5</div>
    </div>
  );
}

export default FlexboxGraphFlow;
