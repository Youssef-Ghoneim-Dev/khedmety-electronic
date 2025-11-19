import React, { useState } from 'react';
import '../style/PublicServicesComponent.css';
import Publiccat from '../components/publiccat';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
function Servicecat() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    const [searchQuery, setSearchQuery] = useState('');
    const path = decodeURIComponent(location.pathname.split("/").pop());
    return (
        <div className='w-100'>
            <div className="search-bar-container">
                <h3 className="search-title">هنا تجد معظم الخدمات المتعلقة ب{path}، مع توضيح كافة التفاصيل</h3>
                <div className="search-input-div">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="... ابحث عن الخدمة التي تحتاجها"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <Publiccat  query={searchQuery}/>
        </div>
    );
}

export default Servicecat;
