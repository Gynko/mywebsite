import RadioButtons from "../RadioButtons/RadioButtons";
import "./CssPropertiesMenu.styles.css";

function CssPropertiesMenu({
  name,
  listObj,
  onChange,
  graph,
  columns,
  marginTop,
  ...otherProps
}) {
  return (
    <div
      className={`css-properties-menu-container css-properties-columns-${columns} css-properties-menu-${marginTop}`}
    >
      {listObj.map((element) => (
        <RadioButtons
          key={`${element}-${element.name}-${element.label}`}
          name={name}
          label={element.label}
          value={element.property}
          onChange={onChange}
          id={`${name}-${element.property}`}
          checked={graph === element.property}
          {...otherProps}
        ></RadioButtons>
      ))}
    </div>
  );
}

export default CssPropertiesMenu;
