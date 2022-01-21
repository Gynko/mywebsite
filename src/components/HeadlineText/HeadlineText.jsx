import "./HeadlineText.styles.css";

function HeadlineText(props) {
  return <h2 className="headlinetext-text">{props.children}</h2>;
}

export default HeadlineText;
