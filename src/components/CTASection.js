import React from "react";
import "../style/CTASection.css";
import { Link } from "react-router-dom";
import AnimatedBottomToTop from "../Animated/AnimatedBottomToTop"

function CTASection() {
  return (
    <div className="cta-section">
        <AnimatedBottomToTop>
            <h2 className="cta-title">
                ابدأ الآن في البحث عن خدمتك الحكومية بسهولة
            </h2>
            <Link to="/services" className="cta-button">
                ابدأ الآن
            </Link>
        </AnimatedBottomToTop>
    </div>
  );
}

export default CTASection;
