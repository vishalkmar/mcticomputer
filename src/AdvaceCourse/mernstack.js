 
import Header from "../header";
import Footer from "../footer";
import BannerForAll from "../bannerforall";
import ModuleList from "../modulelist";
import mernimage from '../images/advance/mern.jpg'
function MernStack(){

     const curriculum = [
          
          {
            module: 'Module 1: Bootstrap, Tailwind & Responsiveness',
            description: 'Using Bootstrap and Tailwind for responsive design, breakpoints, and modern CSS frameworks.',
            topics: ['Bootstrap Basics', 'Tailwind CSS', 'Responsive Design', 'Media Queries', 'Grid Systems'],
          },
          {
            module: 'Module 2: React.js - Frontend Framework',
            description: 'Introduction to React.js, components, props, state management, and lifecycle methods.',
            topics: ['React Basics', 'JSX', 'Props & State', 'Component Lifecycle', 'Hooks'],
          },
          {
            module: 'Module 3: React.js - Routing & State Management',
            description: 'Using React Router for navigation and managing global state with Context API or Redux.',
            topics: ['React Router', 'Dynamic Routing', 'State Management', 'Context API', 'Redux Basics'],
          },
          {
            module: 'Module 4: React.js - Form Handling & Validation',
            description: 'Handling user input, creating controlled components, and validating forms in React.',
            topics: ['Controlled Components', 'Form Validation', 'Error Handling', 'Form Libraries (Formik, Yup)'],
          },
          {
            module: 'Module 5: React.js - Hooks & Advanced Patterns',
            description: 'Exploring React hooks like useEffect, useRef, and advanced component patterns.',
            topics: ['useEffect', 'useRef', 'Custom Hooks', 'Performance Optimization', 'Error Boundaries'],
          },
          {
            module: 'Module 6: Project - Hospital Management System',
            description: 'Build a hospital management system using React.js for managing patients, doctors, and appointments.',
            topics: ['React CRUD Operations', 'API Integration', 'Dynamic Forms', 'Data Persistence'],
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
            question: 'What is MERN Stack?',
            answer: 'MERN Stack is a JavaScript-based technology stack used for building dynamic web applications. It consists of MongoDB, Express.js, React.js, and Node.js.'
          },
          {
            question: 'What is the role of MongoDB in MERN Stack?',
            answer: 'MongoDB is a NoSQL database used for storing data in a flexible, JSON-like format, allowing for scalable and efficient data management in web applications.'
          },
          {
            question: 'How does Express.js function in a MERN application?',
            answer: 'Express.js is a web application framework for Node.js, used to build robust APIs and handle server-side logic and routing for the MERN applications.'
          },
          {
            question: 'What are the benefits of using React in the MERN Stack?',
            answer: 'React is a powerful front-end library for building user interfaces. It allows for the creation of reusable components, efficient rendering, and improved performance.'
          },
          {
            question: 'How does Node.js fit into the MERN Stack?',
            answer: 'Node.js serves as the runtime environment for executing JavaScript on the server side, allowing for building scalable applications and handling asynchronous operations.'
          },
          {
            question: 'What are some common challenges in MERN Stack development?',
            answer: 'Common challenges include managing state in React, handling asynchronous data fetching, and ensuring smooth communication between the front-end and back-end components.'
          },
          {
            question: 'Can you explain the structure of a MERN application?',
            answer: 'A typical MERN application has a client-side built with React, a server-side created using Node.js and Express.js, and a MongoDB database for data storage, often organized in a modular fashion.'
          },
          {
            question: 'What types of projects can be built using the MERN Stack?',
            answer: 'Projects such as E-commerce platforms, Hospital Management Systems, and Railway Reservation Systems can be effectively built using the MERN Stack due to its scalability and flexibility.'
          },
        ];

     return (<>
     <Header/>
       <BannerForAll
        title="MERN STACK"
        text="Our MERN Stack course focuses on mastering MongoDB, Express.js, React, and Node.js to build dynamic, full-stack web applications. Learn to design powerful, responsive user interfaces and efficiently manage data through MongoDB. Gain expertise in building RESTful APIs and deploying scalable applications. This course provides hands-on experience with the latest tools used in the industry. Ideal for developers looking to specialize in modern web development technologies."
        image={mernimage} 
        month="8 "/>
        
        <ModuleList modules={curriculum} faqs={faqs} topic="MERN STACK Curriculam"/>
        <Footer/>

     </>)
}
export default MernStack;