/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect } from "react";
import { gsap } from "gsap";

import "./TerminologyFlexboxName.styles.css";

function TerminologyFlexboxName({ name }) {
  const tlName = gsap.timeline();

  function animName() {
    gsap.set(".flex-container", { opacity: 0, transformOrigin: "50% 50%" });
    gsap.set(".flex-item1", {
      opacity: 0,
      transformOrigin: "50% 50%",
    });
    gsap.set(".flex-item2", { opacity: 0, transformOrigin: "50% 50%" });
    tlName.to(
      ".flex-container",
      {
        duration: 0.3,
        opacity: 1,
        scaleY: 6,
        scaleX: 2,
      },
      "first"
    );
    tlName.to(
      ".flex-container",
      {
        duration: 0.3,
        opacity: 1,
        scaleY: 1.0,
        scaleX: 1,
      },
      "first"
    );
    tlName.to(
      ".flex-item1",
      {
        duration: 0.15,
        opacity: 1,
        scaleX: 1.2,
      },
      "second"
    );
    tlName.to(
      ".flex-item2",
      {
        duration: 0.15,
        opacity: 1,
        scaleX: 1.2,
        ease: "bounce",
      },
      "second"
    );
    tlName.to(
      ".flex-item1",
      {
        duration: 0.4,
        opacity: 1,
        scaleX: 1,
        ease: "bounce",
      },
      "third"
    );
    tlName.to(
      ".flex-item2",
      {
        duration: 0.4,
        opacity: 1,
        scaleX: 1,
        ease: "bounce",
      },
      "third"
    );
  }

  useLayoutEffect(() => {
    animName();
    return function cleanup() {
      tlName.kill();
    };
  }, [name]);

  return (
    <g className={`name-${name}`}>
      <text
        className="flex-container"
        transform="translate(79.65 112.711)"
        style={{
          fontSize: 16,
          fontFamily: "Bungee-Regular, Bungee",
        }}
      >
        {"FLEX-CONTAINER"}
      </text>
      <text
        className="flex-item2"
        data-name="flex-item2"
        transform="translate(167.096 162.711)"
        style={{
          fontSize: 16,
          fontFamily: "Bungee-Regular, Bungee",
        }}
      >
        {`flex-`}
        <tspan className="flex-item2-2" x={-4.032} y={16}>
          {"item 2"}
        </tspan>
      </text>
      <text
        className="flex-item1"
        data-name="flex-item1"
        transform="translate(91.362 162.711)"
        style={{
          fontSize: 16,
          fontFamily: "Bungee-Regular, Bungee",
        }}
      >
        {"flex-"}
        <tspan className="flex-item1-2" x={-3.728} y={16}>
          {"item 1"}
        </tspan>
      </text>
    </g>
  );
}

export default TerminologyFlexboxName;
