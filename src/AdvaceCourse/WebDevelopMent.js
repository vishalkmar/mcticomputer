import Header from "../header";
import Footer from "../footer";
import BannerForAll from "../bannerforall";
import ModuleList from "../modulelist";
import developmentimage from '../images/advance/web development.jpg'
function WebDevelopMent(){
     const curriculum = [
          {
            module: 'Module 1: HTML & Its Parts',
            description: 'Introduction to HTML, elements, attributes, links, tables, forms, and semantic HTML.',
            topics: ['HTML Structure', 'Tags & Attributes', 'Forms and Validation', 'Tables', 'Semantic HTML'],
          },
          {
            module: 'Module 2: CSS & Its Parts',
            description: 'Styling web pages with CSS, layout, grid, flexbox, and advanced selectors.',
            topics: ['CSS Basics', 'Selectors', 'Box Model', 'Flexbox', 'Grid Layout', 'Animations'],
          },
          {
            module: 'Module 3: JavaScript & Its Parts',
            description: 'JavaScript fundamentals, functions, objects, DOM manipulation, and ES6 features.',
            topics: ['JavaScript Basics', 'Functions & Scope', 'DOM Manipulation', 'ES6 Features', 'Async JavaScript'],
          },
          {
            module: 'Module 4: Project - Weather App',
            description: 'Build a weather app using HTML, CSS, and JavaScript to fetch live weather data from an API.',
            topics: ['API Integration', 'Event Handling', 'UI Design', 'Error Handling'],
          },
          {
            module: 'Module 5: Bootstrap, Tailwind & Responsiveness',
            description: 'Using Bootstrap and Tailwind for responsive design, breakpoints, and modern CSS frameworks.',
            topics: ['Bootstrap Basics', 'Tailwind CSS', 'Responsive Design', 'Media Queries', 'Grid Systems'],
          },
          {
            module: 'Module 6: Project - Amazon-like Clone',
            description: 'Create an e-commerce clone like Amazon, focusing on product listings, cart, and checkout functionalities.',
            topics: ['Product Page', 'Shopping Cart', 'Checkout Flow', 'UI/UX Design', 'Responsive Layout'],
          },
          {
            module: 'Module 7: React.js - Frontend Framework',
            description: 'Introduction to React.js, components, props, state management, and lifecycle methods.',
            topics: ['React Basics', 'JSX', 'Props & State', 'Component Lifecycle', 'Hooks'],
          },
          {
            module: 'Module 8: React.js - Routing & State Management',
            description: 'Using React Router for navigation and managing global state with Context API or Redux.',
            topics: ['React Router', 'Dynamic Routing', 'State Management', 'Context API', 'Redux Basics'],
          },
          {
            module: 'Module 9: React.js - Form Handling & Validation',
            description: 'Handling user input, creating controlled components, and validating forms in React.',
            topics: ['Controlled Components', 'Form Validation', 'Error Handling', 'Form Libraries (Formik, Yup)'],
          },
          {
            module: 'Module 10: React.js - Hooks & Advanced Patterns',
            description: 'Exploring React hooks like useEffect, useRef, and advanced component patterns.',
            topics: ['useEffect', 'useRef', 'Custom Hooks', 'Performance Optimization', 'Error Boundaries'],
          },
          {
            module: 'Module 11: Project - Hospital Management System',
            description: 'Build a hospital management system using React.js for managing patients, doctors, and appointments.',
            topics: ['React CRUD Operations', 'API Integration', 'Dynamic Forms', 'Data Persistence'],
          },
          {
            module: 'Module 12: Node.js & Express.js - Backend Development',
            description: 'Introduction to Node.js, Express.js for building server-side applications, and API development.',
            topics: ['Node.js Basics', 'Express.js Routing', 'Middleware', 'RESTful APIs', 'Error Handling'],
          },
          {
            module: 'Module 13: MongoDB & Mongoose - Database',
            description: 'Using MongoDB and Mongoose for database operations, models, and schema validation.',
            topics: ['MongoDB Basics', 'Mongoose Models', 'Schema Validation', 'CRUD Operations', 'Aggregation'],
          },
          {
            module: 'Module 14: Project - Railway Reservation System',
            description: 'Create a railway reservation system with Node.js, Express.js, and MongoDB, focusing on ticket booking and user management.',
            topics: ['Database Design', 'User Authentication', 'Booking Flow', 'Admin Panel', 'Error Handling'],
          },
          {
            module: 'Module 15: Project - E-commerce Website',
            description: 'Develop a full-stack e-commerce website with product listings, cart management, payment gateway integration.',
            topics: ['Product Listings', 'Cart & Checkout', 'User Authentication', 'Payment Gateway', 'Order Management'],
          },
        ];
        const faqs = [
          {
            question: 'What is Full Stack Web Development?',
            answer: 'Full Stack Web Development involves developing both the front-end and back-end of web applications, encompassing everything from user interface design to server-side logic and database management.'
          },
          {
            question: 'What technologies do I need to learn?',
            answer: 'Key technologies include HTML, CSS, JavaScript, React for front-end development, and Node.js, Express, and MongoDB for back-end development.'
          },
          {
            question: 'How long does it take to become a Full Stack Developer?',
            answer: 'The timeline can vary greatly, but with consistent study and practice, many can become proficient within 6 to 12 months.'
          },
          {
            question: 'What are some project ideas for beginners?',
            answer: 'Beginner project ideas include a personal portfolio website, a simple blog, a to-do list application, and a weather forecasting app.'
          },
          {
            question: 'Do I need to know both front-end and back-end development?',
            answer: 'Yes, being a Full Stack Developer means having a good understanding of both front-end and back-end technologies and how they interact with each other.'
          },
          {
            question: 'What is version control, and why is it important?',
            answer: 'Version control is a system that tracks changes to files, allowing multiple collaborators to work together without overwriting each other’s work. It is essential for managing software projects.'
          },
          {
            question: 'What is the difference between a framework and a library?',
            answer: 'A library is a collection of code that you can call upon to perform specific tasks, while a framework provides a structure and dictates the architecture of your application.'
          },
          {
            question: 'What are RESTful APIs?',
            answer: 'RESTful APIs are web services that adhere to REST architecture, allowing for interaction between a client and server over HTTP. They are commonly used in web applications for data exchange.'
          },
        ];

     return (<>
     <Header/>
       <BannerForAll
        title="Full Stack Web Development"
        text="Our Full Stack Web Development course equips students with comprehensive knowledge of both front-end and back-end technologies. Master HTML, CSS, JavaScript, and modern frameworks like React and Node.js. Learn to build responsive websites, manage databases, and deploy scalable applications. Gain hands-on experience with industry-standard tools and best practices. Perfect for those looking to become proficient in all aspects of web development."
        image={developmentimage}
        month="12 "/>

         <ModuleList modules={curriculum} faqs={faqs} topic="Full Stack Web Development Curriculam"/>
        <Footer/>

     </>)
}
export default WebDevelopMent;