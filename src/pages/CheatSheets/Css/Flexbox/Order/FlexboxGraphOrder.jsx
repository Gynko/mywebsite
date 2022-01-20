import "./FlexboxGraphOrder.styles.css";

function FlexboxGraphOrder({ orderItems }) {
  const baseStyle = {
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Bungee",
    textAlign: "center",
    border: "1px black solid",
    lineHeight: "1rem",
    whiteSpace: "pre",
    padding: "1rem",
  };

  return (
    <div
      className={`flexbox-graphics-container flexbox-graphics-container-grow`}
    >
      {orderItems.map((item, index) => {
        return (
          <div
            key={`${item}${index}`}
            style={{
              ...baseStyle,
              ...{
                order: `${item.item}`,
                backgroundColor: `var(--color-button-${item.color})`,
              },
            }}
          >{`item ${index}\norder:\n${item.item}`}</div>
        );
      })}
    </div>
  );
}

export default FlexboxGraphOrder;
