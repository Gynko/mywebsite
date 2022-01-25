import { useState } from "react";

import IconCss from "../../components/Icons/IconCss";
import PageContainerCenter from "../../components/PageContainerCenter/PageContainerCenter";
import TopicsLinks from "../../components/TopicsLinks/TopicsLinks";
import LabelledIcon from "../../components/LabelledIcon/LabelledIcon";

import "./TopicsMap.styles.css";
import LabelledIconContainer from "../../components/LabelledIconContainer/LabelledIconContainer";
import IconReact from "../../components/Icons/IconReact";
import IconJavascript from "../../components/Icons/IconJavascript";
import IconHtml from "../../components/Icons/IconHtml";

function TopicsMap() {
  const [category, setCategory] = useState({
    react: null,
    css: null,
    js: null,
    html: null,
  });

  function onSetCategory(event) {
    var value = event.target.value;
    if (category[event.target.name] === null)
      setCategory({ ...category, [event.target.name]: value });
    else setCategory({ ...category, [event.target.name]: null });
  }

  return (
    <PageContainerCenter marginTop="small">
      <p className="text">Released:</p>
      <TopicsLinks
        theme="css"
        title={`Flexbox:\nCheat Sheet`}
        link={true}
        visible={true}
        to="/cheatsheets/flexbox"
      />

      <p className="text">Planned:</p>
      <div className="topics-container">
        <LabelledIconContainer>
          <LabelledIcon
            svgFile={<IconHtml />}
            title="html"
            value="html"
            name="html"
            color="black"
            activated={category["html"] === "html"}
            onClick={onSetCategory}
          />
          <LabelledIcon
            svgFile={<IconCss />}
            title="css"
            value="css"
            name="css"
            color="black"
            activated={category["css"] === "css"}
            onClick={onSetCategory}
          />
          <LabelledIcon
            svgFile={<IconReact />}
            title="react"
            value="react"
            name="react"
            color="black"
            activated={category["react"] === "react"}
            onClick={onSetCategory}
          />
          <LabelledIcon
            svgFile={<IconJavascript />}
            title="js"
            value="js"
            name="js"
            color="black"
            activated={category["js"] === "js"}
            onClick={onSetCategory}
          />
        </LabelledIconContainer>
      </div>
      <div className="topics-container">
        <div className="topics-container">
          <TopicsLinks
            theme="javascript"
            title={`Types:\nIn depth`}
            visible={category["js"] === "js"}
          />
          <TopicsLinks
            theme="javascript"
            title={`The Coercion System:\nDown the rabbit hole`}
            visible={category["js"] === "js"}
          />
          <TopicsLinks
            theme="javascript"
            title={`Scope:\nThe bucket game`}
            visible={category["js"] === "js"}
          />
          <TopicsLinks
            theme="javascript"
            title={`Closures`}
            visible={category["js"] === "js"}
          />
          <TopicsLinks
            theme="javascript"
            title={`Variable declaration:\nWar on Var?`}
            visible={category["js"] === "css"}
          />
          <TopicsLinks
            theme="react"
            title={`React Hooks:\nGeneralities`}
            visible={category["react"] === "react"}
          />
          <TopicsLinks
            theme="react"
            title={`React Hooks:\nuseState`}
            visible={category["react"] === "react"}
          />
          <TopicsLinks
            theme="react"
            title={`React Hooks:\nuseEffect`}
            visible={category["react"] === "react"}
          />
          <TopicsLinks
            theme="react"
            title={`React Hooks:\nuseMemo`}
            visible={category["react"] === "react"}
          />
          <TopicsLinks
            theme="css"
            title={`Css properties:\nCheat Sheet`}
            visible={category["css"] === "css"}
          />
          <TopicsLinks
            theme="html"
            title={`Html tags:\nCheat Sheet`}
            visible={category["html"] === "html"}
          />
          <TopicsLinks
            theme="html"
            title={`Html tags:\nAccessibility`}
            visible={category["html"] === "html"}
          />
        </div>
      </div>
    </PageContainerCenter>
  );
}

export default TopicsMap;
