import "./PageContainerColumn.styles.css";

function PageContainerColumn(props) {
  const { verticalCenter } = props;
  return (
    <div
      className={`page-container-column page-container-column-${verticalCenter}`}
    >
      {props.children}
    </div>
  );
}

export default PageContainerColumn;
