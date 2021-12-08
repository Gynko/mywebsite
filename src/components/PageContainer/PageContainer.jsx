import "./PageContainer.styles.css";

function PageContainer(props) {
  return <div className="page-container">{props.children}</div>;
}

export default PageContainer;
