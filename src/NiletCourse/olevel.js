 
import Header from "../header";
import Footer from "../footer";
import BannerForAll from "../bannerforall";
import ModuleList from "../modulelist";
import olevelimage from '../images/nilet/olevel.jpg';
function OLevel(){

     const curriculum = [
          {
            module: 'Module 1: IT Tools and Business Systems',
            description: 'Introduction to essential IT tools and systems used in business environments.',
            topics: ['Introduction to Computer Systems', 'MS Office Suite (Word, Excel, PowerPoint)', 'Internet and Web Technologies', 'Email and Communication Tools', 'Digital Signature and E-Commerce'],
          },
          {
            module: 'Module 2: Programming and Problem Solving Through Python',
            description: 'Learning to solve problems using the Python programming language.',
            topics: ['Introduction to Python', 'Control Structures and Functions', 'Data Structures (Lists, Tuples, Dictionaries)', 'File Handling', 'Object-Oriented Programming in Python'],
          },
          {
            module: 'Module 3: Internet Technology and Web Design',
            description: 'Introduction to web design and internet technologies for building dynamic websites.',
            topics: ['HTML5 and CSS3', 'JavaScript Basics', 'Responsive Web Design', 'Client-Server Model', 'Web Hosting and Domain Names'],
          },
          {
            module: 'Module 4: Data Management and RDBMS',
            description: 'Understanding the concepts of relational database management systems (RDBMS).',
            topics: ['Introduction to Databases', 'SQL Queries and Commands', 'Normalization', 'Database Design', 'Introduction to MySQL'],
          },
          {
            module: 'Module 5: Introduction to Multimedia',
            description: 'Learning the fundamentals of multimedia, including images, audio, and video.',
            topics: ['Graphics and Animation', 'Audio and Video Editing', 'Multimedia Applications', 'Introduction to Flash and Photoshop', 'Creating Digital Content'],
          },
          {
            module: 'Module 6: Information Security and Cyber Law',
            description: 'Understanding the basics of information security and relevant cyber laws.',
            topics: ['Security Threats and Vulnerabilities', 'Firewalls and Antivirus', 'Encryption and Decryption', 'Cyber Crimes and Legal Aspects', 'Introduction to IT Act'],
          },
          {
            module: 'Module 7: Project Work',
            description: 'Application of learned skills to real-world problems through project development.',
            topics: ['Developing a Web Application', 'Database Design Project', 'Implementing Security Measures', 'Python Programming Project', 'Multimedia Project'],
          },
        ];

        const faqs = [
          {
            question: 'What is the O-Level Computer Course?',
            answer: 'The O-Level Computer Course is an intermediate certification designed to provide knowledge of computer applications, programming, web design, and information security. It is recognized by NIELIT (National Institute of Electronics and Information Technology).'
          },
          {
            question: 'Who can enroll in the O-Level Computer Course?',
            answer: 'Anyone who has passed the 10+2 (high school) or equivalent examination is eligible to enroll. It is also ideal for individuals seeking to build foundational skills in IT and computer science.'
          },
          {
            question: 'What are the benefits of the O-Level Computer Course?',
            answer: 'The O-Level course equips learners with a strong foundation in programming, web development, database management, and IT tools, making them eligible for entry-level positions in the IT industry.'
          },
          {
            question: 'How long does the O-Level Computer Course take?',
            answer: 'The O-Level course typically takes about one year to complete, which includes theoretical lessons and practical lab work.'
          },
          {
            question: 'Is the O-Level Computer Course recognized?',
            answer: 'Yes, the O-Level certification is recognized by the Government of India and is equivalent to a foundation-level diploma in IT. It is often required for various IT and government jobs.'
          },
          {
            question: 'What is the exam pattern for the O-Level Computer Course?',
            answer: 'The O-Level exams consist of both theory and practical assessments. Students are evaluated on their understanding of IT tools, Python programming, web design, databases, and information security.'
          },
          {
            question: 'What are the prerequisites for the O-Level Computer Course?',
            answer: 'The minimum qualification is 10+2 or an equivalent examination. However, candidates with prior knowledge of basic computer concepts and programming are better positioned to grasp the course content.'
          },
          {
            question: 'Is the O-Level Computer Course available online?',
            answer: 'Yes, many institutes offer the O-Level Computer Course online, providing flexible options for students through recorded lectures, live sessions, and remote project work.'
          },
        ];
        
     return (<>
     <Header/>
       <BannerForAll
        title="O-Level"
        text="Our O-Level Course is designed to equip students with a strong foundation in computer science and IT skills. Covering essential topics such as programming concepts, database management, web development, and computer networking, this course prepares learners for both academic and professional success. Students will gain hands-on experience with languages like HTML, CSS, and JavaScript, along with practical training in software applications and tools. Emphasis is placed on problem-solving and critical thinking skills essential for the digital age. Ideal for those aiming to advance their knowledge and skills in information technology."
        image={olevelimage}
        month="12 " />

       <ModuleList modules={curriculum} faqs={faqs} topic="O-Level Course"/>
        <Footer/>

     </>)
}
export default OLevel;