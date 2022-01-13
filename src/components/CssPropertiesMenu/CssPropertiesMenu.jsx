import RadioButtons from "../RadioButtons/RadioButtons";
import "./CssPropertiesMenu.styles.css";

function CssPropertiesMenu({ name, listObj, onChange, graph, ...otherProps }) {
  return listObj.map((element) => (
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
  ));
}

export default CssPropertiesMenu;
