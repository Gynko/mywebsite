import HeaderDesktop from "../../components/HeaderDesktop/HeaderDesktop";
import HeaderMobile from "../../components/HeaderMobile/HeaderMobile";
import "./PageHome.styles.css";

function PageHome() {
  return (
    <div className="page-container">
      <HeaderMobile />
      <HeaderDesktop />
      <div className="content">
        <p className="content-text content-text-title">The dev' Rabbit Hole</p>
        <p className="content-text content-text-subtext">
          A journey inside of Frontend Wonderland
        </p>
      </div>
    </div>
  );
}

export default PageHome;
