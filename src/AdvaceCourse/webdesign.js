import Header from "../header";
import Footer from "../footer";
import BannerForAll from "../bannerforall";
import ModuleList from "../modulelist";
import webdesignimage from '../images/advance/webdesign.png'
function WebDesign() {
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

     ];


     const faqs = [
          {
            question: 'What is Web Design?',
            answer: 'Web Design refers to the process of creating the visual layout and user experience of a website, focusing on aesthetics, usability, and interaction.'
          },
          {
            question: 'What are the key technologies used in Web Design?',
            answer: 'The key technologies include HTML for structure, CSS for styling, and JavaScript for interactivity and dynamic content.'
          },
          {
            question: 'What is the difference between UI and UX design?',
            answer: 'UI (User Interface) design focuses on the visual elements that users interact with, while UX (User Experience) design encompasses the overall experience a user has with a website.'
          },
          {
            question: 'How important is responsive design?',
            answer: 'Responsive design is crucial as it ensures that websites function well on various devices and screen sizes, providing a consistent user experience across all platforms.'
          },
          {
            question: 'What is Bootstrap?',
            answer: 'Bootstrap is a popular front-end framework that simplifies the process of creating responsive and visually appealing web designs using pre-defined CSS classes and components.'
          },
          {
            question: 'What are web design trends I should be aware of?',
            answer: 'Current web design trends include minimalism, dark mode, vibrant colors, micro-interactions, and the use of custom illustrations and animations.'
          },
          {
            question: 'How can I improve my web design skills?',
            answer: 'You can improve your skills by practicing regularly, taking online courses, studying design principles, and analyzing existing websites for inspiration.'
          },
          {
            question: 'What is the purpose of a wireframe in web design?',
            answer: 'A wireframe serves as a blueprint for a website, outlining the structure and layout before the design and development process begins, helping to visualize how content will be organized.'
          },
        ];


     return (<>
          <Header />
          <BannerForAll
               title="Web Design"
               text="Our Web Design course focuses on building visually appealing and responsive websites using HTML, CSS, JavaScript, and Bootstrap. Learn to create modern, user-friendly layouts that work seamlessly across devices. Gain expertise in designing intuitive user interfaces and optimizing web pages for speed and performance. Master the principles of responsive design and interactive elements. Perfect for aspiring web designers looking to create engaging online experiences."
               image={webdesignimage} 
               month="6 "/>

            <ModuleList modules={curriculum} faqs={faqs} topic="Wen Design Curriculam"/>

          <Footer />

     </>)
}
export default WebDesign;