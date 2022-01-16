import "./LabelledIconContainer.styles.css";

function LabelledIconContainer(props) {
  const { marginTop } = props;
  return (
    <div
      className={`labelled-icon-container labelled-icon-container-${marginTop}`}
    >
      {props.children}
    </div>
  );
}

export default LabelledIconContainer;
