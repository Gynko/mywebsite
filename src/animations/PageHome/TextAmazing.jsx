import { useRef, useEffect } from "react";
import { gsap } from "gsap";

import "./TextAmazing.styles.css";

function TextAmazing() {
  const wobble = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const mazeText = useRef(null);

  function animation() {
    gsap.set(mazeText.current, { opacity: 1, transformOrigin: "0% 50%" });
    wobble.to(mazeText.current, {
      duration: 0.3,
      opacity: 0,
    });
    wobble.to(mazeText.current, {
      duration: 0.3,
      opacity: 1,
    });
  }
  useEffect(() => {
    animation();
    return function cleanup() {
      wobble.kill();
    };
  });

  return (
    <h2 className="text-a-maze-ing">
      A<span className="text-a-maze-ing-accent">-</span>
      <div ref={mazeText} className="text-to-animate">
        MAZE
      </div>
      <span className="text-a-maze-ing-accent">-</span>
      ING
    </h2>
  );
}

export default TextAmazing;
