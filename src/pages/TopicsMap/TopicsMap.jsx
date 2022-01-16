import ButtonLink from "../../components/ButtonLink/ButtonLink";
import Footer from "../../components/Footer/Footer";
import PageContainerColumn from "../../components/PageContainerColumn/PageContainerColumn";

import "./TopicsMap.styles.css";

function TopicsMap() {
  return (
    <PageContainerColumn justifyContentCenter="justify-content-center">
      <div className="topics-container">
        <ButtonLink
          name="flexbox"
          value="flexbox"
          label="Flexbox"
          link="true"
          to="/cheatsheets/flexbox"
        />
      </div>
      <Footer />
    </PageContainerColumn>
  );
}

export default TopicsMap;
