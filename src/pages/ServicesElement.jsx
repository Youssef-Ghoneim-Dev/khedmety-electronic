import { useParams } from 'react-router-dom';
import electronicServices from "../data/ServiceData";
function ServiceDetailsElement() {
  const { id } = useParams();
  console.log(electronicServices[id - 251]);
  const service = electronicServices[id - 251]; 
  if (!service) return <div>الخدمة غير موجودة</div>;
  return (
    <div className='w-100'>
        <div className="container mt-4" dir="rtl">
            <h2 className="text-center fs-2 fw-bolder mt-4">{service.title}</h2>
            <div className="accordion mb-5 mt-5" id={`accordion${service.id}`}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id={`headingDesc${service.id}`}>
                        <button
                        className="accordion-button fs-5"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseDesc${service.id}`}
                        aria-expanded="true"
                        aria-controls={`collapseDesc${service.id}`}
                        >
                        وصف الخدمة
                        </button>
                    </h2>
                    <div
                        id={`collapseDesc${service.id}`}
                        className="accordion-collapse collapse show"
                        aria-labelledby={`headingDesc${service.id}`}
                        data-bs-parent={`#accordion${service.id}`}
                    >
                        <div className="accordion-body fs-5">
                        <p>{service.desc}</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id={`headingPapers${service.id}`}>
                        <button
                        className="accordion-button collapsed fs-5"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapsePapers${service.id}`}
                        aria-expanded="false"
                        aria-controls={`collapsePapers${service.id}`}
                        >
                        الأوراق المطلوبة
                        </button>
                    </h2>
                    <div
                        id={`collapsePapers${service.id}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`headingPapers${service.id}`}
                        data-bs-parent={`#accordion${service.id}`}
                    >
                        <div className="accordion-body fs-5">
                        <ul className="p-2">
                            {service.papers.map((paper, idx) => (
                            <li key={idx}>{paper}</li>
                            ))}
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id={`headingLocation${service.id}`}>
                        <button
                        className="accordion-button collapsed fs-5"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseLocation${service.id}`}
                        aria-expanded="false"
                        aria-controls={`collapseLocation${service.id}`}
                        >
                        مكان التقديم
                        </button>
                    </h2>
                    <div
                        id={`collapseLocation${service.id}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`headingLocation${service.id}`}
                        data-bs-parent={`#accordion${service.id}`}
                    >
                        <div className="accordion-body fs-5">
                        {service.location}
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id={`headingSteps${service.id}`}>
                        <button
                        className="accordion-button collapsed fs-5"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseSteps${service.id}`}
                        aria-expanded="false"
                        aria-controls={`collapseSteps${service.id}`}
                        >
                        خطوات تنفيذ الخدمة
                        </button>
                    </h2>
                    <div
                        id={`collapseSteps${service.id}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`headingSteps${service.id}`}
                        data-bs-parent={`#accordion${service.id}`}
                    >
                        <div className="accordion-body">
                        <ul className="p-1">
                            {service.steps.map((step, idx) => (
                            <li className='m-2 fs-5' key={idx}>{step}</li>
                            ))}
                        </ul>
                        <div className="mt-3">
                            {service.id === 251 ? (
                                <a
                                    href={service.link}
                                    target="_blank"
                                    disabled
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary fs-5 disabled"
                                    >
                                    الذهاب إلى موقع الخدمة
                                </a>
                            ) : (
                                <a
                                    href={service.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary fs-5"
                                    >
                                    الذهاب إلى موقع الخدمة
                                </a>
                            )}
                        </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id={`headingTarget${service.id}`}>
                        <button
                        className="accordion-button collapsed fs-5"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseTarget${service.id}`}
                        aria-expanded="false"
                        aria-controls={`collapseTarget${service.id}`}
                        >
                        الفئات المستهدفة
                        </button>
                    </h2>
                    <div
                        id={`collapseTarget${service.id}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`headingTarget${service.id}`}
                        data-bs-parent={`#accordion${service.id}`}
                    >
                        <div className="accordion-body">
                        {service.categories.target}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='mb-5'>فيديو توضيحي لطريقة تسجيل الدخول علي منصة مصر الرقمية :</h2>
                <div className="ratio ratio-16x9 mb-5">
                    <iframe
                        src="https://www.youtube.com/embed/Ku8oQWbyBNg?si=nZHZkjwokIAA5A2O"
                        title="YouTube video"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ServiceDetailsElement;