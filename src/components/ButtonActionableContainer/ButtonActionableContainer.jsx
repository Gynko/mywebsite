import "./ButtonActionableContainer.styles.css";

function ButtonActionableContainer(props) {
  const { marginTop } = props;
  return (
    <div
      className={`button-actionable-container button-actionable-container-${marginTop}`}
    >
      {props.children}
    </div>
  );
}

export default ButtonActionableContainer;
