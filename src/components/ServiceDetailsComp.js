import electronicServices from "../data/ServiceData";
import { Link } from 'react-router-dom';
import React from 'react';
import Fuse from 'fuse.js';
import Accordion from 'react-bootstrap/Accordion';

function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.split(regex).map((part, i) =>
        regex.test(part) ? <mark key={i}>{part}</mark> : part
    );
}

function ServiceDetailsComp({ query }) {
    const fuse = new Fuse(electronicServices, {
        keys: ['title', 'desc'],
        threshold: 0.4,
    });

    const filteredServices = query
        ? fuse.search(query).map(result => result.item)
        : electronicServices;

    return (
        <div className="container w-75 my-4 mb-5" dir="rtl">
            {filteredServices.length === 0 ? (
                <p className="text-center fs-4 text-muted mt-5">
                    لا توجد نتائج مطابقة لبحثك 🔍
                </p>
            ) : (
                <Accordion>
                    {filteredServices.map((element, index) => (
                        <Accordion.Item eventKey={index.toString()} key={element.id}>
                            <Accordion.Header>
                                <div dir="rtl" className="fs-5">
                                    {highlightText(element.title, query)}
                                </div>
                            </Accordion.Header>
                            <Accordion.Body dir="rtl">
                                <p className="fs-5">{highlightText(element.desc, query)}</p>
                                <Link
                                    to={`/services/${element.id}`}
                                    className="btn btn-outline-primary mt-2 fs-5"
                                >
                                    الذهاب إلى الخدمة
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            )}
        </div>
    );
}

export default ServiceDetailsComp;
