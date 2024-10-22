import Header from "../header";
import Footer from "../footer";
import BannerForAll from "../bannerforall";
import ModuleList from "../modulelist";
import busyimage from '../images/basic/busy.png'
function Busy(){

    const curriculum = [
        {
          module: 'Module 1: Introduction to Busy Software',
          description: 'Overview of Busy Software and its functionalities in business management.',
          topics: ['What is Busy Software?', 'Key Features of Busy Software', 'User Interface Overview', 'Installation and Setup', 'Navigating the Dashboard'],
        },
        {
          module: 'Module 2: Master Data Management',
          description: 'Understanding how to manage and maintain master data in Busy.',
          topics: ['Creating and Managing Masters', 'Understanding Item Groups', 'Customer and Supplier Management', 'Location and Godown Setup', 'Price List Management'],
        },
        {
          module: 'Module 3: Transactions and Billing',
          description: 'Detailed exploration of transaction processing and billing in Busy Software.',
          topics: ['Sales and Purchase Transactions', 'Generating Invoices', 'Handling Returns', 'Managing Payments', 'Transaction Reports'],
        },
        {
          module: 'Module 4: Inventory Management',
          description: 'Managing inventory effectively using Busy Software.',
          topics: ['Stock Management Basics', 'Stock Valuation Methods', 'Inventory Reports', 'Managing Stock Adjustments', 'Understanding Batch and Expiry'],
        },
        {
          module: 'Module 5: Financial Accounting',
          description: 'Introduction to financial accounting processes in Busy Software.',
          topics: ['Understanding Ledgers', 'Journal Entries', 'Generating Financial Statements', 'Bank Reconciliation', 'Audit Trails'],
        },
        {
          module: 'Module 6: Reporting and Analysis',
          description: 'Generating and analyzing various reports for business insights.',
          topics: ['Standard Reports in Busy', 'Custom Report Generation', 'Data Filtering and Sorting', 'Graphical Analysis', 'Exporting Reports'],
        },
        {
          module: 'Module 7: GST Compliance',
          description: 'Navigating GST compliance features in Busy Software.',
          topics: ['Understanding GST in India', 'GST Returns Filing', 'Managing GST Transactions', 'Generating GSTR Reports', 'Tax Audits'],
        },
        {
          module: 'Module 8: Advanced Features',
          description: 'Exploring advanced functionalities of Busy Software for enhanced productivity.',
          topics: ['User Roles and Permissions', 'Data Backup and Restore', 'Integrating with Other Software', 'Using Busy Mobile App', 'Troubleshooting Common Issues'],
        },
        {
          module: 'Module 9: Practical Sessions and Case Studies',
          description: 'Hands-on practical training with real-world case studies using Busy Software.',
          topics: ['Real Business Scenarios', 'Role-Playing as an Accountant', 'Managing Complete Transactions', 'Final Project Preparation', 'Presenting Solutions'],
        },
        {
          module: 'Module 10: Final Assessment and Certification',
          description: 'Final evaluation and certification process for Busy Software course participants.',
          topics: ['Assessment Criteria', 'Practical Exam', 'Certification Process', 'Feedback and Review', 'Course Conclusion'],
        },
      ];

      
      const faqs = [
        {
          question: 'What is the Busy Software course?',
          answer: 'The Busy Software course is designed to teach users how to effectively utilize Busy accounting software for managing business operations, accounting, and inventory control.'
        },
        {
          question: 'Who can enroll in the Busy Software course?',
          answer: 'This course is suitable for students, accounting professionals, and business owners looking to enhance their skills in using Busy software for efficient business management.'
        },
        {
          question: 'What are the career prospects after completing the Busy Software course?',
          answer: 'After completing the course, learners can work as accountants, finance managers, or business analysts, particularly in organizations that use Busy software for their accounting needs.'
        },
        {
          question: 'How long is the Busy Software course?',
          answer: 'The Busy Software course typically lasts 4-6 weeks, depending on the training institute and the course structure.'
        },
        {
          question: 'Is the Busy Software certification recognized?',
          answer: 'Yes, the Busy Software certification is recognized in the industry, enhancing job prospects in accounting and business management roles.'
        },
        {
          question: 'What are the prerequisites for the Busy Software course?',
          answer: 'There are no strict prerequisites, but a basic understanding of accounting principles and familiarity with computers will be beneficial.'
        },
        {
          question: 'Does the Busy Software course include hands-on training?',
          answer: 'Yes, the course includes practical sessions where participants learn to perform transactions and generate reports using Busy software in real-time.'
        },
        {
          question: 'Is the Busy Software course available online?',
          answer: 'Many institutions offer the Busy Software course online, combining theoretical lessons with practical exercises for flexible learning.'
        },
      ];
      
       return(<>
        <Header/>
        <BannerForAll
             title="Busy Course"
             text="Our Busy Software course provides comprehensive training on one of the leading accounting and business management solutions. Learn to manage finances, track inventory, and generate detailed reports while understanding GST compliance and payroll management. Gain practical insights through hands-on exercises and real-world examples, making it ideal for entrepreneurs and finance professionals looking to optimize their business operations."
             image={busyimage} 
             month="3 "/>
   
      <ModuleList modules={curriculum} faqs={faqs} topic="Busy Course"/>
        <Footer/>
       </>)
}

export default Busy;