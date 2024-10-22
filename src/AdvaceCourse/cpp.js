import Header from "../header";
import Footer from "../footer";
import BannerForAll from "../bannerforall";
import ModuleList from "../modulelist";
import cppimage from '../images/advance/cppimage.png'
function Cpp(){

     const curriculum = [
          {
              module: 'Module 1: Introduction to C++',
              description: 'Understanding the C++ programming language, its features, and setting up the development environment.',
              topics: ['History of C++', 'Features of C++', 'Setting Up a Compiler', 'Basic Syntax'],
          },
          {
              module: 'Module 2: Data Types and Variables',
              description: 'Exploring data types, variables, and constants in C++ programming.',
              topics: ['Basic Data Types', 'Variables and Constants', 'Type Modifiers', 'Input/Output Streams'],
          },
          {
              module: 'Module 3: Control Statements',
              description: 'Learning about control flow in C++ using conditional and looping statements.',
              topics: ['If-Else Statements', 'Switch Case', 'For Loop', 'While and Do-While Loops'],
          },
          {
              module: 'Module 4: Functions',
              description: 'Understanding the concept of functions in C++ and how to create reusable code.',
              topics: ['Function Declaration', 'Function Definition', 'Function Overloading', 'Recursion'],
          },
          {
              module: 'Module 5: Object-Oriented Programming',
              description: 'Exploring the principles of OOP in C++, including classes and objects.',
              topics: ['Classes and Objects', 'Encapsulation', 'Inheritance', 'Polymorphism'],
          },
          {
              module: 'Module 6: Standard Template Library (STL)',
              description: 'Learning about the Standard Template Library for data structures and algorithms.',
              topics: ['Introduction to STL', 'Vectors', 'Lists', 'Maps and Sets'],
          },
          {
              module: 'Module 7: Exception Handling',
              description: 'Understanding exception handling mechanisms in C++.',
              topics: ['Try, Catch, and Throw', 'Standard Exceptions', 'Custom Exceptions', 'Best Practices'],
          },
          {
              module: 'Module 8: File Handling',
              description: 'Exploring file operations in C++, including reading and writing to files.',
              topics: ['File Streams', 'Opening and Closing Files', 'Reading and Writing Data', 'Error Handling'],
          },
      ];
  
      const faqs = [
          {
              question: 'What is C++ programming?',
              answer: 'C++ is an extension of the C programming language that includes object-oriented features, making it suitable for system and application software development.'
          },
          {
              question: 'What are the main features of C++?',
              answer: 'C++ supports object-oriented programming, function overloading, templates, exception handling, and provides low-level memory manipulation capabilities.'
          },
          {
              question: 'What is the difference between a class and an object?',
              answer: 'A class is a blueprint for creating objects, defining properties and behaviors, while an object is an instance of a class with specific values.'
          },
          {
              question: 'What is function overloading?',
              answer: 'Function overloading allows multiple functions to have the same name with different parameter lists, enabling more flexible code.'
          },
          {
              question: 'What is the Standard Template Library (STL)?',
              answer: 'STL is a powerful library in C++ that provides template classes and functions for commonly used data structures and algorithms.'
          },
          {
              question: 'How does exception handling work in C++?',
              answer: 'Exception handling in C++ uses try, catch, and throw keywords to handle runtime errors gracefully without crashing the program.'
          },
          {
              question: 'What is file handling in C++?',
              answer: 'File handling in C++ refers to the methods used to read from and write to files, allowing data to be stored persistently outside the program.'
          },
          {
              question: 'Why is C++ widely used in software development?',
              answer: 'C++ is widely used due to its efficiency, control over system resources, and its support for both procedural and object-oriented programming paradigms.'
          },
      ];
  

     return (<>
     <Header/>
       <BannerForAll
        title="C++ Programming"
        text="Our C++ course delves into advanced programming concepts, building on the foundation of C. Learn essential topics such as object-oriented programming (OOP), inheritance, polymorphism, templates, and standard template library (STL). Focus on logic building and problem-solving skills through practical exercises and small projects, including developing games and graphical applications. Gain hands-on experience in implementing algorithms and data structures to enhance your programming capabilities. Ideal for those looking to master C++ and its applications in software development."
        image={cppimage}
        month="4 " />
        
            <ModuleList modules={curriculum} faqs={faqs} topic="C++ Programming Curriculam"/>
        
        <Footer/>

     </>)
}
export default Cpp;