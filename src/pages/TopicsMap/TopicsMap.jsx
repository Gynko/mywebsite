import ButtonLink from "../../components/ButtonLink/ButtonLink";
import Footer from "../../components/Footer/Footer";
import PageContainerNoScroll from "../../components/PageContainerNoScroll/PageContainerNoScroll";
import "./TopicsMap.styles.css";

function TopicsMap() {
  return (
    <PageContainerNoScroll>
      <div className="topics-container">
        <ButtonLink
          name="Hello"
          value="he"
          label="Flexbox"
          link="true"
          to="/cheatsheets/flexbox"
        />
      </div>
      <Footer />
    </PageContainerNoScroll>
  );
}

export default TopicsMap;
