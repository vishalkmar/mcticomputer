 
import Header from "../header";
import Footer from "../footer";
import BannerForAll from "../bannerforall";
import ModuleList from "../modulelist";
import reactimage from '../images/advance/react.png'
function React(){

     const curriculum = [
          {
              module: 'Module 1: Introduction to React',
              description: 'Understanding the basics of React, its features, and how it differs from other libraries.',
              topics: ['What is React?', 'Why Use React?', 'Setting Up the Environment', 'Creating Your First React App', 'JSX Syntax'],
          },
          {
              module: 'Module 2: Components and Props',
              description: 'Learning about the building blocks of React applications and how to pass data.',
              topics: ['Functional vs Class Components', 'Creating Reusable Components', 'Props and Prop Types', 'Component Composition', 'Default Props'],
          },
          {
              module: 'Module 3: State and Lifecycle',
              description: 'Understanding how to manage component state and lifecycle methods.',
              topics: ['State in React', 'Using the useState Hook', 'Lifecycle Methods in Class Components', 'Using the useEffect Hook', 'Handling Side Effects'],
          },
          {
              module: 'Module 4: Handling Events',
              description: 'Learning how to handle user inputs and events in React applications.',
              topics: ['Event Handling in React', 'Forms in React', 'Controlled vs Uncontrolled Components', 'Custom Hooks for Event Handling'],
          },
          {
              module: 'Module 5: Conditional Rendering and Lists',
              description: 'Understanding how to render components conditionally and work with lists.',
              topics: ['Conditional Rendering Techniques', 'Rendering Lists with map()', 'Keys in Lists', 'Handling Empty States'],
          },
          {
              module: 'Module 6: React Router',
              description: 'Exploring client-side routing in React applications using React Router.',
              topics: ['Introduction to React Router', 'Setting Up Routes', 'Linking Between Routes', 'Route Parameters', 'Nested Routes'],
          },
          {
              module: 'Module 7: State Management',
              description: 'Understanding state management in React applications using Context API and Redux.',
              topics: ['Managing State with Context API', 'Introduction to Redux', 'Creating a Redux Store', 'Connecting Redux with React', 'Handling Asynchronous Actions with Redux Thunk'],
          },
          {
              module: 'Module 8: Performance Optimization',
              description: 'Learning techniques to optimize React application performance.',
              topics: ['React Performance Metrics', 'Code Splitting with React.lazy', 'Memoization with React.memo', 'UseMemo and UseCallback Hooks', 'Avoiding Unnecessary Re-renders'],
          },
      ];
  
      const faqs = [
          {
              question: 'What is React?',
              answer: 'React is a JavaScript library for building user interfaces, developed by Facebook. It allows developers to create reusable UI components and manage the state effectively.'
          },
          {
              question: 'Why should I learn React?',
              answer: 'React is widely used in modern web development, enabling the creation of dynamic, single-page applications with improved performance and user experience.'
          },
          {
              question: 'What is JSX?',
              answer: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript, making it easier to create React elements and components.'
          },
          {
              question: 'What are components in React?',
              answer: 'Components are the building blocks of React applications. They can be functional or class-based and encapsulate the logic and presentation of the UI.'
          },
          {
              question: 'How does state work in React?',
              answer: 'State is an object that determines the component’s behavior and rendering. React provides hooks like useState to manage state in functional components.'
          },
          {
              question: 'What is React Router?',
              answer: 'React Router is a library that enables navigation among different components in a React application. It allows for client-side routing and dynamic routing based on the URL.'
          },
          {
              question: 'How can I manage global state in React?',
              answer: 'Global state can be managed using Context API for simple cases or Redux for more complex applications, allowing state to be shared across components.'
          },
          {
              question: 'What are some best practices for optimizing React performance?',
              answer: 'Best practices include code splitting, using React.memo for components, optimizing renders with useMemo and useCallback, and leveraging lazy loading for routes and images.'
          },
      ];


     return (<>
     <Header/>
       <BannerForAll
        title="React FUll Course"
        text="Our React course provides a deep dive into one of the most popular JavaScript libraries for building user interfaces. Learn the core concepts of React, including components, state management, and lifecycle methods, while mastering hooks for functional programming. Explore advanced topics such as routing, context API, and integrating with external APIs. Gain hands-on experience by developing real-world applications that are responsive and performant. Ideal for aspiring web developers looking to enhance their skills in modern front-end development."
        image={reactimage}
        month="3 " />
       
     

         <ModuleList modules={curriculum} faqs={faqs} topic="React Js Curriculam"/>
       
        <Footer/>

     </>)
}
export default React;