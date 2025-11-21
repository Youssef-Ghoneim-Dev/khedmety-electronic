import ServiceDetailsComp from "../components/ServiceDetailsComp";
import React, { useState } from 'react';
import electronicServices from "../data/ServiceData";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AnimatedTopToBottom from "../Animated/AnimatedTopToBottom";
import AnimatedBottomToTop from "../Animated/AnimatedBottomToTop"
import AnimatedLeftToRight from "../Animated/AnimatedLeftToRight"
function ServiceDetails() {
        const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    const [searchQueryElectronics, setSearchQueryElectronics] = useState("");
    let [value,setvalue] = useState("جميع الخدمات")
    const categorie = [...new Set(
        electronicServices.map(item => item.categories.target)
    )];
    function setnewvalue(val) {
        console.log(val);
        
        setvalue(val)
    }
    return (
        <div className="w-100">
            <div className="search-bar-container">
                <AnimatedTopToBottom classname="width">
                        <h3 className="search-title">هنا تجد كل الخدمات الإلكترونية، بالإضافة إلى الخدمات الرقمية والاونلاين، مع توضيح كافة التفاصيل</h3>
                </AnimatedTopToBottom>
                <div  className="search-input-div">
                <AnimatedBottomToTop classname="width-input">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="... ابحث عن الخدمة التي تحتاجها"
                        value={searchQueryElectronics}
                        onChange={e => setSearchQueryElectronics(e.target.value)}
                        />
                </AnimatedBottomToTop>
                <AnimatedLeftToRight>
                    <div className="btn-group" dir="rtl">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            {value}
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <button type="button" className="dropdown-item" onClick={() => setnewvalue("جميع الخدمات")}>
                                    جميع الخدمات
                                </button>
                            </li>
                            {categorie.map((item, index) => (
                                <li key={index}>
                                    <button type="button" className="dropdown-item" onClick={() => setnewvalue(item)}>
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </AnimatedLeftToRight>
                </div>
            </div>
            <ServiceDetailsComp thevalue={value} query={searchQueryElectronics} />
        </div>
    );
}

export default ServiceDetails;