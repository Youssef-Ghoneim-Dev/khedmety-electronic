import React from "react";
import "../style/HowToUse.css";
import { Icon } from "@iconify/react";

const steps = [
  { id: 1, title: "اختر نوع الخدمة", icon: "bxs:search" },
  { id: 2, title: "اقرأ المتطلبات", icon: "bxs:file" },
  { id: 3, title: "اتبع الخطوات", icon: "bxs:book" },
  { id: 4, title: "نفّذ الخدمة بسهولة", icon: "bxs:check-circle" },
];

function HowToUse() {
  return (
    <div className="how-section">
      <h2 className="how-title">طريقة استخدام الموقع</h2>
      <div className="how-steps">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="how-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="how-number">{step.id}</div>
            <div className="how-icon">
              <Icon icon={step.icon} ></Icon>
            </div>
            <p className="how-desc">{step.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowToUse;
