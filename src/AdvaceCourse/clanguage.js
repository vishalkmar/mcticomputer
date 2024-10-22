 
import Header from "../header";
import Footer from "../footer";
import BannerForAll from "../bannerforall";
import ModuleList from "../modulelist";
import cimage from '../images/advance/c.jpg'

function CLanguage(){

     const curriculum = [
          {
              module: 'Module 1: Introduction to C',
              description: 'Understanding the C programming language, its history, and setting up the development environment.',
              topics: ['History of C', 'Features of C', 'Setting Up a Compiler', 'Basic Syntax'],
          },
          {
              module: 'Module 2: Data Types and Variables',
              description: 'Exploring data types, variables, and constants in C programming.',
              topics: ['Basic Data Types', 'Variables and Constants', 'Type Modifiers', 'Input/Output Functions'],
          },
          {
              module: 'Module 3: Control Statements',
              description: 'Learning about control flow in C using conditional and looping statements.',
              topics: ['If-Else Statements', 'Switch Case', 'For Loop', 'While and Do-While Loops'],
          },
          {
              module: 'Module 4: Functions',
              description: 'Understanding the concept of functions in C and how to create reusable code.',
              topics: ['Function Declaration', 'Function Definition', 'Function Arguments', 'Recursion'],
          },
          {
              module: 'Module 5: Arrays and Strings',
              description: 'Exploring the use of arrays and strings in C programming.',
              topics: ['One-Dimensional Arrays', 'Multi-Dimensional Arrays', 'String Handling Functions', 'Pointer and Arrays'],
          },
          {
              module: 'Module 6: Pointers',
              description: 'Understanding pointers and their significance in C programming.',
              topics: ['Pointer Basics', 'Pointer Arithmetic', 'Pointers and Functions', 'Pointers and Arrays'],
          },
          {
              module: 'Module 7: Structures and Unions',
              description: 'Learning about structures and unions to group related data.',
              topics: ['Defining Structures', 'Accessing Structure Members', 'Unions vs Structures', 'Nested Structures'],
          },
          {
              module: 'Module 8: File Handling',
              description: 'Exploring file operations in C, including reading and writing to files.',
              topics: ['File Operations', 'Opening and Closing Files', 'Reading and Writing Data', 'Error Handling'],
          },
      ];
  
      const faqs = [
          {
              question: 'What is C programming?',
              answer: 'C is a high-level programming language developed in the early 1970s, known for its efficiency and control, widely used for system and application software development.'
          },
          {
              question: 'What are the main features of C?',
              answer: 'C is a structured, procedural language that provides low-level access to memory, is highly portable, and supports recursion and structured programming.'
          },
          {
              question: 'What is the difference between a variable and a constant?',
              answer: 'A variable is a storage location with a name that can hold different values during program execution, while a constant is a fixed value that cannot change.'
          },
          {
              question: 'What are functions in C?',
              answer: 'Functions are blocks of code that perform a specific task, allowing for code reuse and better organization. Functions can accept parameters and return values.'
          },
          {
              question: 'What is a pointer?',
              answer: 'A pointer is a variable that stores the address of another variable. Pointers provide a way to access and manipulate memory directly.'
          },
          {
              question: 'How are arrays and strings represented in C?',
              answer: 'Arrays are collections of elements of the same data type, while strings are arrays of characters terminated by a null character'
          },
          {
              question: 'What is file handling in C?',
              answer: 'File handling in C refers to the methods used to read from and write to files, allowing data to be stored persistently outside the program.'
          },
          {
              question: 'Why is C considered a foundational language?',
              answer: 'C is considered foundational because it forms the basis for many modern programming languages and is widely used for system-level programming and embedded systems.'
          },
      ];

     return (<>
     <Header/>
       <BannerForAll
        title="C Language Programming"
        text="Our C Language course provides a comprehensive introduction to programming, focusing on core concepts like variables, control structures, functions, pointers, and memory management. Key topics include data structures (arrays, linked lists, stacks, queues) and file handling. Emphasis is placed on logic building and problem-solving skills, with practical exercises and small projects to reinforce learning. Gain hands-on experience by developing applications such as calculators, game logic, and simple database systems. Ideal for beginners aiming to establish a strong foundation in programming."
        image={cimage} 
        month="5 "/>
        
       

             <ModuleList modules={curriculum} faqs={faqs} topic="C Language  Curriculam"/>
         
        <Footer/>

     </>)
}
export default CLanguage;