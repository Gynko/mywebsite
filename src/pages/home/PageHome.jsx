import "./PageHome.styles.css";
import IconRabbitHole from "../../components/Icons/IconRabbitHole";

function PageHome() {
  return (
    <div className="page-home-container">
      <IconRabbitHole />
      <h1 className="page-home-title">Cheat Sheets Wonderland</h1>
      <h2 className="page-home-undertext">
        webdev is a<span className="page-home-undertext-accentcolor">-</span>
        maze<span className="page-home-undertext-accentcolor">-</span>
        ing
      </h2>

      <footer className="footer">
        Made with Love & Compassion by Yoann Godiet.
        <br />
        Frontend React developer fra Sandefjord.
      </footer>
    </div>
  );
}

export default PageHome;
