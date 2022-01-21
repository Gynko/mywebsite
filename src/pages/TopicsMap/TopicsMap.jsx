import ButtonLink from "../../components/ButtonLink/ButtonLink";
import Footer from "../../components/Footer/Footer";
import PageContainerColumn from "../../components/PageContainerColumn/PageContainerColumn";

import "./TopicsMap.styles.css";

function TopicsMap() {
  return (
    <PageContainerColumn>
      <p className="text">Released</p>
      <div className="topics-container">
        <ButtonLink
          name="flexbox"
          value="flexbox"
          label={`Flexbox\nCheat Sheet`}
          link="true"
          to="/cheatsheets/flexbox"
          color="pink"
        />
      </div>
      <Footer />
    </PageContainerColumn>
  );
}

export default TopicsMap;
