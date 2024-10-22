import Header from "../header";
import Footer from "../footer";
import BannerForAll from "../bannerforall";
import ModuleList from "../modulelist";
import chmimage from '../images/nilet/chm.png';
function Chm(){

     const curriculum = [
          {
            module: 'Module 1: Introduction to Computer Hardware',
            description: 'Understanding the basic components of computer hardware and their functions.',
            topics: ['Overview of Computer Hardware', 'Motherboards and Chipsets', 'Power Supply Units', 'BIOS/UEFI Basics', 'Input/Output Devices'],
          },
          {
            module: 'Module 2: Processors and Memory',
            description: 'Detailed study of computer processors and memory types and their roles in computer performance.',
            topics: ['Introduction to CPUs', 'Types of Processors (Intel, AMD)', 'RAM and ROM', 'Cache Memory', 'Virtual Memory'],
          },
          {
            module: 'Module 3: Storage Devices',
            description: 'Exploration of different storage devices used in modern computers.',
            topics: ['Hard Disk Drives (HDD)', 'Solid State Drives (SSD)', 'Optical Drives (CD/DVD)', 'External Storage Devices', 'RAID and Storage Arrays'],
          },
          {
            module: 'Module 4: Assembling a Computer System',
            description: 'Hands-on training for assembling a computer from scratch.',
            topics: ['Selecting and Installing Components', 'Motherboard and Processor Installation', 'RAM and Storage Installation', 'Connecting Power Supply and Peripherals', 'Post-Assembly Testing'],
          },
          {
            module: 'Module 5: Operating Systems Installation and Configuration',
            description: 'Installing and configuring operating systems for optimal performance.',
            topics: ['Installing Windows and Linux OS', 'Partitioning and Formatting', 'Device Drivers Installation', 'Operating System Updates', 'Dual Boot Configuration'],
          },
          {
            module: 'Module 6: Networking and Internet Setup',
            description: 'Basics of computer networking and setting up internet connections.',
            topics: ['LAN and WAN Basics', 'Network Interface Cards (NICs)', 'Setting Up Routers and Switches', 'Configuring IP Addresses', 'Internet Troubleshooting'],
          },
          {
            module: 'Module 7: Troubleshooting and Diagnostics',
            description: 'Identifying and solving common hardware and software problems in computers.',
            topics: ['Diagnosing Power Issues', 'Troubleshooting Boot Failures', 'Hardware Diagnostic Tools', 'Resolving Display Issues', 'Fixing Storage Device Errors'],
          },
          {
            module: 'Module 8: Printer and Peripheral Devices',
            description: 'Maintaining and troubleshooting printers, scanners, and other peripherals.',
            topics: ['Types of Printers (Inkjet, Laser)', 'Printer Installation and Configuration', 'Scanner Maintenance', 'Troubleshooting Peripheral Devices', 'Multifunction Devices'],
          },
          {
            module: 'Module 9: Computer Security and Virus Removal',
            description: 'Ensuring computer security and removing malicious software.',
            topics: ['Understanding Computer Viruses and Malware', 'Installing Antivirus Software', 'Using Firewalls', 'Backing Up Data', 'Safe Browsing Practices'],
          },
          {
            module: 'Module 10: Final Project and Hands-on Practical',
            description: 'Capstone project where students apply their learning to a practical hardware problem.',
            topics: ['Real-world Troubleshooting Scenarios', 'Hardware and Software Integration', 'Practical Exam', 'Final System Assembly', 'Viva and Evaluation'],
          },
        ];

        const faqs = [
          {
            question: 'What is the CHM (Computer Hardware Maintenance) course?',
            answer: 'The CHM (Computer Hardware Maintenance) course is designed to provide in-depth knowledge about maintaining, troubleshooting, and repairing computer hardware components. It covers topics from basic hardware concepts to advanced troubleshooting techniques.'
          },
          {
            question: 'Who can enroll in the CHM course?',
            answer: 'Anyone with a basic interest in computer hardware can enroll in the CHM course. It is suitable for beginners as well as individuals looking to pursue a career in IT hardware support or maintenance.'
          },
          {
            question: 'What are the career prospects after completing the CHM course?',
            answer: 'After completing the CHM course, learners can work as hardware technicians, IT support specialists, or computer repair professionals. They can also start their own computer repair and maintenance businesses.'
          },
          {
            question: 'How long is the CHM course?',
            answer: 'The CHM course typically spans 3-6 months, depending on the institute. It involves theoretical classes as well as practical hands-on training.'
          },
          {
            question: 'Is the CHM certification recognized?',
            answer: 'Yes, CHM certification is recognized and valued by employers in the IT hardware and maintenance industry. It equips individuals with practical skills for maintaining and repairing computer systems.'
          },
          {
            question: 'What are the prerequisites for the CHM course?',
            answer: 'There are no specific prerequisites for the CHM course. Basic knowledge of computers and the ability to follow technical instructions are beneficial.'
          },
          {
            question: 'Does the CHM course include hands-on training?',
            answer: 'Yes, the CHM course includes practical hands-on sessions where learners assemble computer systems, install operating systems, and troubleshoot hardware problems in real-time.'
          },
          {
            question: 'Is the CHM course available online?',
            answer: 'While some theoretical components of the CHM course can be taught online, hands-on practical training is essential and usually conducted in person at institutes or training centers.'
          },
        ];
        
     return (<>
     <Header/>
       <BannerForAll
        title="CHM (Computer Hardware Maintenance)"
        text="Our CHM (Computer Hardware Maintenance) course is designed to equip students with essential skills in diagnosing and repairing computer hardware components. The curriculum covers key topics such as assembly and disassembly of PCs, troubleshooting techniques, and maintenance of peripherals. Students will gain hands-on experience in working with different hardware configurations and learning best practices for hardware upgrades and repairs. Emphasis is placed on safety standards and efficient problem-solving methodologies. Ideal for those seeking to enter the IT support field or enhance their technical skills in computer maintenance"
        image={chmimage}
        month="6 " />
      <ModuleList modules={curriculum} faqs={faqs} topic="CHM (Computer Hardware Maintenance)"/>
        <Footer/>

     </>)
}
export default Chm;