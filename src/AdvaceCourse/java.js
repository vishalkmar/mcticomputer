 
import Header from "../header";
import Footer from "../footer";
import BannerForAll from "../bannerforall";
import ModuleList from "../modulelist";
import javaimage from '../images/advance/core-java-online-training.jpg'
function CoreJava(){

     const curriculum = [
          {
              module: 'Module 1: Introduction to Java',
              description: 'Understanding Java programming language, its features, and the Java Development Kit (JDK).',
              topics: ['History of Java', 'Java Features', 'Setting Up JDK and IDE', 'Java Syntax and Structure'],
          },
          {
              module: 'Module 2: Object-Oriented Programming (OOP) Concepts',
              description: 'Exploring the core principles of OOP in Java: Encapsulation, Inheritance, Polymorphism, and Abstraction.',
              topics: ['Classes and Objects', 'Methods and Constructors', 'Inheritance Hierarchies', 'Polymorphism and Interfaces'],
          },
          {
              module: 'Module 3: Java Data Types and Control Statements',
              description: 'Learning about Java data types, variables, operators, and control statements.',
              topics: ['Primitive Data Types', 'Reference Data Types', 'Control Flow Statements (if, switch, loops)', 'Type Casting'],
          },
          {
              module: 'Module 4: Exception Handling',
              description: 'Understanding error handling in Java using exceptions and creating robust applications.',
              topics: ['Types of Exceptions', 'Try-Catch Blocks', 'Throwing and Catching Exceptions', 'Custom Exceptions'],
          },
          {
              module: 'Module 5: Java Collections Framework',
              description: 'Exploring the Collections Framework for storing and manipulating groups of objects.',
              topics: ['Introduction to Collections', 'List, Set, and Map Interfaces', 'Common Implementations (ArrayList, HashMap)', 'Iterators and Algorithms'],
          },
          {
              module: 'Module 6: Multithreading and Concurrency',
              description: 'Understanding multithreading concepts and how to create concurrent Java applications.',
              topics: ['Creating Threads', 'Thread Lifecycle', 'Synchronization', 'Inter-thread Communication'],
          },
          {
              module: 'Module 7: Java Input/Output (I/O)',
              description: 'Learning about Java I/O streams for reading and writing data to files.',
              topics: ['File Handling', 'Byte Streams and Character Streams', 'Buffered I/O', 'Serialization'],
          },
          {
              module: 'Module 8: Java Networking Basics',
              description: 'Exploring networking concepts in Java and building basic client-server applications.',
              topics: ['Introduction to Networking', 'Socket Programming', 'Building a Simple Client-Server App', 'URL and URLConnection'],
          },
      ];
  
      const faqs = [
          {
              question: 'What is Core Java?',
              answer: 'Core Java refers to the fundamental features and concepts of the Java programming language that are essential for developing Java applications.'
          },
          {
              question: 'What are the main features of Java?',
              answer: 'Java is platform-independent, object-oriented, secure, robust, and supports multithreading and garbage collection.'
          },
          {
              question: 'What is the difference between JDK, JRE, and JVM?',
              answer: 'JDK (Java Development Kit) is a software development kit for developing Java applications, JRE (Java Runtime Environment) is used to run Java applications, and JVM (Java Virtual Machine) executes Java bytecode.'
          },
          {
              question: 'What is OOP and why is it important in Java?',
              answer: 'Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects". It helps in organizing code, promoting code reuse, and making it easier to manage large applications.'
          },
          {
              question: 'What are exceptions in Java?',
              answer: 'Exceptions are events that occur during the execution of a program that disrupts the normal flow of instructions. Java provides a robust exception handling mechanism using try-catch blocks.'
          },
          {
              question: 'What is the Collections Framework in Java?',
              answer: 'The Collections Framework is a unified architecture for representing and manipulating collections in Java. It includes interfaces like List, Set, and Map, and their implementations.'
          },
          {
              question: 'How can I create a thread in Java?',
              answer: 'You can create a thread in Java by extending the Thread class or implementing the Runnable interface and then using the start() method to execute it.'
          },
          {
              question: 'What is the purpose of Java I/O?',
              answer: 'Java I/O provides a way to read and write data from various sources such as files, networks, and memory, allowing developers to handle data efficiently.'
          },
      ];
     return (<>
     <Header/>
       <BannerForAll
        title="Core Java"
        text="Our Core Java course provides a solid foundation in Java programming, covering essential concepts like object-oriented programming (OOP), data structures, exception handling, and multithreading. Learn to build robust applications with Java's powerful libraries and frameworks. Topics include JavaFX, JDBC for database connectivity, and advanced concepts like collections and streams. Gain hands-on experience with real-world projects, preparing you to develop scalable and efficient applications. Ideal for those looking to master Java and its technologies."
        image={javaimage}
        month="6 " 
        />
       
         <ModuleList modules={curriculum} faqs={faqs} topic="Java Curriculam"/>
       
        <Footer/>

     </>)
}
export default CoreJava;