import Header from "../header";
import Footer from "../footer";
import BannerForAll from "../bannerforall";
import ModuleList from "../modulelist";
import excelimage from '../images/basic/excelpng.png'
function AdvanceExcel(){

    const curriculum = [
        {
          module: 'Module 1: Introduction to Advanced Excel',
          description: 'Overview of Advanced Excel features and capabilities beyond basic usage.',
          topics: ['Understanding Advanced Excel Functions', 'Navigating the Excel Interface', 'Customizing the Excel Environment', 'Keyboard Shortcuts for Efficiency', 'Data Types and Formatting'],
        },
        {
          module: 'Module 2: Advanced Formulas and Functions',
          description: 'Exploring complex formulas and functions for data analysis.',
          topics: ['Nested Functions', 'Array Formulas', 'Lookup Functions (VLOOKUP, HLOOKUP)', 'IF Statements and Logical Functions', 'Error Handling Functions'],
        },
        {
          module: 'Module 3: Data Analysis and Visualization',
          description: 'Techniques for analyzing data and creating visual representations.',
          topics: ['Using Pivot Tables', 'Creating Pivot Charts', 'Data Filtering and Sorting', 'Conditional Formatting', 'Data Validation Techniques'],
        },
        {
          module: 'Module 4: Working with Large Data Sets',
          description: 'Managing and analyzing large volumes of data effectively.',
          topics: ['Importing and Exporting Data', 'Data Consolidation', 'Removing Duplicates', 'Using Excel Tables', 'Handling Data Types'],
        },
        {
          module: 'Module 5: Macros and Automation',
          description: 'Introduction to automating tasks using Macros and VBA in Excel.',
          topics: ['Recording Macros', 'Editing Macros', 'Using VBA for Custom Functions', 'Creating User Forms', 'Automating Repetitive Tasks'],
        },
        {
          module: 'Module 6: Advanced Charting Techniques',
          description: 'Creating dynamic and interactive charts for data representation.',
          topics: ['Customizing Charts', 'Creating Combination Charts', 'Using Sparklines', 'Dynamic Charts with Formulas', 'Chart Templates'],
        },
        {
          module: 'Module 7: Financial and Statistical Analysis',
          description: 'Applying Excel for financial and statistical calculations and modeling.',
          topics: ['Using Financial Functions', 'Performing Statistical Analysis', 'Sensitivity Analysis', 'Creating Financial Models', 'Forecasting Techniques'],
        },
        {
          module: 'Module 8: Collaboration and Sharing',
          description: 'Working with others on Excel documents and sharing data securely.',
          topics: ['Tracking Changes', 'Using Comments and Notes', 'Sharing Workbooks', 'Protecting Worksheets and Workbooks', 'Using Excel Online'],
        },
        {
          module: 'Module 9: Advanced Data Management Techniques',
          description: 'Strategies for effective data management in Excel.',
          topics: ['Using Named Ranges', 'Data Grouping and Outlining', 'Creating Scenarios', 'Goal Seek and Data Tables', 'Using Solver for Optimization'],
        },
        {
          module: 'Module 10: Final Project and Hands-on Practical',
          description: 'Capstone project where students apply their advanced Excel skills to real-world scenarios.',
          topics: ['Real-World Data Analysis Scenarios', 'Creating Comprehensive Reports', 'Final Exam Preparation', 'Project Presentation', 'Evaluation and Feedback'],
        },
      ];

      const faqs = [
        {
          question: 'What is the Advanced Excel course?',
          answer: 'The Advanced Excel course is designed to enhance your Excel skills beyond the basics, focusing on advanced functions, data analysis, and automation techniques.'
        },
        {
          question: 'Who can enroll in the Advanced Excel course?',
          answer: 'This course is suitable for professionals, analysts, and students who wish to improve their Excel proficiency for data management and analysis.'
        },
        {
          question: 'What are the career prospects after completing the Advanced Excel course?',
          answer: 'Upon completion, you can pursue roles such as data analyst, financial analyst, or business intelligence professional, where advanced Excel skills are essential.'
        },
        {
          question: 'How long is the Advanced Excel course?',
          answer: 'The Advanced Excel course typically spans 4-6 weeks, depending on the training provider and course structure.'
        },
        {
          question: 'Is the Advanced Excel certification recognized?',
          answer: 'Yes, the Advanced Excel certification is recognized in the industry, showcasing your skills to potential employers.'
        },
        {
          question: 'What are the prerequisites for the Advanced Excel course?',
          answer: 'A basic understanding of Excel functions and familiarity with spreadsheets are recommended before enrolling in this course.'
        },
        {
          question: 'Does the Advanced Excel course include hands-on training?',
          answer: 'Yes, the course includes practical sessions where you will work on real-world Excel projects and exercises to reinforce your learning.'
        },
        {
          question: 'Is the Advanced Excel course available online?',
          answer: 'Many institutions offer the Advanced Excel course online, providing flexible learning options that combine theory with practical exercises.'
        },
      ];
      
       return(<>
        <Header/>
        <BannerForAll
             title="AdvanceExcel Course"
             text="Our Advanced Excel course equips you with the skills to leverage Excel’s powerful features for data analysis and visualization. Dive into advanced formulas, pivot tables, and data modeling, while mastering automation techniques with macros and VBA. Perfect for professionals seeking to enhance their analytical capabilities and streamline reporting processes."
             image={excelimage}
             month="3 " />
   
      <ModuleList modules={curriculum} faqs={faqs} topic="AdvanceExcel Course"/>
        <Footer/>
       </>)
}

export default AdvanceExcel;