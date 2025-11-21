import React, { useState } from 'react';
import PublicServicesComponent from "../components/PublicServicesComponent";
import '../style/PublicServicesComponent.css';
import services from '../data/PuplicData.js';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AnimatedTopToBottom from "../Animated/AnimatedTopToBottom";
import AnimatedBottomToTop from "../Animated/AnimatedBottomToTop"
import AnimatedLeftToRight from "../Animated/AnimatedLeftToRight"
function PublicServices() {
        const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    const [searchQuery, setSearchQuery] = useState('');
    let [value,setvalue] = useState("جميع الخدمات")
    const categorie = [...new Set(
        services.map(item => item.categories.target)
    )];
    function setnewvalue(val) {
        console.log(val);
        setvalue(val)
    }
    return (
        <div className='w-100'>
            <div className="search-bar-container">
                <AnimatedTopToBottom classname="width">
                    <h3 className="search-title">هنا تجد كل الخدمات العامة، بالإضافة إلى الخدمات التي تتطلب تقديم مستندات رسمية، مع توضيح كافة التفاصيل</h3>
                </AnimatedTopToBottom>
                <div className="search-input-div">
                    <AnimatedBottomToTop classname="width-input">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="... ابحث عن الخدمة التي تحتاجها"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
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

            <PublicServicesComponent thevalue={value} query={searchQuery} />
        </div>
    );
}

export default PublicServices;
