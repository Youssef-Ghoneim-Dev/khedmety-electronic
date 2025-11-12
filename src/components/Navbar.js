import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="w-100">
      <nav className="navbar-personal">
        <div className="logo-section-personal">
          <img src="/logo.svg" alt="تحيا مصر" className="logo-personal" />
          <h1 className="site-title-personal">خدمتي الإلكترونية</h1>
        </div>

        <div className="menu-icon-personal" onClick={toggleMenu}>
          <i className={menuOpen ? "bx bx-x" : "bx bx-menu"}></i>
        </div>

        <ul className={`nav-links-personal ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" end onClick={closeMenu}>
              الصفحة الرئيسية
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={closeMenu}>
              الخدمات الإلكترونية
            </NavLink>
          </li>
          <li>
            <NavLink to="/public" onClick={closeMenu}>
              الخدمات العامة
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              عن الموقع
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              تواصل معنا
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;