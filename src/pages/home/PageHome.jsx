import Header from "../../components/Header/Header";
import Me from "../../assets/pictures/me.png";
import "./PageHome.styles.css";
import Picture from "../../components/Picture/Picture";

function PageHome() {
  return (
    <div className="page-container">
      <Header />
      <div className="content">
        <Picture path={Me} sizeX={"12rem"} alt="me" />
        <p className="content-text content-text-title">Yoann Godiet</p>
        <p className="content-text content-text-subtext">
          Frontend. React. Art
        </p>
      </div>
    </div>
  );
}

export default PageHome;
