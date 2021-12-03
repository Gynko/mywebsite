import "./PageHome.styles.css";
import IconRabbitHole from "../../components/Icons/IconRabbitHole";

function PageHome() {
  return (
    <div className="page-home-container">
      <IconRabbitHole />
      <h1 className="page-home-title">
        Cheat Sheets <br />
        Wonderland
      </h1>
      <main className="page-home-undertext">
        <p className="undertext1">Because web development is</p>
        <p className="undertext2">
          a<span className="page-home-undertext-accentcolor">-</span>
          maze<span className="page-home-undertext-accentcolor">-</span>
          ing
        </p>
      </main>
      <footer className="footer">
        Made with Love & Compassion by Yoann Godiet.
        <br />
        Frontend React developer i Sandefjord.
      </footer>
    </div>
  );
}

export default PageHome;
