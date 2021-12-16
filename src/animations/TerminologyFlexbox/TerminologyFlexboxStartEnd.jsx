/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect } from "react";
import { gsap } from "gsap";

import "./TerminologyFlexboxStartEnd.styles.css";

function TerminologyFlexboxStartEnd({ startend }) {
  const tlStartEnd = gsap.timeline();

  function animStartEnd() {
    gsap.set(".startend-left", { opacity: 0, x: -50 });
    gsap.set(".startend-down", { opacity: 0, y: 50 });
    tlStartEnd.to(".startend-left", {
      duration: 0.3,
      opacity: 1,
      x: 0,
      stagger: 0.2,
      ease: "bounce",
    });
    tlStartEnd.to(".startend-down", {
      duration: 0.3,
      opacity: 1,
      y: 0,
      stagger: 0.2,
      ease: "bounce",
    });
  }

  useLayoutEffect(() => {
    animStartEnd();
    return function cleanup() {
      tlStartEnd.kill();
    };
  }, [startend]);
  return (
    <g className={`startend-${startend}`}>
      <g>
        <g className={`startend-left`}>
          <text
            id="CrossStartEnd_Text_CrossEnd"
            transform="translate(2.389 94.412)"
            style={{
              fontSize: 16,
              fill: "#44b5f4",
              fontFamily: "Bungee-Regular, Bungee",
            }}
          >
            {"c"}
            <tspan
              x={10.048}
              y={0}
              style={{
                letterSpacing: "-0.00494384765625em",
              }}
            >
              {"r"}
            </tspan>
            <tspan
              x={21.856}
              y={0}
              style={{
                letterSpacing: "-0.00006103515625em",
              }}
            >
              {"o"}
            </tspan>
            <tspan
              x={33.647}
              y={0}
              style={{
                letterSpacing: "-0.0050048828125em",
              }}
            >
              {"s"}
            </tspan>
            <tspan x={43.968} y={0}>
              {"s"}
            </tspan>
          </text>
          <line
            id="CrossStartEnd_Arrow-DownLine"
            y1={98.659}
            x2={62.853}
            y2={98.659}
            style={{
              fill: "none",
              stroke: "#44b5f4",
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <text
            id="CrossStartEnd-Text-CrossStart"
            transform="translate(3.813 115.061)"
            style={{
              fontSize: 16,
              fill: "#44b5f4",
              fontFamily: "Bungee-Regular, Bungee",
              letterSpacing: "-0.00994873046875em",
            }}
          >
            {"s"}
            <tspan
              x={10.24}
              y={0}
              style={{
                letterSpacing: "-0.0400390625em",
              }}
            >
              {"t"}
            </tspan>
            <tspan
              x={20.096}
              y={0}
              style={{
                letterSpacing: "0.00006103515625em",
              }}
            >
              {"a"}
            </tspan>
            <tspan
              x={31.776}
              y={0}
              style={{
                letterSpacing: "-0.030029296875em",
              }}
            >
              {"r"}
            </tspan>
            <tspan
              x={43.184}
              y={0}
              style={{
                letterSpacing: "-0.010009765625em",
              }}
            >
              {"t"}
            </tspan>
          </text>
          <polygon
            points="62.853 92.659 74.853 98.659 62.853 104.659 62.853 92.659"
            style={{
              fill: "#44b5f4",
            }}
          />
        </g>
        <g className={`startend-left`}>
          <line
            id="CrossStartEnd_Arrow-DownLine-2"
            data-name="CrossStartEnd_Arrow-DownLine"
            y1={184.659}
            x2={62.853}
            y2={184.659}
            style={{
              fill: "none",
              stroke: "#44b5f4",
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <text
            id="CrossStartEnd-Text-CrossStart-2"
            data-name="CrossStartEnd-Text-CrossStart"
            transform="translate(2.389 180.061)"
            style={{
              fontSize: 16,
              fill: "#44b5f4",
              fontFamily: "Bungee-Regular, Bungee",
            }}
          >
            {"c"}
            <tspan
              x={10.048}
              y={0}
              style={{
                letterSpacing: "-0.00494384765625em",
              }}
            >
              {"r"}
            </tspan>
            <tspan
              x={21.856}
              y={0}
              style={{
                letterSpacing: "-0.00006103515625em",
              }}
            >
              {"o"}
            </tspan>
            <tspan
              x={33.647}
              y={0}
              style={{
                letterSpacing: "-0.0050048828125em",
              }}
            >
              {"s"}
            </tspan>
            <tspan x={43.968} y={0}>
              {"s"}
            </tspan>
          </text>
          <polygon
            points="62.853 178.659 74.853 184.659 62.853 190.659 62.853 178.659"
            style={{
              fill: "#44b5f4",
            }}
          />
          <text
            id="CrossStartEnd_Text_CrossEnd-2"
            data-name="CrossStartEnd_Text_CrossEnd"
            transform="translate(12.349 200.412)"
            style={{
              fontSize: 16,
              fill: "#44b5f4",
              fontFamily: "Bungee-Regular, Bungee",
            }}
          >
            {"end"}
          </text>
        </g>
      </g>
      <g>
        <g className={`startend-down`}>
          <text
            id="CrossStartEnd-Text-MainStart-2"
            data-name="CrossStartEnd-Text-MainStart"
            transform="translate(52.367 263.742)"
            style={{
              fontSize: 16,
              fill: "#44b5f4",
              fontFamily: "Bungee-Regular, Bungee",
            }}
          >
            {"Main"}
            <tspan
              x={-3.264}
              y={16}
              style={{
                letterSpacing: "-0.010009765625em",
              }}
            >
              {"s"}
            </tspan>
            <tspan
              x={6.976}
              y={16}
              style={{
                letterSpacing: "-0.03997802734375em",
              }}
            >
              {"t"}
            </tspan>
            <tspan x={16.832} y={16}>
              {"a"}
            </tspan>
            <tspan
              x={28.512}
              y={16}
              style={{
                letterSpacing: "-0.02996826171875em",
              }}
            >
              {"r"}
            </tspan>
            <tspan
              x={39.92}
              y={16}
              style={{
                letterSpacing: "-0.010009765625em",
              }}
            >
              {"t"}
            </tspan>
          </text>
          <line
            id="CrossStartEnd_Arrow-DownLine-4"
            data-name="CrossStartEnd_Arrow-DownLine"
            x1={75.853}
            y1={249.953}
            x2={75.853}
            y2={198.659}
            style={{
              fill: "none",
              stroke: "#44b5f4",
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <polygon
            points="69.853 198.659 75.853 186.659 81.853 198.659 69.853 198.659"
            style={{
              fill: "#44b5f4",
            }}
          />
        </g>
        <g className={`startend-down`}>
          <text
            id="CrossStartEnd-Text-MainStart"
            transform="translate(208.367 263.742)"
            style={{
              fontSize: 16,
              fill: "#44b5f4",
              fontFamily: "Bungee-Regular, Bungee",
            }}
          >
            {"Main"}
            <tspan x={6.272} y={16}>
              {"END"}
            </tspan>
          </text>
          <line
            id="CrossStartEnd_Arrow-DownLine-3"
            data-name="CrossStartEnd_Arrow-DownLine"
            x1={231.853}
            y1={249.953}
            x2={231.853}
            y2={198.659}
            style={{
              fill: "none",
              stroke: "#44b5f4",
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <polygon
            points="225.853 198.659 231.853 186.659 237.853 198.659 225.853 198.659"
            style={{
              fill: "#44b5f4",
            }}
          />
        </g>
      </g>
    </g>
  );
}

export default TerminologyFlexboxStartEnd;
