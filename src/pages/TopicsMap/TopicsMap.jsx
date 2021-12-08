import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import PageContainer from "../../components/PageContainer/PageContainer";
import "./TopicsMap.styles.css";

function TopicsMap() {
  return (
    <PageContainer>
      <div className="topics-container">
        <Button
          name="Hello"
          value="he"
          label="Flexbox"
          link="true"
          to="/cheatsheets/flexbox"
        />
        <Button
          name="Hello"
          value="he"
          label="Css Positioning"
          link="true"
          to="/cheatsheets/csspositioning"
        />
        <Button
          name="Hello"
          value="he"
          label="Css Units"
          link="true"
          to="/cheatsheets/cssunits"
        />
      </div>
      <Footer />
    </PageContainer>
  );
}

export default TopicsMap;
