import "./TopicsLinks.styles.css";
import IconReact from "../Icons/IconReact";
import IconJavascript from "../Icons/IconJavascript";
import IconCss from "../Icons/IconCss";

function TopicsLinks({ name, theme, value, title, link, to }) {
  function themeIcon() {
    if (theme === "react")
      return <div className="topics-links-icon">{<IconReact />}</div>;
    else if (theme === "css")
      return <div className="topics-links-icon">{<IconCss />}</div>;
    else if (theme === "javascript")
      return <div className="topics-links-icon">{<IconJavascript />}</div>;
    else if (theme === "css")
      return <div className="topics-links-icon">{<IconReact />}</div>;
  }

  return (
    <div className="topics-links-container">
      {themeIcon()}
      <h3 className="topics-links-title">{title}</h3>
    </div>
  );
}

export default TopicsLinks;
