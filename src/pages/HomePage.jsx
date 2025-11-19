import CategoriesPreview from "../components/CategoriesPreview";
import CTASection from "../components/CTASection";
import HowToUse from "../components/HowToUse";
import MainComponent from "../components/MainComponent";
import WhyKhedmeti from "../components/WhyKhedmeti";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AnimatedToTop from "../Animated/AnimatedToTop"
function HomePage() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
       <AnimatedToTop>
            <div className="w-100">
                <MainComponent />
                <WhyKhedmeti />
                <CategoriesPreview />
                <HowToUse />
                <CTASection />
            </div>
       </AnimatedToTop>
    );
}

export default HomePage;