
import Header from "../header";
import Footer from "../footer";
import BannerForAll from "../bannerforall";
import ModuleList from "../modulelist";
import basiccomputerimage from '../images/basic/basic.jpg'
function BasicComputerComponent(){

    const curriculum = [
        {
          module: 'Module 1: Introduction to Computers',
          description: 'Understanding the basic concepts of computers and their applications.',
          topics: ['What is a Computer?', 'Components of a Computer System', 'Types of Computers', 'Applications of Computers', 'Basic Terminology'],
        },
        {
          module: 'Module 2: Operating Systems',
          description: 'Learning about operating systems and their functions.',
          topics: ['What is an Operating System?', 'Introduction to Windows and Linux', 'File Management Basics', 'User Interface Navigation', 'Installing Software Applications'],
        },
        {
          module: 'Module 3: Word Processing',
          description: 'Hands-on training in word processing applications like MS Word.',
          topics: ['Creating and Formatting Documents', 'Text Editing Techniques', 'Inserting Images and Tables', 'Page Layout and Printing', 'Using Templates'],
        },
        {
          module: 'Module 4: Spreadsheet Software',
          description: 'Using spreadsheet applications such as MS Excel for data management.',
          topics: ['Introduction to Spreadsheets', 'Creating and Editing Worksheets', 'Using Formulas and Functions', 'Creating Charts and Graphs', 'Data Sorting and Filtering'],
        },
        {
          module: 'Module 5: Internet and Email Basics',
          description: 'Exploring the internet and its applications, including email communication.',
          topics: ['Understanding the Internet', 'Web Browsers and Search Engines', 'Creating and Managing Email Accounts', 'Online Safety and Security', 'Social Media Basics'],
        },
        {
          module: 'Module 6: Presentation Software',
          description: 'Creating professional presentations using software like MS PowerPoint.',
          topics: ['Designing Slides', 'Adding Multimedia Elements', 'Using Animations and Transitions', 'Presentation Skills', 'Tips for Effective Presentations'],
        },
        {
          module: 'Module 7: Basic Computer Maintenance',
          description: 'Learning how to maintain and troubleshoot basic computer issues.',
          topics: ['Introduction to Computer Hardware', 'Common Hardware Problems', 'Basic Troubleshooting Techniques', 'Software Maintenance', 'Virus Protection'],
        },
        {
          module: 'Module 8: Final Project and Evaluation',
          description: 'Capstone project to showcase the skills learned throughout the course.',
          topics: ['Real-world Computer Applications', 'Project Presentation', 'Peer Review and Feedback', 'Evaluation Criteria', 'Continuous Learning Paths'],
        },
      ];

      const faqs = [
        {
          question: 'What is the Basic Computer course?',
          answer: 'The Basic Computer course is designed to provide foundational knowledge of computer operations, software applications, and internet usage, suitable for beginners.'
        },
        {
          question: 'Who can enroll in the Basic Computer course?',
          answer: 'Anyone interested in learning about computers, including students, professionals, and seniors, can enroll in this course.'
        },
        {
          question: 'What are the benefits of completing the Basic Computer course?',
          answer: 'Participants will gain essential computer skills that enhance their employability and allow them to efficiently navigate the digital world.'
        },
        {
          question: 'How long is the Basic Computer course?',
          answer: 'The Basic Computer course typically spans 2 to 3 months, depending on the training institute and schedule.'
        },
        {
          question: 'Is the Basic Computer certification recognized?',
          answer: 'Yes, the Basic Computer certification is recognized and valued in various sectors, especially for entry-level positions.'
        },
        {
          question: 'What prior knowledge do I need for the Basic Computer course?',
          answer: 'No specific prerequisites are required; however, a willingness to learn and a basic understanding of using a computer will be beneficial.'
        },
        {
          question: 'Does the Basic Computer course include hands-on training?',
          answer: 'Yes, the course includes practical sessions where learners can apply their knowledge and gain hands-on experience with different software.'
        },
        {
          question: 'Is the Basic Computer course available online?',
          answer: 'Many institutions offer the Basic Computer course online, allowing for flexibility in learning while ensuring practical training opportunities.'
        },
      ];
      
       return(<>
        <Header/>
        <BannerForAll
             title="Basic Computer Course"
             text="Our Basic Computer Course provides a comprehensive introduction to fundamental computer skills and applications. Designed for beginners, this course covers essential topics such as operating systems, word processing, spreadsheets, and internet navigation. By the end, you'll be equipped with the necessary skills to confidently use computers in personal and professional settings.."
             image={basiccomputerimage}
             month="3 " />
   
      <ModuleList modules={curriculum} faqs={faqs} topic="Basic Computer Course"/>
        <Footer/>
       </>)
}

export default BasicComputerComponent;