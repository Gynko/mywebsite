import "./TopicsLinks.styles.css";
import IconReact from "../Icons/IconReact";
import IconJavascript from "../Icons/IconJavascript";
import IconCss from "../Icons/IconCss";
import IconHtml from "../Icons/IconHtml";

import { Link } from "react-router-dom";

function TopicsLinks({ name, theme, value, title, link, visible, to }) {
  function themeIcon() {
    if (theme === "react")
      return <div className="topics-links-icon">{<IconReact />}</div>;
    else if (theme === "css")
      return <div className="topics-links-icon">{<IconCss />}</div>;
    else if (theme === "javascript")
      return <div className="topics-links-icon">{<IconJavascript />}</div>;
    else if (theme === "css")
      return <div className="topics-links-icon">{<IconReact />}</div>;
    else if (theme === "html")
      return <div className="topics-links-icon">{<IconHtml />}</div>;
  }
  function isLink() {
    if (link === true)
      return (
        <Link to={to}>
          <h3 className={`topics-links-title topics-links-title-${theme}`}>
            {title}
          </h3>
        </Link>
      );
    else
      return (
        <h3 className={`topics-links-title topics-links-title-${theme}`}>
          {title}
        </h3>
      );
  }

  return (
    <div
      className={`topics-links-container topics-links-container-visible-${visible}`}
    >
      {themeIcon()}
      {isLink()}
    </div>
  );
}

export default TopicsLinks;
