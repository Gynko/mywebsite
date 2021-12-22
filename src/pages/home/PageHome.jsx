import "./PageHome.styles.css";
import IconRabbitHole from "../../components/Icons/IconRabbitHole";
import Footer from "../../components/Footer/Footer";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

function PageHome() {
  const refMaze = useRef(null);
  function animMaze() {
    var tl = gsap.timeline({ repeat: -1, yoyo: true }),
      mySplitText = new SplitText(refMaze.current, { type: "chars" }),
      chars = mySplitText.chars; //an array of all the divs that wrap each character
    gsap.set(refMaze.current, { scale: 1, transformOrigin: "0% bottom" });
    tl.from(chars, {
      duration: 0.4,
      scaleY: 1.2,
    });
  }
  useEffect(() => {
    animMaze();
  }, []);

  return (
    <div className="home-page-container">
      <div className="home-allbutfooter-container">
        <div className="home-logo-title-container">
          <div className="icon-rabbit-hole">
            <IconRabbitHole />
          </div>
          <h1 className="home-title">
            Cheat Sheets
            <br />
            Wonderland
          </h1>
        </div>
        <div className="home-undertext-container">
          <main className="home-undertext-main">
            <p className="home-undertext-normal home-undertext-1">
              Because web development can be an
            </p>
            <p className="home-undertext-big home-undertext-2">
              a<span className="home-undertext-accentcolor">-</span>
              <span ref={refMaze}>Maze</span>
              <span className="home-undertext-accentcolor">-</span>
              ing
            </p>
            <p className="home-undertext-big home-undertext-3">Rabbit hole</p>
          </main>
        </div>
        <ButtonLink
          name="Hello"
          value="he"
          label="Choose a topic"
          link="true"
          to="/topics-map"
        />
      </div>
      <Footer />
    </div>
  );
}

export default PageHome;
