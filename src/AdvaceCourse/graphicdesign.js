import Header from "../header";
import Footer from "../footer";
import BannerForAll from "../bannerforall";
import ModuleList from "../modulelist";
import graphicimage from '../images/advance/graphic design.jpg'
function GraphicDesign() {
    const curriculum = [
        {
            module: 'Module 1: Introduction to Graphic Design',
            description: 'Basics of graphic design principles, color theory, typography, and layout.',
            topics: ['Design Principles', 'Color Theory', 'Typography Basics', 'Layout Design'],
        },
        {
            module: 'Module 2: CorelDRAW Basics',
            description: 'Learning CorelDRAW for vector graphics creation and design.',
            topics: ['CorelDRAW Interface', 'Drawing Tools', 'Text Tools', 'Exporting Designs'],
        },
        {
            module: 'Module 3: Photoshop Fundamentals',
            description: 'Understanding Adobe Photoshop for photo editing and manipulation.',
            topics: ['Photoshop Interface', 'Basic Editing Tools', 'Layers and Masks', 'Photo Retouching'],
        },
        {
            module: 'Module 4: Adobe Illustrator',
            description: 'Using Illustrator for creating scalable vector graphics and illustrations.',
            topics: ['Illustrator Interface', 'Vector Paths', 'Illustration Techniques', 'Artboards'],
        },
        {
            module: 'Module 5: Adobe InDesign',
            description: 'Mastering InDesign for layout design, typography, and print production.',
            topics: ['InDesign Interface', 'Page Layouts', 'Master Pages', 'Exporting for Print'],
        },
        {
            module: 'Module 6: PageMaker and Print Design',
            description: 'Learning PageMaker for traditional print layouts and desktop publishing.',
            topics: ['PageMaker Basics', 'Creating Brochures', 'Typesetting', 'Finalizing for Print'],
        },
        {
            module: 'Module 7: Project - Branding and Identity',
            description: 'Develop a branding project including logo design, business cards, and letterhead.',
            topics: ['Branding Concepts', 'Logo Design', 'Stationery Design', 'Presentation'],
        },
        {
            module: 'Module 8: Project - Digital Marketing Materials',
            description: 'Create digital assets for social media, banners, and online promotions.',
            topics: ['Social Media Graphics', 'Banners', 'Infographics', 'Campaign Materials'],
        },
    ];

    const faqs = [
        {
            question: 'What is Graphic Design?',
            answer: 'Graphic Design is the art of visual communication through the use of typography, photography, and illustration to convey ideas and messages.'
        },
        {
            question: 'What tools are commonly used in Graphic Design?',
            answer: 'Common tools include Adobe Photoshop, Illustrator, InDesign, CorelDRAW, and PageMaker, each serving different design purposes.'
        },
        {
            question: 'What is the difference between vector and raster graphics?',
            answer: 'Vector graphics are made up of paths and are resolution-independent, while raster graphics are composed of pixels and can lose quality when scaled.'
        },
        {
            question: 'Do I need to learn coding for Graphic Design?',
            answer: 'While coding is not essential for graphic design, understanding web design basics can be beneficial, especially for digital projects.'
        },
        {
            question: 'What is the importance of color theory in design?',
            answer: 'Color theory helps designers create harmonious color combinations, enhance aesthetics, and evoke emotions in their designs.'
        },
        {
            question: 'Can I specialize in a specific area of Graphic Design?',
            answer: 'Yes, many designers choose to specialize in areas like branding, web design, motion graphics, or illustration.'
        },
        {
            question: 'How do I create a portfolio as a Graphic Designer?',
            answer: 'A strong portfolio showcases your best work, including a variety of projects that highlight your skills and style. Include descriptions and your design process.'
        },
        {
            question: 'What types of projects can I expect to work on as a Graphic Designer?',
            answer: 'You may work on branding projects, marketing materials, packaging design, web graphics, and more, depending on your interests and industry.'
        },
    ];

    return (
        <>
            <Header />
            <BannerForAll
                title="Graphic Design"
                text="Our Graphic Design course covers essential tools and principles, focusing on creativity and practical application. Learn to create stunning visuals, from digital marketing materials to branding projects. Gain expertise in leading design software, enhancing your skills to succeed in the creative industry."
                image={graphicimage}
                month="6 "
            />

            <div className="container-fluid bg-black">
                <div className="container py-5 bg-black">
                    <h2 className="text-center mb-4 text-white">Graphic Design Curriculum</h2>
                    <div className="row">
                        {curriculum.map((module, index) => (
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
            <Footer />
        </>
    );
}

export default GraphicDesign;
