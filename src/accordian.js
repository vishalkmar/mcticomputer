import React, { useState } from 'react';

const FAQAccordion = () => {
  const faqData = [
    { question: "What types of courses do you offer?", answer: "We offer a variety of courses, including professional certifications, skill development programs, and distance learning options for college and 10th/12th-grade students." },
    { question: "How can I check my results?", answer: "You can check your results on our website under the 'Results' section. Simply enter your enrollment number to access your scores." },
    { question: "How do I download my certificate?", answer: "Once you receive your results, you can download your certificate directly from your student portal." },
    { question: "Is distance learning available?", answer: "Yes, we provide distance learning programs for both college students and those preparing for 10th and 12th-grade examinations." },
    { question: "What is the admission process?", answer: "The admission process is simple. Fill out the online application form, submit the required documents, and pay the registration fee." },
    { question: "Are there any prerequisites for the courses?", answer: "Some courses may have prerequisites, which will be mentioned in the course details. Please check the specific course page for more information." },
    { question: "Can I change my course after enrollment?", answer: "Yes, you can change your course within the first two weeks of enrollment by contacting our support team." },
    { question: "What payment methods do you accept?", answer: "We accept various payment methods, including credit/debit cards, online banking, and e-wallets." },
    { question: "Is financial aid available?", answer: "Yes, we offer financial aid and scholarships for eligible students. Please check our website for more details." },
    { question: "How do I contact support?", answer: "You can contact our support team through the 'Contact Us' page on our website or by emailing support@example.com." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
     <div className='container-fluid bg-black'>
        <div className="container py-5">
      <h2 className="text-center mb-4 text-danger">Frequently Asked Questions</h2>
      <div className="accordion mx-auto" style={{ maxWidth: '600px' }}>
        {faqData.map((item, index) => (
          <div key={index} className="mb-2">
            <div
              className="accordion-header p-3 bg-light border"
              onClick={() => toggleAccordion(index)}
              style={{ cursor: 'pointer' }}
            >
              <h5 className="mb-0">{item.question}</h5>
            </div>
            {openIndex === index && (
              <div className="accordion-body p-3 text-white">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
     </div>
  );
};

export default FAQAccordion;
