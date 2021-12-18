import ButtonLink from "../../components/ButtonLink/ButtonLink";
import Footer from "../../components/Footer/Footer";
import PageContainer from "../../components/PageContainer/PageContainer";

import "./TopicsMap.styles.css";

function TopicsMap() {
  return (
    <PageContainer>
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
    </PageContainer>
  );
}

export default TopicsMap;
