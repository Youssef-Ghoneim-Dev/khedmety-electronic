import React from 'react';
import '../style/Footer.css';
function Footer() {
    return (
        <div className="footer">
            <img src="/logo.svg" alt="logo" />
            <div className="footer-text-flex">
                <p>
                تم التطوير بواسطة البشمهندس
                <span> يوسف غنيم</span>
                </p>
                <p>جميع حقوق الطبع والنشر © محفوظة 2026</p>
            </div>
            <a href="# "><i className="bx bx-chevrons-up"></i></a>
        </div>
    );
}

export default Footer;