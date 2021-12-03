import "./PageHome.styles.css";
import IconRabbitHole from "../../components/Icons/IconRabbitHole";

function PageHome() {
  return (
    <div className="page-home-container">
      <IconRabbitHole />
      <h1 className="page-home-title">The dev Rabbit Hole</h1>
      <h2 className="page-home-undertext">webdev is a-maze-ing</h2>
      <main className="page-home-description">
        Welcome to
        <br />
        Cheat Sheets Wonderland
      </main>
    </div>
  );
}

export default PageHome;
