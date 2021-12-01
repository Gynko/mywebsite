import { BrowserRouter, Route, Routes } from "react-router-dom";

import KnowledgeBase from "../pages/KnowledgeBase/KnowledgeBase";
import PageHome from "../pages/home/PageHome";
import HeaderMobile from "../components/HeaderMobile/HeaderMobile";
import HeaderDesktop from "../components/HeaderDesktop/HeaderDesktop";
import ContactMe from "../pages/ContactMe/ContactMe";

function Routing() {
  return (
    <BrowserRouter>
      <HeaderDesktop />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/knowledge-base" element={<KnowledgeBase />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
      <HeaderMobile />
    </BrowserRouter>
  );
}

export default Routing;
