import "./styling/GlobalStyles.styles.css";
import "./styling/GlobalVariables.styles.css";

import Routing from "./Routing/Routing";

function App() {
  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  return <Routing />;
}

export default App;
