import React from "react";
import "../style/HowToUse.css";
import { Icon } from "@iconify/react";
import AnimatedTopToBottom from "../Animated/AnimatedTopToBottom";
import AnimatedBottomToTop from "../Animated/AnimatedBottomToTop";

const steps = [
  { id: 1, title: "اختر نوع الخدمة", icon: "bxs:search" },
  { id: 2, title: "اقرأ المتطلبات", icon: "bxs:file" },
  { id: 3, title: "اتبع الخطوات", icon: "bxs:book" },
  { id: 4, title: "نفّذ الخدمة بسهولة", icon: "bxs:check-circle" },
];

function HowToUse() {
  return (
    <div className="how-section">
      <AnimatedTopToBottom>
        <h2 className="how-title">طريقة استخدام الموقع</h2>
      </AnimatedTopToBottom>
        <div className="how-steps">
            <AnimatedBottomToTop classname="how-card">
                {steps.map((step, index) => ( 
                    <> 
                        <div className="how-number">{step.id}</div> 
                        <div className="how-icon">
                            <Icon icon={step.icon} ></Icon> 
                        </div> 
                        <p className="how-desc">{step.title}</p> 
                    </> 
                ))} 
            </AnimatedBottomToTop> 
        </div>
    </div>
  );
}

export default HowToUse;
