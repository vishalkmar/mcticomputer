 
import Header from "../header";
import Footer from "../footer";
import BannerForAll from "../bannerforall";
import ModuleList from "../modulelist";
import bccimage from '../images/nilet/bcc.png'
function Bcc(){

     const curriculum = [
          {
            module: 'Module 1: Introduction to Computers',
            description: 'Learn about the basic concepts and uses of computers.',
            topics: ['What is a Computer?', 'History of Computers', 'Types of Computers', 'Applications of Computers', 'Understanding Hardware and Software'],
          },
          {
            module: 'Module 2: Introduction to Operating Systems',
            description: 'Learn how to interact with different operating systems.',
            topics: ['What is an Operating System?', 'Functions of an Operating System', 'Overview of Windows/Linux OS', 'Basic File Management', 'Using Desktop and Icons'],
          },
          {
            module: 'Module 3: Word Processing Software (LibreOffice Writer/MS Word)',
            description: 'Learn how to create and format documents using word processing software.',
            topics: ['Creating a New Document', 'Editing and Formatting Text', 'Inserting Tables and Images', 'Saving and Printing Documents', 'Spell Check and Grammar'],
          },
          {
            module: 'Module 4: Introduction to Spreadsheet Software (LibreOffice Calc/MS Excel)',
            description: 'Learn to create and manage spreadsheets for various tasks.',
            topics: ['What is a Spreadsheet?', 'Basic Spreadsheet Functions', 'Formulas and Functions', 'Creating Charts and Graphs', 'Saving and Printing Worksheets'],
          },
          {
            module: 'Module 5: Introduction to Presentation Software (LibreOffice Impress/MS PowerPoint)',
            description: 'Learn to create effective presentations for professional use.',
            topics: ['What is Presentation Software?', 'Creating a New Presentation', 'Formatting Slides', 'Adding Transitions and Animations', 'Saving and Presenting'],
          },
          {
            module: 'Module 6: Introduction to Internet and Email',
            description: 'Understand the basics of using the internet and email communication.',
            topics: ['What is the Internet?', 'Using a Web Browser', 'Introduction to Search Engines', 'Creating and Managing an Email Account', 'Sending and Receiving Emails'],
          },
          {
            module: 'Module 7: Introduction to Digital Payments',
            description: 'Understand how to use digital payment systems safely and effectively.',
            topics: ['Overview of Digital Payments', 'UPI and Mobile Wallets', 'Net Banking Basics', 'Security in Online Transactions', 'Government Digital Services'],
          },
        ];
        const faqs = [
          {
            question: 'What is the BCC course?',
            answer: 'BCC (Basic Computer Course) is designed to impart basic computer knowledge and skills to learners, enabling them to use a computer and common software applications for personal and professional purposes.'
          },
          {
            question: 'Who should enroll in the BCC course?',
            answer: 'The BCC course is suitable for beginners who want to start using computers. It is ideal for students, homemakers, small business owners, and anyone seeking foundational computer literacy.'
          },
          {
            question: 'What are the benefits of the BCC course?',
            answer: 'The BCC course provides essential skills in using word processors, spreadsheets, presentation tools, and the internet. It also includes basic digital payment skills, making it practical for everyday use.'
          },
          {
            question: 'How long does the BCC course last?',
            answer: 'The BCC course usually spans 36 hours, which includes both theoretical lessons and practical sessions. Depending on the institute, it can be completed within 1-2 months.'
          },
          {
            question: 'Is the BCC certification recognized?',
            answer: 'Yes, BCC certification is recognized by several institutions in India and is often considered a qualification for entry-level IT literacy.'
          },
          {
            question: 'What is the exam pattern for the BCC course?',
            answer: 'The BCC exam typically consists of multiple-choice questions covering basic computer knowledge, word processing, spreadsheet usage, internet navigation, and email communication.'
          },
          {
            question: 'What are the prerequisites for the BCC course?',
            answer: 'There are no prerequisites for the BCC course. Anyone interested in learning about computers can enroll without prior experience.'
          },
          {
            question: 'Is the BCC course available online?',
            answer: 'Yes, many training centers offer the BCC course online, providing recorded lectures and live sessions to allow learners to complete the course remotely.'
          },
        ];
        
        
     return (<>
     <Header/>
       <BannerForAll
        title="BCC (Basic Computer Course)"
        text="Our BCC (Basic Computer Course) is designed to introduce participants to the fundamental concepts of computer technology. Covering essential topics such as hardware, software, operating systems, and internet navigation, this course provides a solid foundation for computer literacy. Learn practical skills in word processing, spreadsheets, and presentation tools to enhance productivity. Emphasis is placed on file management, online safety, and effective digital communication. Ideal for beginners seeking to build confidence and competence in using computers"
        image={bccimage}
        month="3 "/>

         <ModuleList modules={curriculum} faqs={faqs} topic="BCC (Basic Computer Course"/>
        <Footer/>

     </>)
}
export default Bcc;