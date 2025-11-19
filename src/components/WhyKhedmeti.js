import React from "react";
import '../style/WhyKhedmeti.css'
import { Icon } from "@iconify/react";

const features = [
  { id: 1, icon: "bxs:time", title: "توفر وقتك", desc: "بدل ما تلف على مواقع كتير، كل الخدمات في مكان واحد." },
  { id: 2, icon: "bxs:file", title: "معلومات دقيقة وواضحة", desc: "كل الخطوات مكتوبة بشكل مبسّط ومنظم." },
  { id: 3, icon: "bxs:mobile", title: "سهل الاستخدام", desc: "تصميم بسيط هيوصلك للخدمة اللي عايزها." },
];

function WhyKhedmeti() {
  return (
    <div className="why-section">
      <h2 className="why-title">لماذا "خدمتي الإلكترونية"؟</h2>
      <div className="why-flex">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className="why-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="why-icon">
              <Icon icon={feature.icon} ></Icon>
            </div>
            <h3 className="why-name">{feature.title}</h3>
            <p className="why-desc">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyKhedmeti;
