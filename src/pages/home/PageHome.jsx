import "./PageHome.styles.css";
import IconRabbitHole from "../../components/Icons/IconRabbitHole";
import Footer from "../../components/Footer/Footer";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import TitleFrontendWonderland from "../../components/TitleFrontendWonderland/TitleFrontendWonderland";
import HeadlineText from "../../components/HeadlineText/HeadlineText";
import TextAmazing from "../../animations/PageHome/TextAmazing";

function PageHome() {
  return (
    <div className="page-home-container">
      <div className="page-home-icon-rabbit-hole">
        <IconRabbitHole />
      </div>
      <TitleFrontendWonderland />
      <main className="page-home-main margin-top-medium">
        <HeadlineText>Cheat sheets and articles.</HeadlineText>
        <HeadlineText>Because web development can be quite</HeadlineText>
        <TextAmazing />
      </main>
      <div className="page-home-buttonlink-container">
        <ButtonLink
          label="choose a topic"
          marginTop="small"
          to="/topics-map"
          color="pink"
        />
      </div>
      <Footer />
    </div>
  );
}

export default PageHome;
