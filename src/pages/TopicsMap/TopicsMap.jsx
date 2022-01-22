import ButtonLink from "../../components/ButtonLink/ButtonLink";
import PageContainerCenter from "../../components/PageContainerCenter/PageContainerCenter";
import TopicsLinks from "../../components/TopicsLinks/TopicsLinks";

import "./TopicsMap.styles.css";

function TopicsMap() {
  return (
    <PageContainerCenter>
      <div className="topics-container">
        <p className="text">Released:</p>
        <TopicsLinks title={`Flexbox:\nCheat Sheet`} />
      </div>
      <p className="text">Incoming:</p>
      <div className="topics-container">
        <TopicsLinks theme="react" title="Flexbox Cheat Sheet" />
        <TopicsLinks
          theme="javascript"
          title={`The coercion system:\nDown the rabbit hole`}
        />
      </div>
    </PageContainerCenter>
  );
}

export default TopicsMap;
