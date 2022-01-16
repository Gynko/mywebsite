import { gsap } from "gsap";
import { useEffect, useRef } from "react/cjs/react.development";

function IconGap({ gap }) {
  const tlGap = gsap.timeline({ repeat: -1 });
  const tlGapColor = gsap.timeline();

  const refTopLeft = useRef(null);
  const refTopRight = useRef(null);
  const refBottomLeft = useRef(null);
  const refBottomRight = useRef(null);

  const refIcon = useRef(null);

  gsap.set(refIcon.current, { fill: "rgb(255,255,255)" });

  gsap.set(refTopLeft.current, { x: 0, y: 0 });
  gsap.set(refTopRight.current, { x: 0, y: 0 });
  gsap.set(refBottomLeft.current, { x: 0, y: 0 });
  gsap.set(refBottomRight.current, { x: 0, y: 0 });

  function animGap() {
    tlGap.to(
      refTopLeft.current,
      {
        duration: 1,
        x: 31,
        ease: "power2.out",
      },
      "first"
    );
    tlGap.to(
      refTopRight.current,
      {
        duration: 1,
        x: -31,
        ease: "power2.out",
      },
      "first"
    );
    tlGap.to(
      refBottomLeft.current,
      {
        duration: 1,
        x: 31,
        ease: "power2.out",
      },
      "first"
    );
    tlGap.to(
      refBottomRight.current,
      {
        duration: 1,
        x: -31,
        ease: "power2.out",
      },
      "first"
    );
    tlGap.to(
      refTopLeft.current,
      {
        duration: 1,
        x: 0,
        ease: "power2.out",
      },
      "second"
    );
    tlGap.to(
      refTopRight.current,
      {
        duration: 1,
        x: 0,
        ease: "power2.out",
      },
      "second"
    );
    tlGap.to(
      refBottomLeft.current,
      {
        duration: 1,
        x: 0,
        ease: "power2.out",
      },
      "second"
    );
    tlGap.to(
      refBottomRight.current,
      {
        duration: 1,
        x: 0,
        ease: "power2.out",
      },
      "second"
    );
    tlGap.to(
      refTopLeft.current,
      {
        duration: 1,
        y: 31,
        ease: "power2.out",
      },
      "third"
    );
    tlGap.to(
      refTopRight.current,
      {
        duration: 1,
        y: 31,
        ease: "power2.out",
      },
      "third"
    );
    tlGap.to(
      refBottomLeft.current,
      {
        duration: 1,
        y: -31,
        ease: "power2.out",
      },
      "third"
    );
    tlGap.to(
      refBottomRight.current,
      {
        duration: 1,
        y: -31,
        ease: "power2.out",
      },
      "third"
    );
    tlGap.to(
      refTopLeft.current,
      {
        duration: 1,
        y: 0,
        ease: "power2.out",
      },
      "fourth"
    );
    tlGap.to(
      refTopRight.current,
      {
        duration: 1,
        y: 0,
        ease: "power2.out",
      },
      "fourth"
    );
    tlGap.to(
      refBottomLeft.current,
      {
        duration: 1,
        y: 0,
        ease: "power2.out",
      },
      "fourth"
    );
    tlGap.to(
      refBottomRight.current,
      {
        duration: 1,
        y: 0,
        ease: "power2.out",
      },
      "fourth"
    );
  }

  function animGapColor() {
    tlGap.to(
      refIcon.current,
      {
        duration: 1,
        fill: "rgb(0,0,0)",
      },
      "first"
    );
    gsap.set(refIcon.current, { fill: "rgb(0,0,0)" });
  }
  useEffect(() => {
    animGap();
    return function cleanup() {
      tlGap.kill();
    };
  });

  function renderAnim() {}

  return (
    <svg
      ref={refIcon}
      id="gap-icon"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width={225.71}
      height={225.25}
      viewBox="0 0 225.71 225.25"
      style={{ fill: "white" }}
    >
      <rect ref={refTopLeft} width={84.16} height={84.16} />
      <rect ref={refTopRight} x={141.55} width={84.16} height={84.16} />
      <rect ref={refBottomLeft} y={141.09} width={84.16} height={84.16} />
      <rect
        ref={refBottomRight}
        x={141.55}
        y={141.09}
        width={84.16}
        height={84.16}
      />
    </svg>
  );
}

export default IconGap;
