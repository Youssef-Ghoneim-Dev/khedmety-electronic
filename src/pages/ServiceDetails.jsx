import ServiceDetailsComp from "../components/ServiceDetailsComp";
import React, { useState } from 'react';
function ServiceDetails() {
    const [searchQueryElectronics, setSearchQueryElectronics] = useState("");

    return (
        <div className="w-100">
            <div className="search-bar-container">
                <h3 className="search-title">هنا تجد كل الخدمات الإلكترونية، بالإضافة إلى الخدمات الرقمية والاونلاين، مع توضيح كافة التفاصيل</h3>
                <input
                    type="text"
                    className="search-input"
                    placeholder="... ابحث عن الخدمة التي تحتاجها"
                    value={searchQueryElectronics}
                    onChange={e => setSearchQueryElectronics(e.target.value)}
                />
            </div>
            <ServiceDetailsComp query={searchQueryElectronics} />
        </div>
    );
}

export default ServiceDetails;