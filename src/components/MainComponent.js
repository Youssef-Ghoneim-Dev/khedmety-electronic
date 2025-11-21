import "../style/MainComponent.css"
import { useNavigate } from "react-router-dom";
import AnimatedBottomToTop from "../Animated/AnimatedBottomToTop"
import AnimatedRightToLeft from "../Animated/AnimatedRightToLeft"
import AnimatedLeftToRight from "../Animated/AnimatedLeftToRight"
function MainComponent() {
    const navigate = useNavigate();
    return (
        <div className="main_comp">
            <AnimatedLeftToRight stagger={1.5} classname="animated-wrapper">
                <img className="main_img" src="main photo.svg" alt="main photo1"/>
            </AnimatedLeftToRight>
            <div className="right_div">
                <AnimatedRightToLeft stagger={0.5}>
                    <h1>خدمتي الإلكترونية</h1>
                    <p> هي منصة رقمية تجريبية تهدف إلى تسهيل وصول المواطنين إلى المعلومات والخدمات الحكومية في مصر.</p>
                    <p> تجمع المنصة أكثر من 500 خدمة حكومية في مكان واحد، مع شرح مبسط لكل خدمة، والمستندات المطلوبة، وخطوات التنفيذ، والمكان المخصص للحصول عليها.</p>
                </AnimatedRightToLeft>
                <AnimatedBottomToTop stagger={1.5}>
                    <button 
                    className="start-btn"
                    onClick={() => navigate("/services")}
                    >
                        ابدأ الآن
                    </button>
                </AnimatedBottomToTop>
            </div>
        </div>
    );
}

export default MainComponent;