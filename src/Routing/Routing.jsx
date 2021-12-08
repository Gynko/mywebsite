import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageHome from "../pages/home/PageHome";
import HeaderMobile from "../components/HeaderMobile/HeaderMobile";
import HeaderDesktop from "../components/HeaderDesktop/HeaderDesktop";
import ContactMe from "../pages/ContactMe/ContactMe";
import TopicsMap from "../pages/TopicsMap/TopicsMap.jsx";
import FlexboxCheatSheet from "../pages/CheatSheets/Css/Flexbox/FlexboxCheatSheet";

function Routing() {
  return (
    <BrowserRouter>
      <HeaderDesktop />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/topics-map" element={<TopicsMap />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/cheatsheets/flexbox" element={<FlexboxCheatSheet />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
      <HeaderMobile />
    </BrowserRouter>
  );
}

export default Routing;
