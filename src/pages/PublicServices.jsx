import React, { useState } from 'react';
import PublicServicesComponent from "../components/PublicServicesComponent";
import '../style/PublicServicesComponent.css';
function PublicServices() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className='w-100'>
            <div className="search-bar-container">
                <h3 className="search-title">هنا تجد كل الخدمات العامة، بالإضافة إلى الخدمات التي تتطلب تقديم مستندات رسمية، مع توضيح كافة التفاصيل</h3>
                <input
                    type="text"
                    className="search-input"
                    placeholder="... ابحث عن الخدمة التي تحتاجها"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
            </div>

            <PublicServicesComponent query={searchQuery} />
        </div>
    );
}

export default PublicServices;
