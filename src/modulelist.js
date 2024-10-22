
import React from 'react';

function ModuleList({ modules,faqs,topic }) {
    return (
       <>
<div className="container-fluid bg-black">
<div className="container py-5 bg-black">
    <h2 className="text-center mb-4 text-white">{topic}</h2>
    <div className="row">
            {modules.map((module, index) => (
                <div key={index} className="col-md-6 mb-4">
                    <div className="p-3 border rounded shadow-sm">
                        <h4 className="text-danger">{module.module}</h4>
                        <p className="text-white">{module.description}</p>
                        <ul>
                            {module.topics.map((topic, idx) => (
                                <li className="text-white" key={idx}>{topic}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
</div>
</div>
<div className="container-fluid bg-black">
<div className="container py-5">
    <h2 className="text-center mb-4 text-white">Frequently Asked Questions</h2>
    <div className="d-flex justify-content-center">
            <div className="col-md-8">
                <div className="accordion" id="faqAccordion">
                    {faqs.map((faq, index) => (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${index}`}
                                    aria-expanded="true"
                                    aria-controls={`collapse${index}`}
                                >
                                    {faq.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse${index}`}
                                className="accordion-collapse collapse"
                                aria-labelledby={`heading${index}`}
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
</div>
</div>
       </>
    );
}

export default ModuleList;



