/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect } from "react";

import "./SvgFlexbox.styles.css";

import { gsap } from "gsap";

function SvgFlexbox({ name, axis, size, startend }) {
  const tlStartEnd = gsap.timeline();

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
      stagger: 0.5,
      ease: "bounce",
    });
  }

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
      <g className={`size-${size}`}>
        <g id="Size-right-text">
          <text
            id="Size-Text-Cross"
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
        </g>
        <g id="Size-up-text">
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
        </g>
        <polygon
          id="size-ight-line"
          points="245.353 100.748 249.316 100.748 249.33 184.659 245.34 184.659 245.353 100.748"
          style={{
            fill: "#31df4d",
          }}
        />
        <polygon
          id="size-right-down-arrow"
          points="249.33 183.814 240.567 183.814 240.567 179.453 233 185.453 240.567 191.453 240.567 187.772 249.33 187.805 249.33 183.814"
          style={{
            fill: "#31df4d",
          }}
        />
        <polygon
          id="size-right-uparrow"
          points="249.33 97.312 240.567 97.312 240.567 92.951 233 98.951 240.567 104.951 240.567 101.27 249.33 101.303 249.33 97.312"
          style={{
            fill: "#31df4d",
          }}
        />
        <polygon
          id="size-up-right"
          points="230.214 78.944 230.214 89.953 225.853 89.953 231.853 97.519 237.853 89.953 234.172 89.953 234.205 78.944 230.214 78.944"
          style={{
            fill: "#31df4d",
          }}
        />
        <polygon
          id="size-up-line"
          points="74.427 82.935 74.427 78.972 231.925 78.958 231.925 82.948 74.427 82.935"
          style={{
            fill: "#31df4d",
          }}
        />
        <polygon
          id="size-up-left-arrow"
          points="73.471 78.944 73.471 89.953 69.11 89.953 75.11 97.519 81.11 89.953 77.429 89.953 77.462 78.944 73.471 78.944"
          style={{
            fill: "#31df4d",
          }}
        />
      </g>
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
            id="axis-cross-line"
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
            id="axis-cross-arrow"
            points="159.853 271.659 153.853 283.659 147.853 271.659 159.853 271.659"
            style={{
              fill: "#ffa9a9",
            }}
          />
        </g>
        <g id="axis-main">
          <polygon
            id="axis-main-arrow"
            points="299 135.705 299 148.269 308.344 142.205 299 135.705"
            style={{
              fill: "#ffa9a9",
            }}
          />
          <line
            id="axis-main-line"
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
      <g className={`startEnd-${startend}`}>
        <g className="startend-left">
          <g className="startend-left-up">
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
          <g className="startend-left-down">
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
        <g className="startend-down">
          <g className="startend-down-right">
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
          <g className="startend-down-left">
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
        </g>
      </g>
      <g className={`name-${name}`}>
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
      <g id="container-items">
        <text
          id="flex-container"
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
          id="flex-_item2"
          data-name="flex- item2"
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
          id="flex-_item1"
          data-name="flex- item1"
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
