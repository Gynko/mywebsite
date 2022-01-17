import ButtonLink from "../../components/ButtonLink/ButtonLink";
import Footer from "../../components/Footer/Footer";
import PageContainerColumn from "../../components/PageContainerColumn/PageContainerColumn";

import "./TopicsMap.styles.css";

function TopicsMap() {
  return (
    <PageContainerColumn justifyContentCenter="justify-content-center">
      <p className="text text-margin-none">Disclaimer:</p>
      <p className="text">
        Frontend Wonderland is in an early development phase. You will be
        celebrated and worshiped for reporting errors, imprecisions and/or bugs
        on my github page :).
      </p>
      <p className="text">Each topic can contain 3 types of material:</p>
      <p className="text">1- A Knowledge base</p>
      <p className="text">2- A Learning path</p>
      <p className="text">3- Cheat Sheet(s)</p>
      <p className="text">
        The knowledge base is a document with all that there is to know on a
        given topic.
      </p>
      <p className="text">
        The learning path is a document to learn all the information contained
        in the knowledge base.
      </p>
      <p className="text">A cheat sheet is a summary of the knowledge base.</p>
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
