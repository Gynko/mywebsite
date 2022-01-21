import "./styling/GlobalStyles.styles.css";
import "./styling/GlobalVariables.styles.css";
import "./styling/GlobalUtilityClasses.styles.css";
import "./assets/fonts/GlobalFonts.styles.css";

import Routing from "./Routing/Routing";
import useVH from "react-vh";

function App() {
  useVH();
  return <Routing />;
}

export default App;
