import ServiceDetailsComp from "../components/ServiceDetailsComp";
import React, { useState } from 'react';
import electronicServices from "../data/ServiceData";
function ServiceDetails() {
    const [searchQueryElectronics, setSearchQueryElectronics] = useState("");
    let [value,setvalue] = useState("جميع الخدمات")
    const categorie = [...new Set(
        electronicServices.map(item => item.categories.target)
    )];
    function setnewvalue(e) {
        console.log(e.target.value);
        
        setvalue(e.target.value)
    }
    return (
        <div className="w-100">
            <div className="search-bar-container">
                <h3 className="search-title">هنا تجد كل الخدمات الإلكترونية، بالإضافة إلى الخدمات الرقمية والاونلاين، مع توضيح كافة التفاصيل</h3>
                <div className="search-input-div">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="... ابحث عن الخدمة التي تحتاجها"
                        value={searchQueryElectronics}
                        onChange={e => setSearchQueryElectronics(e.target.value)}
                    />
                    <div className="btn-group" dir="rtl">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            فلترة الخدمات
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#" onClick={(e) => setnewvalue(e)} value="جميع الخدمات">
                                    جميع الخدمات
                                </a>
                            </li>
                            {categorie.map((item, index) => (
                                <li key={index}>
                                    <a className="dropdown-item" href="#" onClick={(e) => setnewvalue(e)} value={item}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <ServiceDetailsComp thevalue={value} query={searchQueryElectronics} />
        </div>
    );
}

export default ServiceDetails;