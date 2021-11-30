import "./HeaderMobile.styles.css";

function HeaderMobile() {
  return (
    <div className="header-container">
      <nav className="header-mobile-nav">
        <ul className="header-links-container">
          <li className="header-mobile-li">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </li>
          <span className="header-mobile-title">The dev Rabbit hole</span>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderMobile;
