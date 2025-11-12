import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Navbar.css";

function Navbar() {
  return (
    <div className="w-100">
        <nav className="navbar-personal">
            <div className="logo-section-personal">
                <img src="/logo.svg" alt="تحيا مصر" className="logo-personal" />
                <h1 className="site-title-personal">خدمتي الإلكترونية</h1>
            </div>

            <ul className="nav-links-personal">
                <li>
                <NavLink to="/" end>
                    الصفحة الرئيسية
                </NavLink>
                </li>
                <li>
                <NavLink to="/services">الخدمات الإلكترونية</NavLink>
                </li>
                <li>
                <NavLink to="/public">الخدمات العامة</NavLink>
                </li>
                <li>
                <NavLink to="/about">عن الموقع</NavLink>
                </li>
                <li>
                <NavLink to="/contact">تواصل معنا</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  );
}

export default Navbar;

