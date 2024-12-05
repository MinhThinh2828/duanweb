import React, { useState } from "react";
import "../styles.css";
import Menu from "./Menu";
import p1 from "../image/logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={p1} alt="Cafe Việt Nam Logo" className="logo-image" />
        </div>
        <nav className="nav-menu">
          <button className="nav-button" onClick={toggleMenu}>
            Thực đơn
          </button>
          <button className="nav-button">Giao hàng</button>
          <button className="nav-button">Địa chỉ</button>
          <button className="nav-button">Đăng ký</button>
        </nav>
      </header>
      {isMenuOpen && <Menu closeMenu={toggleMenu} />}
    </>
  );
};

export default Header;
