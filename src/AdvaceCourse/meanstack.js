import Header from "../header";
import Footer from "../footer";
import BannerForAll from "../bannerforall";
import ModuleList from "../modulelist";
import meanimage from '../images/advance/meanimage.png'
function MeanStack() {
    const curriculum = [
        {
            module: 'Module 1: Bootstrap, Tailwind & Responsiveness',
            description: 'Using Bootstrap and Tailwind for responsive design, breakpoints, and modern CSS frameworks.',
            topics: ['Bootstrap Basics', 'Tailwind CSS', 'Responsive Design', 'Media Queries', 'Grid Systems'],
        },
        {
            module: 'Module 2: Angular - Frontend Framework',
            description: 'Introduction to Angular, components, services, and dependency injection.',
            topics: ['Angular Basics', 'Components & Templates', 'Data Binding', 'Services & Dependency Injection', 'Directives'],
        },
        {
            module: 'Module 3: Angular - Routing & State Management',
            description: 'Using Angular Router for navigation and managing state with services.',
            topics: ['Angular Router', 'Dynamic Routing', 'State Management', 'RxJS Basics'],
        },
        {
            module: 'Module 4: Angular - Form Handling & Validation',
            description: 'Handling user input, creating reactive forms, and validating forms in Angular.',
            topics: ['Reactive Forms', 'Form Validation', 'Error Handling', 'Form Libraries'],
        },
        {
            module: 'Module 5: Angular - Advanced Concepts',
            description: 'Exploring advanced Angular features like observables and Angular Universal.',
            topics: ['Observables', 'Angular Universal', 'Change Detection', 'Performance Optimization'],
        },
        {
            module: 'Module 6: Project - Hospital Management System',
            description: 'Build a hospital management system using Angular for managing patients, doctors, and appointments.',
            topics: ['Angular CRUD Operations', 'API Integration', 'Dynamic Forms', 'Data Persistence'],
        },
        {
            module: 'Module 7: Node.js & Express.js - Backend Development',
            description: 'Introduction to Node.js, Express.js for building server-side applications, and API development.',
            topics: ['Node.js Basics', 'Express.js Routing', 'Middleware', 'RESTful APIs', 'Error Handling'],
        },
        {
            module: 'Module 8: MongoDB & Mongoose - Database',
            description: 'Using MongoDB and Mongoose for database operations, models, and schema validation.',
            topics: ['MongoDB Basics', 'Mongoose Models', 'Schema Validation', 'CRUD Operations', 'Aggregation'],
        },
        {
            module: 'Module 9: Project - Railway Reservation System',
            description: 'Create a railway reservation system with Node.js, Express.js, and MongoDB, focusing on ticket booking and user management.',
            topics: ['Database Design', 'User Authentication', 'Booking Flow', 'Admin Panel', 'Error Handling'],
        },
        {
            module: 'Module 10: Project - E-commerce Website',
            description: 'Develop a full-stack e-commerce website with product listings, cart management, payment gateway integration.',
            topics: ['Product Listings', 'Cart & Checkout', 'User Authentication', 'Payment Gateway', 'Order Management'],
        },
    ];

    const faqs = [
        {
            question: 'What is MEAN Stack?',
            answer: 'MEAN Stack is a JavaScript-based technology stack used for building dynamic web applications. It consists of MongoDB, Express.js, Angular, and Node.js.'
        },
        {
            question: 'What is the role of MongoDB in MEAN Stack?',
            answer: 'MongoDB is a NoSQL database used for storing data in a flexible, JSON-like format, allowing for scalable and efficient data management in web applications.'
        },
        {
            question: 'How does Express.js function in a MEAN application?',
            answer: 'Express.js is a web application framework for Node.js, used to build robust APIs and handle server-side logic and routing for the MEAN applications.'
        },
        {
            question: 'What are the benefits of using Angular in the MEAN Stack?',
            answer: 'Angular is a powerful front-end framework for building single-page applications. It provides features like two-way data binding, dependency injection, and a modular architecture.'
        },
        {
            question: 'How does Node.js fit into the MEAN Stack?',
            answer: 'Node.js serves as the runtime environment for executing JavaScript on the server side, allowing for building scalable applications and handling asynchronous operations.'
        },
        {
            question: 'What are some common challenges in MEAN Stack development?',
            answer: 'Common challenges include managing state in Angular, handling asynchronous data fetching, and ensuring smooth communication between the front-end and back-end components.'
        },
        {
            question: 'Can you explain the structure of a MEAN application?',
            answer: 'A typical MEAN application has a client-side built with Angular, a server-side created using Node.js and Express.js, and a MongoDB database for data storage, often organized in a modular fashion.'
        },
        {
            question: 'What types of projects can be built using the MEAN Stack?',
            answer: 'Projects such as E-commerce platforms, Hospital Management Systems, and Railway Reservation Systems can be effectively built using the MEAN Stack due to its scalability and flexibility.'
        },
    ];

    return (
        <>
            <Header />
            <BannerForAll
                title="MEAN STACK"
                text="Our MEAN Stack course focuses on mastering MongoDB, Express.js, Angular, and Node.js to build dynamic, full-stack web applications. Learn to design powerful, responsive user interfaces and efficiently manage data through MongoDB. Gain expertise in building RESTful APIs and deploying scalable applications. This course provides hands-on experience with the latest tools used in the industry. Ideal for developers looking to specialize in modern web development technologies."
                image={meanimage}
                month="8 "/>
            
             
             <ModuleList modules={curriculum} faqs={faqs} topic="MEAN STACK Curriculam"/>
            <Footer />
        </>
    );
}

export default MeanStack;
