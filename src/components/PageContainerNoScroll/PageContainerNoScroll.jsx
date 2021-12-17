import "./PageContainerNoScroll.styles.css";

function PageContainerNoScroll(props) {
  return <div className="page-container-noscroll">{props.children}</div>;
}

export default PageContainerNoScroll;
