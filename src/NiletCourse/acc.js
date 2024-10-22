 
import Header from "../header";
import Footer from "../footer";
import BannerForAll from "../bannerforall";
import ModuleList from "../modulelist";
import accimage from '../images/nilet/acc.jpg'
function Acc(){
     const curriculum = [
          {
            module: 'Module 1: Introduction to Computers',
            description: 'Understanding the basic concepts of computers and their applications.',
            topics: ['What is a Computer?', 'Types of Computers', 'Applications of Computers', 'Overview of Hardware and Software', 'Basic Computer Terminology'],
          },
          {
            module: 'Module 2: Operating System Basics',
            description: 'Learning the basics of operating systems and how to interact with them.',
            topics: ['Introduction to Operating Systems', 'File Management Basics', 'Desktop Navigation', 'Using Windows/Linux', 'Basic System Maintenance'],
          },
          {
            module: 'Module 3: Word Processing Software',
            description: 'Introduction to creating and editing documents.',
            topics: ['Creating a New Document', 'Editing and Formatting Text', 'Inserting Tables and Images', 'Saving and Printing Documents', 'Introduction to Templates'],
          },
          {
            module: 'Module 4: Spreadsheet Software',
            description: 'Basics of working with spreadsheets and analyzing data.',
            topics: ['Introduction to Spreadsheets', 'Creating Simple Worksheets', 'Basic Formulas and Functions', 'Sorting and Filtering Data', 'Printing Worksheets'],
          },
          {
            module: 'Module 5: Presentation Software',
            description: 'Learning to create simple and effective presentations.',
            topics: ['Creating a New Presentation', 'Adding and Formatting Slides', 'Inserting Multimedia', 'Simple Transitions and Animations', 'Saving and Presenting'],
          },
          {
            module: 'Module 6: Internet Basics',
            description: 'Understanding the internet, how to browse safely, and use communication tools.',
            topics: ['Introduction to the Internet', 'Web Browsing Basics', 'Email Basics', 'Safe Internet Practices', 'Introduction to Social Media'],
          },
          {
            module: 'Module 7: Introduction to Digital Payments',
            description: 'Overview of digital transactions and online payment methods.',
            topics: ['Introduction to Digital Payment Systems', 'Using Mobile Wallets and UPI', 'Security in Online Transactions', 'Overview of Net Banking', 'Government Digital Services'],
          },
        ];

        const faqs = [
          {
            question: 'What is the ACC course?',
            answer: 'ACC (Awareness in Computer Concepts) is designed to provide beginners with foundational knowledge of computers, covering basic operations, internet usage, and common software applications.'
          },
          {
            question: 'Who can enroll in the ACC course?',
            answer: 'The ACC course is suitable for absolute beginners with no prior computer experience. It is ideal for students, homemakers, and professionals who want to gain a basic understanding of computer concepts.'
          },
          {
            question: 'What are the benefits of the ACC course?',
            answer: 'The ACC course equips learners with basic computer skills such as using word processing, spreadsheets, and safe internet practices. These skills are essential for both personal and professional digital activities.'
          },
          {
            question: 'How long is the ACC course?',
            answer: 'The ACC course typically takes around 40 hours to complete, depending on the institute’s schedule. It includes practical sessions to reinforce theoretical learning.'
          },
          {
            question: 'Is the ACC certification recognized?',
            answer: 'Yes, ACC certification is recognized as a basic qualification for digital literacy. It is often required for entry-level positions and basic administrative roles in various sectors.'
          },
          {
            question: 'What is the exam pattern for the ACC course?',
            answer: 'The ACC course usually concludes with a multiple-choice exam covering basic computer operations, word processing, spreadsheet usage, and internet safety. Practical assessments may also be included.'
          },
          {
            question: 'Is the ACC course available online?',
            answer: 'Yes, many institutions offer the ACC course online, allowing learners to study at their own pace with recorded lectures and live sessions.'
          },
        ];
        
     return (<>
     <Header/>
       <BannerForAll
        title="ACC (Awarness In Computer Concept)"
        text="Our ACC (Awareness in Computer Concepts) course provides a comprehensive introduction to the basic concepts of computers and their applications. Key topics include understanding computer hardware and software, operating systems, and the fundamentals of the internet. Participants will learn essential skills in word processing, spreadsheets, and presentations, enhancing their digital proficiency. The course emphasizes practical applications and safe internet practices, equipping learners with the confidence to navigate the digital world. Ideal for beginners looking to establish a strong foundation in computer literacy."
        image={accimage} 
        month="3 "/>

         <ModuleList modules={curriculum} faqs={faqs} topic="ACC (Awarness In Computer Concept)"/>
        <Footer/>

     </>)
}
export default Acc;