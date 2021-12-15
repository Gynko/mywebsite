/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect } from "react";

import "./SvgFlexbox.styles.css";

import { gsap } from "gsap";

function SvgFlexbox({ name, axis, size, startend }) {
  const tlSize = gsap.timeline();
  const tlStartEnd = gsap.timeline();

  function animSize() {
    gsap.set(".size-up", { opacity: 0, y: -50 });
    gsap.set(".size-right", { opacity: 0, x: 50 });
    tlSize.to(".size-up", {
      duration: 0.3,
      opacity: 1,
      y: 0,
      ease: "bounce",
    });
    tlSize.to(".size-right", {
      duration: 0.3,
      opacity: 1,
      x: 0,
      ease: "bounce",
    });
  }
  function animStartEnd() {
    gsap.set(".startend-left", { opacity: 0, x: -50 });
    gsap.set(".startend-down", { opacity: 0, y: 50 });
    tlStartEnd.to(".startend-left", {
      duration: 0.3,
      opacity: 1,
      x: 0,
      ease: "bounce",
    });
    tlStartEnd.to(".startend-down", {
      duration: 0.3,
      opacity: 1,
      y: 0,
      ease: "bounce",
    });
  }

  useLayoutEffect(() => {
    animSize();
    return function cleanup() {
      gsap.set(".size-up", { opacity: 0, y: -50 });
      gsap.set(".size-right", { opacity: 0 });
      tlSize.kill();
    };
  }, [size]);

  useLayoutEffect(() => {
    animStartEnd();
    return function cleanup() {
      gsap.set(".startend-left", { opacity: 0, x: -50 });
      gsap.set(".startend-down", { opacity: 0, y: 50 });
      tlStartEnd.kill();
    };
  }, [startend]);

  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 308.34 294.4"
      className="svg-flexbox"
      preserveAspectRatio="xMidYMid meet"
    >
      <g className={`Size-${size}`}>
        <g className="size-right">
          <polyline
            id="Size-Text-Cross"
            points="235.898 98.953 244.853 98.953 244.853 184.953 235.853 184.953"
            style={{
              fill: "none",
              stroke: "#31df4d",
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <polygon
            id="Size-Arrow-RightUp"
            points="232.433 98.736 240 104.736 240 92.736 232.433 98.736"
            style={{
              fill: "#31df4d",
            }}
          />
          <text
            id="Size-Text-Cross-2"
            data-name="Size-Text-Cross"
            transform="translate(249.78 108.705)"
            style={{
              fontSize: 16,
              fill: "#31df4d",
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
            <tspan x={6.632} y={16}>
              {"size"}
            </tspan>
          </text>
          <polygon
            id="Size-Arrow-RightDown"
            points="232.433 184.736 240 190.736 240 178.736 232.433 184.736"
            style={{
              fill: "#31df4d",
            }}
          />
        </g>
        <g className="size-up">
          <polyline
            id="Size-Text-Cross-3"
            data-name="Size-Text-Cross"
            points="75 89.908 75 80.953 233 80.953 233 89.953"
            style={{
              fill: "none",
              stroke: "#31df4d",
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <polygon
            id="Size-Arrow-RightDown-2"
            data-name="Size-Arrow-RightDown"
            points="232.643 97.519 238.643 89.953 226.643 89.953 232.643 97.519"
            style={{
              fill: "#31df4d",
            }}
          />
          <text
            id="Size-Text-Main"
            transform="translate(69.467 60.412)"
            style={{
              fontSize: 16,
              fill: "#31df4d",
              fontFamily: "Bungee-Regular, Bungee",
            }}
          >
            {"main"}
            <tspan x={2.944} y={16}>
              {"size"}
            </tspan>
          </text>
          <polygon
            id="Size-Arrow-RightDown-3"
            data-name="Size-Arrow-RightDown"
            points="74.643 97.519 80.643 89.953 68.643 89.953 74.643 97.519"
            style={{
              fill: "#31df4d",
            }}
          />
        </g>
      </g>
      <g className={`flexbox-term-axis Axis-${axis}`}>
        <g id="Axis-Cross">
          <text
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
            id="CrossStartEnd_Arrow-DownLine"
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
            points="159.853 271.659 153.853 283.659 147.853 271.659 159.853 271.659"
            style={{
              fill: "#ffa9a9",
            }}
          />
        </g>
        <g id="Axis-main">
          <polygon
            id="CrossStartEnd_Arrow-Down"
            points="299 135.705 299 148.269 308.344 142.205 299 135.705"
            style={{
              fill: "#ffa9a9",
            }}
          />
          <text
            transform="translate(4.806 138.505)"
            style={{
              fontSize: "16.865280151367188px",
              fill: "#ffa9a9",
              fontFamily: "Bungee-Regular, Bungee",
            }}
          >
            {"main"}
          </text>
          <line
            id="CrossStartEnd_Arrow-DownLine-2"
            data-name="CrossStartEnd_Arrow-DownLine"
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
      <g className={`flexbox-term-startend StartEnd-${startend}`}>
        <g className="startend-left">
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
            id="CrossStartEnd_Arrow-DownLine-3"
            data-name="CrossStartEnd_Arrow-DownLine"
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
          <text
            id="CrossStartEnd-Text-CrossStart-2"
            data-name="CrossStartEnd-Text-CrossStart"
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
          <line
            id="CrossStartEnd_Arrow-DownLine-4"
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
        <g className="startend-down">
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
            id="CrossStartEnd_Arrow-DownLine-5"
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
            id="CrossStartEnd_Arrow-DownLine-6"
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
      </g>
      <g id="Items">
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
          id="Item1"
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
          id="Item1-2"
          data-name="Item1"
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
      <g className={`flexbox-term-name Name-${name}`}>
        <text
          transform="translate(79.65 112.711)"
          style={{
            fontSize: 16,
            fontFamily: "Bungee-Regular, Bungee",
          }}
        >
          {"FLEX-"}
          <tspan
            x={49.983}
            y={0}
            style={{
              letterSpacing: "-0.0050048828125em",
            }}
          >
            {"C"}
          </tspan>
          <tspan x={59.951} y={0}>
            {"ON"}
          </tspan>
          <tspan
            x={83.791}
            y={0}
            style={{
              letterSpacing: "-0.03997802734375em",
            }}
          >
            {"T"}
          </tspan>
          <tspan x={93.647} y={0}>
            {"AINER"}
          </tspan>
        </text>
        <text
          transform="translate(167.096 162.711)"
          style={{
            fontSize: 16,
            fontFamily: "Bungee-Regular, Bungee",
          }}
        >
          {"flex-"}
          <tspan x={-4.032} y={16}>
            {"item 2"}
          </tspan>
        </text>
        <text
          id="flex-_item_1"
          data-name="flex- item 1"
          transform="translate(91.362 162.711)"
          style={{
            fontSize: 16,
            fontFamily: "Bungee-Regular, Bungee",
          }}
        >
          {"flex-"}
          <tspan x={-3.728} y={16}>
            {"item 1 "}
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default SvgFlexbox;
