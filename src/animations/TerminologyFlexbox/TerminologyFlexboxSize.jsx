/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect } from "react/cjs/react.development";
import { gsap } from "gsap";

import "./TerminologyFlexboxSize.styles.css";

function TerminologyFlexboxSize({ size }) {
  const tlSize = gsap.timeline();
  function animSize() {
    gsap.set(".size-up-line", { scaleX: 0 });
    gsap.set(".size-up-right-arrow", { x: -156 });
    gsap.set(".size-right-line", { scaleY: 0 });
    gsap.set(".size-right-down-arrow", { y: -86 });

    tlSize.to(
      ".size-up-line",
      {
        duration: 0.5,
        scaleX: 1,
        ease: "bounce",
      },
      "first"
    );
    tlSize.to(
      ".size-up-right-arrow",
      {
        duration: 0.5,
        ease: "bounce",
        x: 0,
      },
      "first"
    );

    tlSize.to(
      ".size-right-line",
      {
        duration: 0.5,
        scaleY: 1,
        ease: "bounce",
      },
      "second"
    );
    tlSize.to(
      ".size-right-down-arrow",
      {
        duration: 0.5,
        ease: "bounce",
        y: 0,
      },
      "second"
    );
  }

  useLayoutEffect(() => {
    animSize();
    return function cleanup() {
      tlSize.kill();
    };
  }, [size]);

  return (
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
      <g id="size-right-arrows">
        <polygon
          className="size-right-line"
          points="245.353 100.748 249.316 100.748 249.33 184.659 245.34 184.659 245.353 100.748"
          style={{
            fill: "#31df4d",
          }}
        />
        <polygon
          className="size-right-down-arrow"
          points="249.33 183.814 240.567 183.814 240.567 179.453 233 185.453 240.567 191.453 240.567 187.772 249.33 187.805 249.33 183.814"
          style={{
            fill: "#31df4d",
          }}
        />
        <polygon
          className="size-right-up-arrow"
          points="249.33 97.312 240.567 97.312 240.567 92.951 233 98.951 240.567 104.951 240.567 101.27 249.33 101.303 249.33 97.312"
          style={{
            fill: "#31df4d",
          }}
        />
      </g>
      <g id="size-up-arrows">
        <polygon
          className="size-up-right-arrow"
          points="230.214 78.944 230.214 89.953 225.853 89.953 231.853 97.519 237.853 89.953 234.172 89.953 234.205 78.944 230.214 78.944"
          style={{
            fill: "#31df4d",
          }}
        />
        <polygon
          className="size-up-line"
          points="74.427 82.935 74.427 78.972 231.925 78.958 231.925 82.948 74.427 82.935"
          style={{
            fill: "#31df4d",
          }}
        />
        <polygon
          className="size-up-left-arrow"
          points="73.471 78.944 73.471 89.953 69.11 89.953 75.11 97.519 81.11 89.953 77.429 89.953 77.462 78.944 73.471 78.944"
          style={{
            fill: "#31df4d",
          }}
        />
      </g>
    </g>
  );
}

export default TerminologyFlexboxSize;
