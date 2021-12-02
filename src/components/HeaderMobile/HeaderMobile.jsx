import IconCheatSheet from "../Icons/IconCheatSheet";
import IconDevTopics from "../Icons/IconDevTopics";
import IconFlowchart from "../Icons/IconFlowchart";
import IconMenuMobile from "../Icons/IconMenuMobile";
import IconPortfolio from "../Icons/IconPortfolio";
import "./HeaderMobile.styles.css";

function HeaderMobile() {
  return (
    <div className="header-mobile-container-all">
      <header className="header-mobile-container">
        <nav className="header-mobile-nav">
          <ul className="header-mobile-links-container">
            <li className="header-mobile-li">
              <IconMenuMobile />
            </li>
          </ul>
          <ul className="header-mobile-menu-categories">
            <div className="header-mobile-submenus-container">
              <li className="header-mobile-submenus header-skillMap">
                <IconFlowchart />
                Skill Map
              </li>
              <li className="header-mobile-submenus header-devtopics">
                <IconDevTopics /> Dev Topics
              </li>
              <li className="header-mobile-submenus header-cheatsheets">
                <IconCheatSheet />
                Cheat sheets
              </li>
              <li className="header-mobile-submenus header-portfolio">
                <IconPortfolio />
                Portfolio
              </li>
            </div>
            <ul className="header-mobile-devtopics-options">
              <li className="devtopic-option">Javascript</li>
              <li className="devtopic-option">Css</li>
              <li className="devtopic-option">React</li>
            </ul>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default HeaderMobile;
