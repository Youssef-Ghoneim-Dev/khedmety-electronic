import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/CategoriesPreview.css";
import { Icon } from '@iconify/react'; 
import AnimatedLeftToRight from "../Animated/AnimatedLeftToRight"
import AnimatedRightToLeft from "../Animated/AnimatedRightToLeft"
export const categories = [
  { id: 1, title: "الهوية والوثائق", icon: "mdi:id-card"},
  { id: 2, title: "السفر والجوازات", icon: "mdi:passport"},
  { id: 3, title: "المرور والنقل", icon: "mdi:car-multiple"},
  { id: 4, title: "الصحة", icon: "mdi:medical-bag"},
  { id: 5, title: "التعليم", icon: "mdi:school"},
  { id: 6, title: "التموين والدعم", icon: "mdi:cart-variant"},
  { id: 7, title: "الإسكان والعقارات", icon: "mdi:home-city"},
  { id: 8, title: "التأمينات والعمل", icon: "mdi:briefcase-check"},
  { id: 9, title: "الشؤون الاجتماعية", icon: "mdi:account-group"},
  { id: 10, title: "الخدمات الرقمية", icon: "mdi:web"},
];


function CategoriesPreview() {
  const navigate = useNavigate();
    function onclickbtn(cat) {
        navigate(`/public/${cat}`)
    }
  return (
    <div className="categories-section">
    <AnimatedRightToLeft>
        <h2 className="categories-title">استكشف الفصول</h2>
    </AnimatedRightToLeft>
    <div className="categories-flex">
            {categories.map((cat) => (
                <AnimatedLeftToRight 
                    key={cat.id} 
                    stagger={0.8} 
                    className="mediawidth"
                >
                    <div className="category-card">
                        <div className="category-icon">
                            <Icon icon={cat.icon} width="50" height="50" />
                        </div>

                        <h3 className="category-name">{cat.title}</h3>

                        <button
                            className="category-btn"
                            onClick={() => onclickbtn(cat.title)}
                        >
                            عرض الخدمات
                        </button>
                    </div>
                </AnimatedLeftToRight>
            ))}
    </div>

    </div>
  );
}

export default CategoriesPreview;

