import "./TerminologyFlexbox.styles.css";
import TerminologyFlexboxAxis from "./TerminologyFlexboxAxis";
import TerminologyFlexboxName from "./TerminologyFlexboxName";
import TerminologyFlexboxSize from "./TerminologyFlexboxSize";

/* Animations */
import TerminologyFlexboxStartEnd from "./TerminologyFlexboxStartEnd";

function TerminologyFlexbox({ name, axis, size, startend }) {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 308.34 294.4"
      width="100%"
      className="svg-flexbox"
      preserveAspectRatio="xMidYMid meet"
    >
      <TerminologyFlexboxAxis axis={axis} />
      <TerminologyFlexboxSize size={size} />
      <TerminologyFlexboxStartEnd startend={startend} />
      <g id="Container-items">
        <rect
          id="Container"
          x={75}
          y={98.453}
          width={158}
          height={87}
          rx={5.119}
          style={{
            fill: "#7b728f",
          }}
        />
        <rect
          id="item-right"
          x={156.319}
          y={114.953}
          width={71.538}
          height={67}
          rx={6.998}
          style={{
            fill: "#f4ae44",
          }}
        />
        <rect
          id="item-left"
          x={80.584}
          y={114.953}
          width={71.538}
          height={67}
          rx={6.998}
          style={{
            fill: "#f4ae44",
          }}
        />
      </g>

      <TerminologyFlexboxName name={name} />
    </svg>
  );
}

export default TerminologyFlexbox;
