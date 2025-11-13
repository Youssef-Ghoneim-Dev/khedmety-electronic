import "../style/MainComponent.css"
function MainComponent() {
    return (
        <div className="main_comp">
            <img src="main photo.svg" alt="main photo1"/>
            <div className="right_div">
                <h1>خدمتي الإلكترونية</h1>
                <p> هي منصة رقمية تجريبية تهدف إلى تسهيل وصول المواطنين إلى المعلومات والخدمات الحكومية في مصر.</p>
                <p> تجمع المنصة أكثر من 500 خدمة حكومية في مكان واحد، مع شرح مبسط لكل خدمة، والمستندات المطلوبة، وخطوات التنفيذ، والمكان المخصص للحصول عليها.</p>
            </div>
        </div>
    );
}

export default MainComponent;