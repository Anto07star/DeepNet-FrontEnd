import React, { useState } from "react";
import "../assets/Css/Header.css"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="header">
      <div className="logo"> <a href="/"><img src="https://s3-alpha-sig.figma.com/img/22e3/1e48/6860545013e0a63ba8cb7e94004971f7?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CuzMvI9e97lgjIyBYweXPfpdP9uJ7gJg97XTx9lAW6sFBI58oFdklL7zzMddnk3g6posaVsXNwmeMGAAWzPEYDX9NrZFc0HV7~5SSA58mL1R3Yqhqv42Xs4KDTuOtQcOaBqmT54tPUzuJIF46YTm36wPNSDcOq8yGYs~N7-1OVUBB4xpJvpMlEImWfy1PcFMU5vGbJD3nZoEudE2tMj4GvCfrxqrAxiqV85fIREk3MX4kFSk-gohS9k-hEJqV6BNmj-YDI6JmGF0gFNmHpTeJlR-xF6qgn4pByjiReYheVS0j35tjBm3ue1bQC1JjpK~bNGmmSAUzZ1jXDFxxX8bOg__" alt="" /></a></div>
      <nav className={`nav ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">MENU</a></li>
          <li><a href="#services">MAKE A RESERVATION</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
      <div className="menu-icon" onClick={toggleMobileMenu}>
        &#9776; {/* Hamburger menu icon */}
      </div>
    </div>
  );
};

export default Header;
