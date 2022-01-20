import PropertyTitle from "../../../../../components/PropertyTitle/PropertyTitle";
import "./FlexboxFlex.styles.css";

function FlexboxFlex({ visible, itemCat, propertiesCat }) {
  function displayFlexProperty() {
    if (itemCat === true && visible === true && propertiesCat === true) {
      return (
        <div>
          <p className="under-construction">🏗️</p>
          <PropertyTitle marginTop="small">{`Under construction`}</PropertyTitle>
        </div>
      );
    } else return null;
  }
  return displayFlexProperty();
}

export default FlexboxFlex;
