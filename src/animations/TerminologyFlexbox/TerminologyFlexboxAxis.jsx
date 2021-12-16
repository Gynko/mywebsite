/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect } from "react";
import { gsap } from "gsap";

function TerminologyFlexboxAxis({ axis }) {
  const tlAxis = gsap.timeline();

  function animAxis() {
    gsap.set(".axis-cross-line", { scaleY: 0 });
    gsap.set(".axis-cross-arrow", { y: -250 });
    gsap.set(".axis-main-line", { scaleX: 0 });
    gsap.set(".axis-main-arrow", { x: -300 });
    tlAxis.to(".axis-cross-line", { duration: 0.3, scaleY: 1 }, "first");
    tlAxis.to(".axis-cross-arrow", { duration: 0.3, y: 0 }, "first");
    tlAxis.to(".axis-main-line", { duration: 0.3, scaleX: 1 }, "first");
    tlAxis.to(".axis-main-arrow", { duration: 0.3, x: 0 }, "first");
  }

  useLayoutEffect(() => {
    animAxis();
    return function cleanup() {
      tlAxis.kill();
    };
  }, [axis]);

  return (
    <g className={`axis-${axis}`}>
      <g id="axis-Cross">
        <text
          id="axis-cross-text"
          transform="translate(127.316 13.76)"
          style={{
            fontSize: 16,
            fill: "#ffa9a9",
            fontFamily: "Bungee-Regular, Bungee",
          }}
        >
          {"C"}
          <tspan
            x={10.048}
            y={0}
            style={{
              letterSpacing: "-0.004974365234375em",
            }}
          >
            {"R"}
          </tspan>
          <tspan x={21.856} y={0}>
            {"O"}
          </tspan>
          <tspan
            x={33.648}
            y={0}
            style={{
              letterSpacing: "-0.0050048828125em",
            }}
          >
            {"S"}
          </tspan>
          <tspan
            x={43.968}
            y={0}
            style={{
              letterSpacing: "0.000030517578125em",
            }}
          >
            {"S"}
          </tspan>
          <tspan x={5.408} y={16}>
            {"axis"}
          </tspan>
        </text>
        <line
          className="axis-cross-line"
          x1={153.853}
          y1={31.953}
          x2={153.853}
          y2={271.659}
          style={{
            fill: "none",
            stroke: "#ffa9a9",
            strokeMiterlimit: 10,
            strokeWidth: 4,
          }}
        />
        <polygon
          className="axis-cross-arrow"
          points="159.853 271.659 153.853 283.659 147.853 271.659 159.853 271.659"
          style={{
            fill: "#ffa9a9",
          }}
        />
      </g>
      <g id="axis-main">
        <polygon
          className="axis-main-arrow"
          points="299 135.705 299 148.269 308.344 142.205 299 135.705"
          style={{
            fill: "#ffa9a9",
          }}
        />
        <line
          className="axis-main-line"
          x1={300.706}
          y1={141.806}
          y2={141.806}
          style={{
            fill: "none",
            stroke: "#ffa9a9",
            strokeMiterlimit: 10,
            strokeWidth: 4,
          }}
        />
        <text
          id="axis-main-text-main"
          transform="translate(4.806 138.505)"
          style={{
            fontSize: "16.865280151367188px",
            fill: "#ffa9a9",
            fontFamily: "Bungee-Regular, Bungee",
          }}
        >
          {"main"}
        </text>
        <text
          id="axis-main-text-axis"
          transform="translate(7.797 157.76)"
          style={{
            fontSize: 16,
            fill: "#ffa9a9",
            fontFamily: "Bungee-Regular, Bungee",
          }}
        >
          {"axis"}
        </text>
      </g>
    </g>
  );
}

export default TerminologyFlexboxAxis;
