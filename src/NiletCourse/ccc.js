import Header from "../header";
import Footer from "../footer";
import BannerForAll from "../bannerforall";
import ModuleList from "../modulelist";
import cccimage from '../images/nilet/ccc.png'
function Ccc(){

     const curriculum = [
          {
              module: 'Module 1: Introduction to Computers',
              description: 'Understanding the basic concepts of computers and their applications.',
              topics: ['What is a Computer?', 'History of Computers', 'Types of Computers', 'Applications of Computers', 'Understanding Hardware and Software'],
          },
          {
              module: 'Module 2: Operating System and Internet Basics',
              description: 'Learning about operating systems and internet fundamentals.',
              topics: ['Introduction to Operating Systems', 'Windows/Linux Basics', 'File Management', 'Understanding the Internet', 'Introduction to Web Browsers'],
          },
          {
              module: 'Module 3: Word Processing (LibreOffice Writer/MS Word)',
              description: 'Hands-on training for creating and formatting documents.',
              topics: ['Creating a Document', 'Formatting Text', 'Inserting Tables and Images', 'Page Layout and Printing', 'Spell Check and Grammar'],
          },
          {
              module: 'Module 4: Spreadsheet Software (LibreOffice Calc/MS Excel)',
              description: 'Learning how to create, modify, and analyze data using spreadsheets.',
              topics: ['Introduction to Spreadsheets', 'Creating and Editing Worksheets', 'Formulas and Functions', 'Charts and Graphs', 'Data Sorting and Filtering'],
          },
          {
              module: 'Module 5: Presentation Software (LibreOffice Impress/MS PowerPoint)',
              description: 'Creating professional presentations with animations and transitions.',
              topics: ['Introduction to Presentations', 'Creating Slides', 'Inserting Multimedia', 'Animations and Transitions', 'Presentation Tips and Techniques'],
          },
          {
              module: 'Module 6: Internet Applications',
              description: 'Exploring different applications of the internet for daily use.',
              topics: ['Email and Communication Tools', 'Online Banking', 'Social Media Basics', 'E-Commerce', 'Cyber Security and Safety Measures'],
          },
          {
              module: 'Module 7: Basic Computer Hardware and Troubleshooting',
              description: 'Understanding hardware components and common troubleshooting techniques.',
              topics: ['Introduction to Computer Hardware', 'Input/Output Devices', 'Basic Troubleshooting', 'Computer Maintenance', 'Understanding Printers and Scanners'],
          },
          {
              module: 'Module 8: Digital Financial Services',
              description: 'Learning about digital payment systems and how to use them effectively.',
              topics: ['Introduction to Digital Payment Systems', 'UPI and Mobile Wallets', 'Net Banking', 'Security in Online Transactions', 'Government Digital Initiatives'],
          },
      ];
  
      const faqs = [
          {
              question: 'What is the CCC course?',
              answer: 'CCC (Course on Computer Concepts) is a certification course designed to impart basic IT literacy, enabling individuals to effectively use computers and the internet for personal and professional purposes.'
          },
          {
              question: 'Who can enroll in the CCC course?',
              answer: 'Anyone with a basic interest in computers can enroll in this course, regardless of prior experience. It is suitable for students, professionals, and individuals looking to enhance their digital literacy.'
          },
          {
              question: 'What are the benefits of the CCC course?',
              answer: 'The CCC course equips learners with essential computer skills, making them capable of using common software applications like word processors, spreadsheets, and internet applications, enhancing their employability.'
          },
          {
              question: 'How long is the CCC course?',
              answer: 'The CCC course typically spans 80 hours, which includes theory as well as practical sessions. It is usually completed within 2-3 months depending on the institute’s schedule.'
          },
          {
              question: 'Is the CCC certification recognized?',
              answer: 'Yes, CCC certification is widely recognized in India. It is often required for various government jobs and is considered a foundational course for digital literacy.'
          },
          {
              question: 'What is the exam pattern for the CCC course?',
              answer: 'The CCC exam consists of a 100-mark multiple-choice test. It covers topics such as computer fundamentals, internet usage, word processing, spreadsheet handling, and presentation skills.'
          },
          {
              question: 'What are the prerequisites for the CCC course?',
              answer: 'There are no specific prerequisites for the CCC course. Basic knowledge of reading and writing in English is sufficient to get started.'
          },
          {
              question: 'Is the CCC course available online?',
              answer: 'Yes, many institutions, including NIELIT, offer the CCC course online with both recorded lectures and live sessions, allowing learners to complete it remotely.'
          },
      ];

     return (<>
     <Header/>
       <BannerForAll
        title="CCC (Course On Computer Concept)"
        text="Our CCC course on Computer Concepts provides a foundational understanding of essential computer skills for beginners. Key topics include computer hardware, software, operating systems, and internet usage, along with practical applications of word processing, spreadsheets, and presentations. Learn the basics of file management, online security, and digital communication. This course is designed to equip you with the necessary skills to navigate the digital world confidently. Ideal for students and professionals seeking to enhance their computer literacy."
        image={cccimage} 
        month="3 "/>

          <ModuleList modules={curriculum} faqs={faqs} topic="CCC (Course On Computer Concept)"/>
        

        <Footer/>

     </>)
}
export default Ccc;