import PageContainerCenter from "../../components/PageContainerCenter/PageContainerCenter";
import TopicsLinks from "../../components/TopicsLinks/TopicsLinks";

import "./TopicsMap.styles.css";

function TopicsMap() {
  return (
    <PageContainerCenter>
      <div className="topics-container">
        <p className="text">Released:</p>
        <TopicsLinks
          theme="css"
          title={`Flexbox:\nCheat Sheet`}
          link={true}
          to="/cheatsheets/flexbox"
        />
      </div>
      <p className="text">Incoming:</p>
      <div className="topics-container">
        <TopicsLinks theme="javascript" title={`Types:\nIn depth`} />
        <TopicsLinks theme="javascript" title={`Scope:\nThe bucket game`} />
        <TopicsLinks theme="javascript" title={`Closures`} />
        <TopicsLinks
          theme="javascript"
          title={`Variable declaration:\nWar on Var?`}
        />
        <TopicsLinks
          theme="javascript"
          title={`The Coercion System:\nDown the rabbit hole`}
        />
        <TopicsLinks theme="react" title={`React Hooks:\nGeneralities`} />
        <TopicsLinks theme="react" title={`React Hooks:\nuseState`} />
        <TopicsLinks theme="react" title={`React Hooks:\nuseEffect`} />
        <TopicsLinks theme="react" title={`React Hooks:\nuseMemo`} />
      </div>
    </PageContainerCenter>
  );
}

export default TopicsMap;
