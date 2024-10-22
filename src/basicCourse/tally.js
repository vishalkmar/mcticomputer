import Header from "../header";
import Footer from "../footer";
import BannerForAll from "../bannerforall";
import ModuleList from "../modulelist";
import tallyimage from '../images/basic/tally.png'
function Tally() {
    const curriculum = [
        {
            module: 'Module 1: Introduction to Tally Prime',
            description: 'Overview of Tally Prime, its features, and basic setup.',
            topics: ['What is Tally Prime?', 'Installing Tally Prime', 'User Interface Overview', 'Navigating Tally', 'Understanding Tally Features']
        },
        {
            module: 'Module 2: Basic Accounting Concepts',
            description: 'Introduction to accounting principles and terminology.',
            topics: ['Fundamentals of Accounting', 'Accounting Cycle', 'Key Accounting Terms', 'Debits and Credits', 'Types of Accounts']
        },
        {
            module: 'Module 3: Creating a Company and Ledgers',
            description: 'Steps to create a new company and manage ledgers.',
            topics: ['Creating a New Company', 'Setting Up Ledgers', 'Groupings and Subgroupings', 'Configuring Company Preferences', 'Editing and Deleting Ledgers']
        },
        {
            module: 'Module 4: Recording Financial Transactions',
            description: 'Recording various types of financial transactions in Tally.',
            topics: ['Sales and Purchase Vouchers', 'Payment and Receipt Vouchers', 'Journal Vouchers', 'Contra Vouchers', 'Sales Returns and Purchase Returns']
        },
        {
            module: 'Module 5: Inventory Management in Tally',
            description: 'Managing stock and inventory effectively.',
            topics: ['Creating Stock Items', 'Setting Up Godowns', 'Stock Valuation Methods', 'Generating Stock Reports', 'Handling Stock Transfers']
        },
        {
            module: 'Module 6: GST Compliance in Tally',
            description: 'Understanding and applying GST in Tally.',
            topics: ['Configuring GST in Tally', 'Generating GST Returns', 'Filing GST', 'GST Reports in Tally', 'GST Reconciliation']
        },
        {
            module: 'Module 7: Generating Reports',
            description: 'Generating and customizing financial reports.',
            topics: ['Profit and Loss Statement', 'Balance Sheet', 'Cash Flow Statement', 'Customizing Reports', 'Exporting Reports to Excel']
        },
        {
            module: 'Module 8: Data Security and Backup',
            description: 'Ensuring data security and backups in Tally.',
            topics: ['Data Backup Procedures', 'Restoring Data', 'Using Password Protection', 'Data Encryption', 'Best Practices for Data Security']
        },
        {
            module: 'Module 9: Advanced Features of Tally',
            description: 'Exploring advanced features and functionalities.',
            topics: ['Using Tally Add-ons', 'Working with Multi-Currency', 'Integrating Tally with other Applications', 'Customizing Tally Reports', 'Tally API Basics']
        },
        {
            module: 'Module 10: Final Project and Evaluation',
            description: 'Practical application of learned skills through a project.',
            topics: ['Real-world Accounting Scenario', 'Comprehensive Project Work', 'Final Evaluation and Feedback', 'Presentation of Project', 'Certification Preparation']
        }
    ];

    const faqs = [
        {
            question: 'What is the Tally Prime course?',
            answer: 'The Tally Prime course teaches users how to effectively use Tally Prime software for accounting and financial management, covering everything from basic to advanced features.'
        },
        {
            question: 'Who can enroll in the Tally Prime course?',
            answer: 'The course is suitable for students, professionals, and entrepreneurs looking to enhance their accounting skills using Tally Prime, regardless of prior experience.'
        },
        {
            question: 'What are the career prospects after completing the Tally Prime course?',
            answer: 'Completing the Tally Prime course opens career opportunities in accounting, finance, and business management, as well as roles as Tally operators or accounting consultants.'
        },
        {
            question: 'How long is the Tally Prime course?',
            answer: 'The Tally Prime course typically lasts between 4-6 weeks, depending on the institute and the depth of training provided.'
        },
        {
            question: 'Is the Tally Prime certification recognized?',
            answer: 'Yes, Tally Prime certification is recognized by employers in various industries, enhancing job prospects in accounting and finance roles.'
        },
        {
            question: 'What are the prerequisites for the Tally Prime course?',
            answer: 'There are no strict prerequisites, but a basic understanding of accounting principles and familiarity with computers will be helpful.'
        },
        {
            question: 'Does the Tally Prime course include hands-on training?',
            answer: 'Yes, the course includes practical sessions where students learn to navigate Tally Prime and apply their skills in real-world accounting scenarios.'
        },
        {
            question: 'Is the Tally Prime course available online?',
            answer: 'Yes, many institutions offer the Tally Prime course online, combining theoretical lessons with practical exercises to accommodate remote learning.'
        }
    ];

    return (
        <>
            <Header />
            <BannerForAll
                title="Tally Course"
                text="Our Tally Prime course equips you with essential accounting and business management skills using one of the leading software solutions. Learn to manage financial transactions, generate reports, and automate invoicing while understanding GST compliance and inventory management. Gain practical experience through hands-on exercises that simulate real-world scenarios. Ideal for finance professionals and business owners aiming to streamline their accounting processes and enhance operational efficiency."
                image={tallyimage}
                month="4 " 
            />
            <ModuleList modules={curriculum} faqs={faqs} topic="Tally Course" />
            <Footer />
        </>
    );
}

export default Tally;
