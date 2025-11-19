import React from "react";
import "../style/CTASection.css";
import { Link } from "react-router-dom";

function CTASection() {
  return (
    <div className="cta-section">
      <h2 className="cta-title">
        ابدأ الآن في البحث عن خدمتك الحكومية بسهولة
      </h2>
      <Link to="/services" className="cta-button">
        ابدأ الآن
      </Link>
    </div>
  );
}

export default CTASection;
