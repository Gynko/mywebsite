import "./PageHome.styles.css";
import IconRabbitHole from "../../components/Icons/IconRabbitHole";

function PageHome() {
  return (
    <div className="page-home-container">
      <IconRabbitHole />
      <h1 className="page-home-title">The dev Rabbit Hole</h1>
      <h2 className="page-home-undertext">Webdev is a.maze.ing</h2>
      <main className="page-home-description">
        Cheat Sheets <br />
        for dev stuff
      </main>
    </div>
  );
}

export default PageHome;
