import "./PageHome.styles.css";
import IconRabbitHole from "../../components/Icons/IconRabbitHole";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

function PageHome() {
  return (
    <div className="page-home-container">
      <div className="flex-center-hv containerlogo">
        <IconRabbitHole />
        <h1 className="page-home-title">
          Cheat Sheets <br />
          Wonderland
        </h1>
        <main className="flex-center-hv page-home-undertext">
          <p className="undertext1">Because web development can be an</p>
          <p className="undertext undertext2">
            a<span className="page-home-undertext-accentcolor">-</span>
            maze<span className="page-home-undertext-accentcolor">-</span>
            ing
          </p>
          <p className="undertext undertext3">Rabbit hole</p>
        </main>
        <Button name="Hello" value="he" label="Choose a topic" />
      </div>
      <Footer />
    </div>
  );
}

export default PageHome;
