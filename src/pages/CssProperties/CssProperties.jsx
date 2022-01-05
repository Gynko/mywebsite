import TitleHeader from "../../components/TitleHeader/TitleHeader";
import "./CssProperties.styles.css";

function CssProperties() {
  const caniuse = require("caniuse-api");
  function test() {
    var list = caniuse.find("css");
    return list;
  }
  console.log(test());
  return (
    <div className="cssprop-container">
      <TitleHeader title="Css properties" />
    </div>
  );
}

export default CssProperties;
