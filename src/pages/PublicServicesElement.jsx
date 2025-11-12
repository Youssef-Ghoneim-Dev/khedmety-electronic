import { useParams } from 'react-router-dom';
import services from '../data/PuplicData.js';
function PublicServicesElement() {
  const { id } = useParams();
  const service = services[id - 1]; 
  if (!service) return <div>الخدمة غير موجودة</div>;
  return (
    <div className='w-100'>
      <div className="container mt-4">
        <h2 className="text-center fs-2 fw-bolder mt-4 small-title">{service.title}</h2>
            <div className="accordion mb-5 mt-5" id={`accordion${service.id}`} dir="rtl">
                <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button fs-5"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseDesc${service.id}`}
                    aria-expanded="true"
                    aria-controls={`collapseDesc${service.id}`}
                  >
                    الوصف
                  </button>
                </h2>
                <div
                  id={`collapseDesc${service.id}`}
                  className="accordion-collapse collapse show"
                  data-bs-parent={`#accordion${service.id}`}
                >
                  <div className="accordion-body fs-5">
                        <p>{service.desc}</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
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
                  data-bs-parent={`#accordion${service.id}`}
                >
                  <div className="accordion-body fs-5">
                    <ul className='p-2'>
                      {service.papers.map((paper, idx) => (
                        <li key={idx}>{paper}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
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
                  data-bs-parent={`#accordion${service.id}`}
                >
                  <div className="accordion-body fs-5">{service.location}</div>
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
      </div>  
    </div>
  );
}

export default PublicServicesElement;

