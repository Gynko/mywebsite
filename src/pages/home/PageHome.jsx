import "./PageHome.styles.css";
import IconRabbitHole from "../../components/Icons/IconRabbitHole";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import PageContainer from "../../components/PageContainer/PageContainer";

function PageHome() {
  return (
    <PageContainer>
      <div className="home-allbutfooter-container">
        <div className="home-logo-title-container">
          <IconRabbitHole />
          <h1 className="page-home-title">
            Cheat Sheets <br />
            Wonderland
          </h1>
        </div>
        <div className="home-undertext-button-container">
          <main className="flex-center-hv page-home-undertext">
            <p className="undertext1">Because web development can be an</p>
            <p className="undertext undertext2">
              a<span className="page-home-undertext-accentcolor">-</span>
              maze<span className="page-home-undertext-accentcolor">-</span>
              ing
            </p>
            <p className="undertext undertext3">Rabbit hole</p>
          </main>
          <Button
            name="Hello"
            value="he"
            label="Choose a topic"
            link="true"
            to="/topics-map"
          />
        </div>
      </div>
      <Footer />
    </PageContainer>
  );
}

export default PageHome;
