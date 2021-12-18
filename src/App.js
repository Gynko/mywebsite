import "./styling/GlobalStyles.styles.css";
import "./styling/GlobalVariables.styles.css";

import Routing from "./Routing/Routing";
import { useEffect, useState, useCallback } from "react";

function App() {
  const getActualVh = () => {
    let vh = (window.innerHeight * 0.01).toFixed(2);
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  let count = 0;

  const [vh, setVh] = useState(getActualVh());
  const updateVh = useCallback(() => {
    const newVh = getActualVh();

    document.documentElement.style.setProperty("--vh", `${newVh}px`);
    setVh(newVh);
  }, [setVh]);

  useEffect(() => {
    count += 1;

    updateVh();

    window.addEventListener("resize", updateVh);

    return () => {
      window.removeEventListener("resize", updateVh);

      count -= 1;

      if (count === 0) document.documentElement.style.removeProperty(vh);
    };
  }, [updateVh]);

  return <Routing />;
}

export default App;
