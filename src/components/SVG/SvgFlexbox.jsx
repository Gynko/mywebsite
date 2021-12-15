import { useEffect } from "react";

import "./SvgFlexbox.styles.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { EaselPlugin } from "gsap/EaselPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { Flip } from "gsap/Flip";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
import { PhysicsPropsPlugin } from "gsap/PhysicsPropsPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(
  ScrollTrigger,
  ScrollToPlugin,
  Draggable,
  EaselPlugin,
  MotionPathPlugin,
  PixiPlugin,
  TextPlugin,
  Flip,
  DrawSVGPlugin,
  GSDevTools,
  InertiaPlugin,
  MorphSVGPlugin,
  MotionPathHelper,
  Physics2DPlugin,
  PhysicsPropsPlugin,
  ScrambleTextPlugin,
  SplitText
);

function SvgFlexbox({ name, axis, size, startend }) {
  useEffect(() => {
    gsap.set(".flexbox-term-size", { transformOrigin: "50% 50%" });
    gsap.from(".flexbox-term-size", {
      duration: 1,
      x: 30,
      ease: "elastic",
    });
  });

  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 308.34 294.4"
      className="svg-flexbox"
      preserveAspectRatio="xMidYMid meet"
    >
      <g className={`flexbox-term-size Size-${size}`}>
        <polyline
          id="Size-Text-Cross"
          points="235.9 98.95 244.85 98.95 244.85 184.95 235.85 184.95"
          style={{
            fill: "none",
            stroke: "#31df4d",
            strokeMiterlimit: 10,
            strokeWidth: 4,
          }}
        />
        <polygon
          id="Size-Arrow-RightUp"
          points="232.43 98.74 240 104.74 240 92.74 232.43 98.74"
          style={{
            fill: "#31df4d",
          }}
        />
        <polygon
          id="Size-Arrow-RightDown"
          points="232.43 184.74 240 190.74 240 178.74 232.43 184.74"
          style={{
            fill: "#31df4d",
          }}
        />
        <polyline
          id="Size-Text-Cross-2"
          data-name="Size-Text-Cross"
          points="75 89.91 75 80.95 233 80.95 233 89.95"
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
          points="232.64 97.52 238.64 89.95 226.64 89.95 232.64 97.52"
          style={{
            fill: "#31df4d",
          }}
        />
        <polygon
          id="Size-Arrow-RightDown-3"
          data-name="Size-Arrow-RightDown"
          points="74.64 97.52 80.64 89.95 68.64 89.95 74.64 97.52"
          style={{
            fill: "#31df4d",
          }}
        />
        <text
          id="Size-Text-Main"
          transform="translate(69.47 60.41)"
          style={{
            fontSize: 16,
            fill: "#31df4d",
            fontFamily: "Bungee-Regular, Bungee",
          }}
        >
          {"main"}
          <tspan x={2.94} y={16}>
            {"size"}
          </tspan>
        </text>
        <text
          id="Size-Text-Cross-3"
          data-name="Size-Text-Cross"
          transform="translate(249.78 108.71)"
          style={{
            fontSize: 16,
            fill: "#31df4d",
            fontFamily: "Bungee-Regular, Bungee",
          }}
        >
          {"c"}
          <tspan
            x={10.05}
            y={0}
            style={{
              letterSpacing: "-0.00494384765625em",
            }}
          >
            {"r"}
          </tspan>
          <tspan
            x={21.86}
            y={0}
            style={{
              letterSpacing: "-0.00006103515625em",
            }}
          >
            {"o"}
          </tspan>
          <tspan
            x={33.65}
            y={0}
            style={{
              letterSpacing: "-0.0050048828125em",
            }}
          >
            {"s"}
          </tspan>
          <tspan x={43.97} y={0}>
            {"s"}
          </tspan>
          <tspan x={6.63} y={16}>
            {"size"}
          </tspan>
        </text>
      </g>
      <g className={`flexbox-term-axis Axis-${axis}`}>
        <polygon
          id="CrossStartEnd_Arrow-Down"
          points="299 135.71 299 148.27 308.34 142.21 299 135.71"
          style={{
            fill: "#ffa9a9",
          }}
        />
        <text
          transform="translate(127.32 13.76)"
          style={{
            fontSize: 16,
            fill: "#ffa9a9",
            fontFamily: "Bungee-Regular, Bungee",
          }}
        >
          {"C"}
          <tspan
            x={10.05}
            y={0}
            style={{
              letterSpacing: "-0.004974365234375em",
            }}
          >
            {"R"}
          </tspan>
          <tspan x={21.86} y={0}>
            {"O"}
          </tspan>
          <tspan
            x={33.65}
            y={0}
            style={{
              letterSpacing: "-0.0050048828125em",
            }}
          >
            {"S"}
          </tspan>
          <tspan
            x={43.97}
            y={0}
            style={{
              letterSpacing: "0.000030517578125em",
            }}
          >
            {"S"}
          </tspan>
          <tspan x={5.41} y={16}>
            {"axis"}
          </tspan>
        </text>
        <text
          transform="translate(4.81 138.5)"
          style={{
            fontSize: "16.86528205871582px",
            fill: "#ffa9a9",
            fontFamily: "Bungee-Regular, Bungee",
          }}
        >
          {"main"}
        </text>
        <line
          id="CrossStartEnd_Arrow-DownLine"
          x1={153.85}
          y1={31.95}
          x2={153.85}
          y2={271.66}
          style={{
            fill: "none",
            stroke: "#ffa9a9",
            strokeMiterlimit: 10,
            strokeWidth: 4,
          }}
        />
        <line
          id="CrossStartEnd_Arrow-DownLine-2"
          data-name="CrossStartEnd_Arrow-DownLine"
          x1={300.71}
          y1={141.81}
          y2={141.81}
          style={{
            fill: "none",
            stroke: "#ffa9a9",
            strokeMiterlimit: 10,
            strokeWidth: 4,
          }}
        />
        <polygon
          points="159.85 271.66 153.85 283.66 147.85 271.66 159.85 271.66"
          style={{
            fill: "#ffa9a9",
          }}
        />
        <text
          transform="translate(7.8 157.76)"
          style={{
            fontSize: 16,
            fill: "#ffa9a9",
            fontFamily: "Bungee-Regular, Bungee",
          }}
        >
          {"axis"}
        </text>
      </g>
      <g className={`flexbox-term-startend StartEnd-${startend}`}>
        <text
          id="CrossStartEnd_Text_CrossEnd"
          transform="translate(2.39 94.41)"
          style={{
            fontSize: 16,
            fill: "#44b5f4",
            fontFamily: "Bungee-Regular, Bungee",
          }}
        >
          {"c"}
          <tspan
            x={10.05}
            y={0}
            style={{
              letterSpacing: "-0.00494384765625em",
            }}
          >
            {"r"}
          </tspan>
          <tspan
            x={21.86}
            y={0}
            style={{
              letterSpacing: "-0.00006103515625em",
            }}
          >
            {"o"}
          </tspan>
          <tspan
            x={33.65}
            y={0}
            style={{
              letterSpacing: "-0.0050048828125em",
            }}
          >
            {"s"}
          </tspan>
          <tspan x={43.97} y={0}>
            {"s"}
          </tspan>
        </text>
        <line
          id="CrossStartEnd_Arrow-DownLine-3"
          data-name="CrossStartEnd_Arrow-DownLine"
          y1={98.66}
          x2={62.85}
          y2={98.66}
          style={{
            fill: "none",
            stroke: "#44b5f4",
            strokeMiterlimit: 10,
            strokeWidth: 4,
          }}
        />
        <text
          id="CrossStartEnd-Text-CrossStart"
          transform="translate(2.39 180.06)"
          style={{
            fontSize: 16,
            fill: "#44b5f4",
            fontFamily: "Bungee-Regular, Bungee",
          }}
        >
          {"c"}
          <tspan
            x={10.05}
            y={0}
            style={{
              letterSpacing: "-0.00494384765625em",
            }}
          >
            {"r"}
          </tspan>
          <tspan
            x={21.86}
            y={0}
            style={{
              letterSpacing: "-0.00006103515625em",
            }}
          >
            {"o"}
          </tspan>
          <tspan
            x={33.65}
            y={0}
            style={{
              letterSpacing: "-0.0050048828125em",
            }}
          >
            {"s"}
          </tspan>
          <tspan x={43.97} y={0}>
            {"s"}
          </tspan>
        </text>
        <text
          id="CrossStartEnd-Text-CrossStart-2"
          data-name="CrossStartEnd-Text-CrossStart"
          transform="translate(3.81 115.06)"
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
            x={20.1}
            y={0}
            style={{
              letterSpacing: "0.00006103515625em",
            }}
          >
            {"a"}
          </tspan>
          <tspan
            x={31.78}
            y={0}
            style={{
              letterSpacing: "-0.030029296875em",
            }}
          >
            {"r"}
          </tspan>
          <tspan
            x={43.18}
            y={0}
            style={{
              letterSpacing: "-0.010009765625em",
            }}
          >
            {"t"}
          </tspan>
        </text>
        <text
          id="CrossStartEnd-Text-MainStart"
          transform="translate(208.37 263.74)"
          style={{
            fontSize: 16,
            fill: "#44b5f4",
            fontFamily: "Bungee-Regular, Bungee",
          }}
        >
          {"Main"}
          <tspan x={6.27} y={16}>
            {"END"}
          </tspan>
        </text>
        <polygon
          points="62.85 92.66 74.85 98.66 62.85 104.66 62.85 92.66"
          style={{
            fill: "#44b5f4",
          }}
        />
        <line
          id="CrossStartEnd_Arrow-DownLine-4"
          data-name="CrossStartEnd_Arrow-DownLine"
          y1={184.66}
          x2={62.85}
          y2={184.66}
          style={{
            fill: "none",
            stroke: "#44b5f4",
            strokeMiterlimit: 10,
            strokeWidth: 4,
          }}
        />
        <polygon
          points="62.85 178.66 74.85 184.66 62.85 190.66 62.85 178.66"
          style={{
            fill: "#44b5f4",
          }}
        />
        <line
          id="CrossStartEnd_Arrow-DownLine-5"
          data-name="CrossStartEnd_Arrow-DownLine"
          x1={231.85}
          y1={249.95}
          x2={231.85}
          y2={198.66}
          style={{
            fill: "none",
            stroke: "#44b5f4",
            strokeMiterlimit: 10,
            strokeWidth: 4,
          }}
        />
        <polygon
          points="225.85 198.66 231.85 186.66 237.85 198.66 225.85 198.66"
          style={{
            fill: "#44b5f4",
          }}
        />
        <text
          id="CrossStartEnd-Text-MainStart-2"
          data-name="CrossStartEnd-Text-MainStart"
          transform="translate(52.37 263.74)"
          style={{
            fontSize: 16,
            fill: "#44b5f4",
            fontFamily: "Bungee-Regular, Bungee",
          }}
        >
          {"Main"}
          <tspan
            x={-3.26}
            y={16}
            style={{
              letterSpacing: "-0.010009765625em",
            }}
          >
            {"s"}
          </tspan>
          <tspan
            x={6.98}
            y={16}
            style={{
              letterSpacing: "-0.03997802734375em",
            }}
          >
            {"t"}
          </tspan>
          <tspan x={16.83} y={16}>
            {"a"}
          </tspan>
          <tspan
            x={28.51}
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
          x1={75.85}
          y1={249.95}
          x2={75.85}
          y2={198.66}
          style={{
            fill: "none",
            stroke: "#44b5f4",
            strokeMiterlimit: 10,
            strokeWidth: 4,
          }}
        />
        <polygon
          points="69.85 198.66 75.85 186.66 81.85 198.66 69.85 198.66"
          style={{
            fill: "#44b5f4",
          }}
        />
        <text
          id="CrossStartEnd_Text_CrossEnd-2"
          data-name="CrossStartEnd_Text_CrossEnd"
          transform="translate(12.35 200.41)"
          style={{
            fontSize: 16,
            fill: "#44b5f4",
            fontFamily: "Bungee-Regular, Bungee",
          }}
        >
          {"end"}
        </text>
      </g>
      <g>
        <rect
          id="Container"
          x={75}
          y={98.45}
          width={158}
          height={87}
          rx={5.12}
          style={{
            fill: "#7b728f",
          }}
        />
        <rect
          id="Item1"
          x={156.32}
          y={114.95}
          width={71.54}
          height={67}
          rx={7}
          style={{
            fill: "#f4ae44",
          }}
        />
        <rect
          id="Item1-2"
          data-name="Item1"
          x={80.58}
          y={114.95}
          width={71.54}
          height={67}
          rx={7}
          style={{
            fill: "#f4ae44",
          }}
        />
      </g>
      <g className={`flexbox-term-name Name-${name}`}>
        <text
          transform="translate(79.65 112.71)"
          style={{
            fontSize: 16,
            fontFamily: "Bungee-Regular, Bungee",
          }}
        >
          {"FLEX-"}
          <tspan
            x={49.98}
            y={0}
            style={{
              letterSpacing: "-0.0050048828125em",
            }}
          >
            {"C"}
          </tspan>
          <tspan x={59.95} y={0}>
            {"ON"}
          </tspan>
          <tspan
            x={83.79}
            y={0}
            style={{
              letterSpacing: "-0.03997802734375em",
            }}
          >
            {"T"}
          </tspan>
          <tspan x={93.65} y={0}>
            {"AINER"}
          </tspan>
        </text>
        <text
          transform="translate(167.1 162.71)"
          style={{
            fontSize: 16,
            fontFamily: "Bungee-Regular, Bungee",
          }}
        >
          {"flex-"}
          <tspan x={-4.03} y={16}>
            {"item 2"}
          </tspan>
        </text>
        <text
          id="flex-_item_1"
          data-name="flex- item 1"
          transform="translate(91.36 162.71)"
          style={{
            fontSize: 16,
            fontFamily: "Bungee-Regular, Bungee",
          }}
        >
          {"flex-"}
          <tspan x={-3.73} y={16}>
            {"item 1 "}
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default SvgFlexbox;
