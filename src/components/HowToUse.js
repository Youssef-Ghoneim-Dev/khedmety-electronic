import React from "react";
import "../style/HowToUse.css";
import AnimatedTopToBottom from "../Animated/AnimatedTopToBottom";
import AnimatedBottomToTop from "../Animated/AnimatedBottomToTop";

const steps = [
  { id: 1, title: "اختر نوع الخدمة", icon: "bx-search-alt-2 bx-tada" },
  { id: 2, title: "اقرأ المتطلبات", icon: "bxs-file bx-fade-left" },
  { id: 3, title: "اتبع الخطوات", icon: "bxs-book bx-flashing" },
  { id: 4, title: "نفّذ الخدمة بسهولة", icon: "bxs-check-circle bx-burst" },
];
function HowToUse() {
  return (
    <div className="how-section">
      <AnimatedTopToBottom>
        <h2 className="how-title">طريقة استخدام الموقع</h2>
      </AnimatedTopToBottom>
        <div className="how-steps">
                {steps.map((step, index) => ( 
                    <AnimatedBottomToTop key={index} stagger={2} classname="card-width">
                        <div className="how-card">
                            <div className="how-number">{step.id}</div> 
                            <div className="how-icon">
                                <i className={`bx ${step.icon}`} ></i> 
                            </div> 
                            <p className="how-desc">{step.title}</p> 
                        </div>
                    </AnimatedBottomToTop> 
                ))} 
        </div>
    </div>
  );
}

export default HowToUse;
