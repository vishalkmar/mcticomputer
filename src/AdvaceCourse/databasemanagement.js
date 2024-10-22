 
import Header from "../header";
import Footer from "../footer";
import BannerForAll from "../bannerforall";
import ModuleList from "../modulelist";
import dbmsimage from '../images/advance/dbmsimage.png'
function DatabaseManagement(){
     const curriculum = [
          {
              module: 'Module 1: Introduction to Database Management',
              description: 'Understanding database concepts, types of databases, and the importance of data management.',
              topics: ['What is a Database?', 'Types of Databases', 'Database Management Systems (DBMS)', 'Data Modeling'],
          },
          {
              module: 'Module 2: Relational Database Management System (RDBMS)',
              description: 'Exploring relational databases, normalization, and SQL fundamentals.',
              topics: ['Introduction to RDBMS', 'Normalization and Denormalization', 'Creating Tables', 'SQL Basics'],
          },
          {
              module: 'Module 3: Structured Query Language (SQL)',
              description: 'Learning SQL for querying and managing relational databases.',
              topics: ['SQL Syntax', 'SELECT Statements', 'INSERT, UPDATE, DELETE', 'Joins and Subqueries'],
          },
          {
              module: 'Module 4: Advanced SQL Techniques',
              description: 'Exploring advanced SQL features for complex queries and data manipulation.',
              topics: ['Aggregate Functions', 'Views', 'Stored Procedures', 'Triggers'],
          },
          {
              module: 'Module 5: Introduction to NoSQL Databases',
              description: 'Understanding NoSQL databases, their types, and use cases.',
              topics: ['What is NoSQL?', 'Types of NoSQL Databases', 'When to Use NoSQL', 'Comparing SQL and NoSQL'],
          },
          {
              module: 'Module 6: MongoDB Fundamentals',
              description: 'Learning MongoDB for document-based data management and querying.',
              topics: ['MongoDB Installation', 'CRUD Operations', 'Data Modeling in MongoDB', 'Indexes and Aggregation'],
          },
          {
              module: 'Module 7: Practical SQL Queries',
              description: 'Hands-on practice with SQL queries on a sample database.',
              topics: ['Building SQL Queries', 'Data Retrieval Techniques', 'Query Optimization', 'Error Handling'],
          },
          {
              module: 'Module 8: Practical MongoDB Queries',
              description: 'Hands-on practice with MongoDB queries on a sample dataset.',
              topics: ['MongoDB Query Language', 'Using Aggregation Framework', 'Data Manipulation', 'Working with JSON'],
          },
      ];
  
      const faqs = [
          {
              question: 'What is Database Management?',
              answer: 'Database Management involves the use of software tools and systems to manage and manipulate data efficiently, ensuring data integrity, security, and accessibility.'
          },
          {
              question: 'What is the difference between SQL and NoSQL?',
              answer: 'SQL is a language used for managing relational databases, while NoSQL refers to a broader category of databases that can handle unstructured data, providing more flexibility and scalability.'
          },
          {
              question: 'What are the advantages of using a Database Management System (DBMS)?',
              answer: 'DBMS provides data integrity, security, concurrency control, and efficient data retrieval, making it easier to manage large volumes of data.'
          },
          {
              question: 'What is normalization in databases?',
              answer: 'Normalization is the process of organizing data in a database to minimize redundancy and improve data integrity by dividing a database into tables and defining relationships.'
          },
          {
              question: 'What is MongoDB and when should I use it?',
              answer: 'MongoDB is a NoSQL database that stores data in a flexible, JSON-like format. It is ideal for applications that require scalability and the ability to handle unstructured data.'
          },
          {
              question: 'Can I perform complex queries in SQL?',
              answer: 'Yes, SQL allows for complex queries using joins, subqueries, and various functions that help in data retrieval and manipulation.'
          },
          {
              question: 'How do I choose between SQL and NoSQL databases?',
              answer: 'Choose SQL for structured data with complex relationships and transactions, while NoSQL is suitable for unstructured data and applications requiring horizontal scalability.'
          },
          {
              question: 'What skills do I need to become a Database Administrator?',
              answer: 'A Database Administrator should have strong knowledge of SQL, database design, data modeling, backup and recovery procedures, and an understanding of both RDBMS and NoSQL systems.'
          },
      ];

     return (<>
     <Header/>
       <BannerForAll
        title="Database Management"
        text="Our Database Management course covers essential skills for working with both relational (SQL) and NoSQL (MongoDB) databases. Learn how to design, implement, and query databases using SQL for structured data and MongoDB for flexible, document-based storage. Topics include database normalization, indexing, transactions, and data modeling. Gain hands-on experience in managing large datasets and optimizing database performance. This course is ideal for those looking to build a strong foundation in modern data management technologies."
        image={dbmsimage} 
        month="5 "/>
        
         <ModuleList modules={curriculum} faqs={faqs} topic="Database Management Curriculam"/>
        <Footer/>

     </>)
}
export default DatabaseManagement;