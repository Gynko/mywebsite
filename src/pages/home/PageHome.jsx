import "./PageHome.styles.css";
import IconRabbitHole from "../../components/Icons/IconRabbitHole";
import Footer from "../../components/Footer/Footer";

function PageHome() {
  return (
    <div className="page-home-container">
      <div className="containerlogo">
        <IconRabbitHole />
        <h1 className="page-home-title">
          Cheat Sheets <br />
          Wonderland
        </h1>
        <main className="page-home-undertext">
          <p className="undertext1">Because web development is an</p>
          <p className="undertext2">
            a<span className="page-home-undertext-accentcolor">-</span>
            maze<span className="page-home-undertext-accentcolor">-</span>
            ing
          </p>
          <p className="undertext3">Rabbit hole</p>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default PageHome;
