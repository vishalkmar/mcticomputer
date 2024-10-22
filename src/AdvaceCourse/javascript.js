import Header from "../header";
import Footer from "../footer";
import BannerForAll from "../bannerforall";
import ModuleList from "../modulelist";
import jsimage from '../images/advance/jsimage.png'
function JavaScript(){

     const curriculum = [
          {
              module: 'Module 1: Introduction to JavaScript',
              description: 'Understanding the fundamentals of JavaScript, its syntax, and how it integrates with HTML and CSS.',
              topics: ['What is JavaScript?', 'JavaScript in the Browser', 'Variables and Data Types', 'Operators and Expressions', 'Control Structures (if, switch)'],
          },
          {
              module: 'Module 2: Functions and Scope',
              description: 'Learning how to define and invoke functions, and understanding variable scope.',
              topics: ['Defining Functions', 'Function Expressions', 'Arrow Functions', 'Scope and Hoisting', 'Closure'],
          },
          {
              module: 'Module 3: Objects and Arrays',
              description: 'Exploring how to work with objects and arrays in JavaScript.',
              topics: ['Creating and Manipulating Objects', 'Array Methods', 'Destructuring Objects and Arrays', 'Spread and Rest Operators', 'Object Prototypes'],
          },
          {
              module: 'Module 4: DOM Manipulation',
              description: 'Understanding how to interact with the Document Object Model (DOM) using JavaScript.',
              topics: ['Selecting Elements', 'Modifying DOM Elements', 'Event Handling', 'Creating and Removing Elements', 'Event Delegation'],
          },
          {
              module: 'Module 5: Asynchronous JavaScript',
              description: 'Learning about asynchronous programming concepts such as callbacks, promises, and async/await.',
              topics: ['Understanding Asynchronous Programming', 'Callback Functions', 'Promises and Promise Chaining', 'Async/Await', 'Error Handling in Async Code'],
          },
          {
              module: 'Module 6: JavaScript ES6 Features',
              description: 'Exploring the new features introduced in ES6 and their applications.',
              topics: ['Let and Const', 'Template Literals', 'Default Parameters', 'Modules and Imports', 'Classes and Inheritance'],
          },
          {
              module: 'Module 7: Error Handling and Debugging',
              description: 'Understanding how to handle errors and debug JavaScript code effectively.',
              topics: ['Error Types in JavaScript', 'Try/Catch Statements', 'Debugging Techniques', 'Using Browser Developer Tools', 'Common JavaScript Bugs'],
          },
          {
              module: 'Module 8: Advanced Topics',
              description: 'Diving deeper into advanced JavaScript concepts and best practices.',
              topics: ['Functional Programming Concepts', 'Higher-Order Functions', 'Recursion', 'Memory Management', 'Performance Optimization Techniques'],
          },
      ];
  
      const faqs = [
          {
              question: 'What is JavaScript?',
              answer: 'JavaScript is a high-level, dynamic, untyped, and interpreted programming language that is widely used for building interactive web applications.'
          },
          {
              question: 'Why should I learn JavaScript?',
              answer: 'JavaScript is essential for web development, enabling you to create dynamic and interactive websites. It is also used in server-side development, mobile app development, and more.'
          },
          {
              question: 'What are variables in JavaScript?',
              answer: 'Variables are containers for storing data values. In JavaScript, you can define variables using var, let, or const keywords, each with different scopes and usage.'
          },
          {
              question: 'What is the DOM?',
              answer: 'The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content dynamically.'
          },
          {
              question: 'What are promises in JavaScript?',
              answer: 'Promises are objects that represent the eventual completion or failure of an asynchronous operation. They allow you to handle asynchronous code more effectively than traditional callbacks.'
          },
          {
              question: 'What is the difference between == and ===?',
              answer: 'The == operator checks for equality after converting the operands to a common type (type coercion), while === checks for equality without type conversion (strict equality).'
          },
          {
              question: 'What are closures in JavaScript?',
              answer: 'Closures are functions that have access to their own scope, the outer function’s scope, and the global scope. They are useful for creating private variables and functions.'
          },
          {
              question: 'What are higher-order functions?',
              answer: 'Higher-order functions are functions that take other functions as arguments or return them as output. They are commonly used in functional programming patterns in JavaScript.'
          },
      ];
  
     return (<>
     <Header/>
       <BannerForAll
        title="JavaScript Full Course"
        text="Our JavaScript Full Course covers everything from the fundamentals to advanced concepts, enabling students to master this essential web development language. Learn key topics including variables, data types, functions, objects, and the Document Object Model (DOM). Explore modern JavaScript features such as ES6 syntax, asynchronous programming, and AJAX. Gain hands-on experience through projects that build interactive web applications and enhance user experience. Ideal for aspiring web developers looking to create dynamic, responsive websites."
        image={jsimage}
        month="6 " />
        
        <ModuleList  modules={curriculum} faqs={faqs} topic="java Script Curriculam" />

        <Footer/>

     </>)
}
export default JavaScript;