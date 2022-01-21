import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import "./TextAmazing.styles.css";
gsap.registerPlugin(SplitText);

function TextAmazing() {
  const mazeText = useRef(null);

  useEffect(() => {
    var tl = gsap.timeline({ repeat: -1, yoyo: true }),
      mySplitText = new SplitText(mazeText.current, { type: "words,chars" }),
      chars = mySplitText.chars;
    tl.from(chars, {
      duration: 1,
      opacity: 1,
      scale: 1,
      y: 1,
      rotationX: 5,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.1,
    });
    return function cleanup() {
      tl.kill();
    };
  });

  return (
    <h2 className="text-a-maze-ing">
      A<span className="text-a-maze-ing-accent">-</span>
      <span ref={mazeText} className="text-to-animate">
        MAZE
      </span>
      <span className="text-a-maze-ing-accent">-</span>
      ING
    </h2>
  );
}

export default TextAmazing;
