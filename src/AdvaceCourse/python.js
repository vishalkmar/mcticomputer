 
import Header from "../header";
import Footer from "../footer";
import BannerForAll from "../bannerforall";
import ModuleList from "../modulelist";
import pythonimage from '../images/advance/python.jpg'
function Python(){

     const curriculum = [
          {
              module: 'Module 1: Introduction to Python',
              description: 'Overview of Python programming language, its features, and setup.',
              topics: ['What is Python?', 'Features of Python', 'Installing Python', 'Setting Up the Environment', 'Hello World Program'],
          },
          {
              module: 'Module 2: Data Types and Variables',
              description: 'Understanding basic data types, variables, and type conversion.',
              topics: ['Basic Data Types (int, float, string, bool)', 'Variables and Constants', 'Type Casting', 'Input and Output'],
          },
          {
              module: 'Module 3: Control Structures',
              description: 'Learning about decision-making and looping constructs.',
              topics: ['Conditional Statements (if, elif, else)', 'Looping Statements (for, while)', 'Break and Continue Statements', 'List Comprehensions'],
          },
          {
              module: 'Module 4: Functions and Modules',
              description: 'Exploring functions, modules, and error handling in Python.',
              topics: ['Defining Functions', 'Function Arguments and Return Values', 'Lambda Functions', 'Importing Modules', 'Exception Handling'],
          },
          {
              module: 'Module 5: Data Structures',
              description: 'Understanding built-in data structures: lists, tuples, sets, and dictionaries.',
              topics: ['Lists and List Methods', 'Tuples and Their Usage', 'Sets and Set Operations', 'Dictionaries and Dictionary Methods'],
          },
          {
              module: 'Module 6: File Handling',
              description: 'Learning how to read from and write to files in Python.',
              topics: ['Opening and Closing Files', 'Reading Files', 'Writing to Files', 'Working with CSV and JSON'],
          },
          {
              module: 'Module 7: Object-Oriented Programming (OOP)',
              description: 'Understanding the principles of OOP in Python.',
              topics: ['Classes and Objects', 'Inheritance', 'Polymorphism', 'Encapsulation', 'Abstract Classes and Interfaces'],
          },
          {
              module: 'Module 8: Libraries and Frameworks',
              description: 'Exploring popular libraries and frameworks in Python.',
              topics: ['NumPy for Numerical Computing', 'Pandas for Data Analysis', 'Matplotlib for Data Visualization', 'Flask/Django for Web Development'],
          },
      ];
  
      const faqs = [
          {
              question: 'What is Python?',
              answer: 'Python is a high-level, interpreted programming language known for its simplicity and readability, making it ideal for beginners and professionals alike.'
          },
          {
              question: 'Why should I learn Python?',
              answer: 'Python is versatile and widely used in various fields such as web development, data science, machine learning, and automation, making it a valuable skill in today’s job market.'
          },
          {
              question: 'What are Python data types?',
              answer: 'Python has several built-in data types, including integers, floats, strings, lists, tuples, sets, and dictionaries, each serving different purposes in data manipulation.'
          },
          {
              question: 'What is a function in Python?',
              answer: 'A function is a block of reusable code that performs a specific task. Functions can accept parameters and return results, enhancing code modularity.'
          },
          {
              question: 'What is Object-Oriented Programming (OOP)?',
              answer: 'OOP is a programming paradigm based on the concept of “objects,” which can contain data and methods. Python supports OOP principles like inheritance, encapsulation, and polymorphism.'
          },
          {
              question: 'How do I handle exceptions in Python?',
              answer: 'Exceptions can be handled using try and except blocks, allowing you to catch and manage errors that occur during the execution of your code.'
          },
          {
              question: 'What are some popular Python libraries?',
              answer: 'Popular libraries include NumPy for numerical computations, Pandas for data analysis, Matplotlib for data visualization, and Flask or Django for web development.'
          },
          {
              question: 'Can I use Python for web development?',
              answer: 'Yes, Python can be used for web development, with frameworks like Flask and Django that facilitate building robust web applications efficiently.'
          },
      ];

     return (<>
     <Header/>
       <BannerForAll
        title="Python"
        text="Our Python Programming course covers fundamental to advanced concepts, making it ideal for both beginners and experienced developers. Learn core topics such as data types, control structures, functions, and object-oriented programming. Explore Python's vast libraries for web development, data analysis, and automation. Gain hands-on experience in building real-world applications and solving complex problems with clean, efficient code. Perfect for those aiming to leverage Python's versatility across various domains."
        image={pythonimage}
        month="6 " />
       
       
      

         <ModuleList modules={curriculum} faqs={faqs} topic="Python Full Course Curriculam"/>
        <Footer/>

     </>)
}
export default Python;