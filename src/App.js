import "./styling/GlobalStyles.styles.css";
import "./styling/GlobalVariables.styles.css";

import Routing from "./Routing/Routing";
import { useEffect } from "react";

function App() {
  const onResize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    onResize();
    window && window.addEventListener("resize", onResize);
    return () => {
      window && window.removeEventListener("resize", onResize);
    };
  }, []);

  return <Routing />;
}

export default App;
