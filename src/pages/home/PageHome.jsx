import "./PageHome.styles.css";
import IconRabbitHole from "../../components/Icons/IconRabbitHole";
import Footer from "../../components/Footer/Footer";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import PageContainerNoScroll from "../../components/PageContainerNoScroll/PageContainerNoScroll";

function PageHome() {
  return (
    <PageContainerNoScroll>
      <div className="home-allbutfooter-container">
        <div className="home-logo-title-container">
          <div className="icon-rabbit-hole">
            <IconRabbitHole />
          </div>
          <h1 className="home-title">
            Web Dev <br />
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
              Maze<span className="home-undertext-accentcolor">-</span>
              ing
            </p>
            <p className="home-undertext-big home-undertext-3">Rabbit hole</p>
          </main>
          <ButtonLink
            name="Hello"
            value="he"
            label="Choose a topic"
            link="true"
            to="/topics-map"
          />
        </div>
      </div>
      <Footer />
    </PageContainerNoScroll>
  );
}

export default PageHome;
