import "./styling/GlobalStyles.styles.css";
import "./styling/GlobalVariables.styles.css";

import Routing from "./Routing/Routing";
import useVH from "react-vh";
import { Helmet } from "react-helmet";

function App() {
  useVH();

  return (
    <>
      <Helmet>
        <title>Wonderland</title>
        <meta name="viewport" content="viewport-fit=cover" />
        <Routing />
      </Helmet>
    </>
  );
}

export default App;
