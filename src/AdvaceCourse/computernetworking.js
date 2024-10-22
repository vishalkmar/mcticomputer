 
import Header from "../header";
import Footer from "../footer";
import BannerForAll from "../bannerforall";
import ModuleList from "../modulelist";
import networkingimage  from '../images/advance/networking.jpg'
function ComputerNetworking(){

     const curriculum = [
          {
              module: 'Module 1: Introduction to Networking',
              description: 'Understanding the basics of computer networking, including types of networks and key concepts.',
              topics: ['What is Networking?', 'Types of Networks (LAN, WAN, MAN)', 'Networking Devices (Router, Switch, Hub)', 'Network Topologies'],
          },
          {
              module: 'Module 2: OSI and TCP/IP Models',
              description: 'Exploring the OSI and TCP/IP models, their layers, and functionalities.',
              topics: ['OSI Model Layers', 'TCP/IP Model Layers', 'Comparison of OSI and TCP/IP', 'Encapsulation and Decapsulation'],
          },
          {
              module: 'Module 3: IP Addressing',
              description: 'Learning about IP addressing, subnetting, and the role of DHCP.',
              topics: ['IPv4 vs IPv6', 'Subnetting Concepts', 'CIDR Notation', 'Dynamic Host Configuration Protocol (DHCP)'],
          },
          {
              module: 'Module 4: Networking Protocols',
              description: 'Understanding common networking protocols and their roles in communication.',
              topics: ['TCP and UDP', 'HTTP/HTTPS', 'FTP/SFTP', 'SMTP/POP3/IMAP'],
          },
          {
              module: 'Module 5: Network Security',
              description: 'Exploring network security concepts, threats, and mitigation techniques.',
              topics: ['Common Network Threats', 'Firewalls and VPNs', 'Intrusion Detection Systems', 'Encryption and Security Protocols'],
          },
          {
              module: 'Module 6: Wireless Networking',
              description: 'Learning about wireless networking technologies and standards.',
              topics: ['Wi-Fi Standards (802.11)', 'Bluetooth Technology', 'Wireless Security', 'Setting Up a Wireless Network'],
          },
          {
              module: 'Module 7: Network Troubleshooting',
              description: 'Understanding how to troubleshoot common networking issues effectively.',
              topics: ['Common Networking Problems', 'Using Ping and Tracert', 'Network Diagnostic Tools', 'Troubleshooting Steps'],
          },
          {
              module: 'Module 8: Emerging Networking Technologies',
              description: 'Exploring emerging trends and technologies in networking.',
              topics: ['Software-Defined Networking (SDN)', 'Network Functions Virtualization (NFV)', 'Cloud Networking', 'IoT and Networking'],
          },
      ];
  
      const faqs = [
          {
              question: 'What is a computer network?',
              answer: 'A computer network is a collection of interconnected devices that communicate and share resources with each other, enabling data exchange and communication.'
          },
          {
              question: 'What is the difference between LAN and WAN?',
              answer: 'LAN (Local Area Network) is a network that covers a small geographic area, while WAN (Wide Area Network) spans a larger geographic area, often connecting multiple LANs.'
          },
          {
              question: 'What is an IP address?',
              answer: 'An IP address is a unique identifier assigned to each device connected to a network, allowing it to communicate with other devices.'
          },
          {
              question: 'What is the OSI model?',
              answer: 'The OSI (Open Systems Interconnection) model is a conceptual framework that standardizes the functions of a telecommunication or computing system into seven abstraction layers.'
          },
          {
              question: 'How do I secure my network?',
              answer: 'Securing your network involves implementing firewalls, using strong passwords, enabling encryption, and regularly updating software to protect against vulnerabilities.'
          },
          {
              question: 'What are the main types of networking protocols?',
              answer: 'The main types of networking protocols include TCP, UDP, HTTP, FTP, and SMTP, each serving different purposes in data transmission and communication.'
          },
          {
              question: 'What is DHCP?',
              answer: 'DHCP (Dynamic Host Configuration Protocol) is a network management protocol used to automatically assign IP addresses and other network configuration to devices on a network.'
          },
          {
              question: 'What is network troubleshooting?',
              answer: 'Network troubleshooting involves diagnosing and resolving issues that affect the performance and connectivity of a network.'
          },
      ];
  
     return (<>
     <Header/>
       <BannerForAll
        title="Computer Networking"
        text="Our Computer Networking course provides in-depth knowledge of how networks operate, manage, and secure communication. Topics include IP addressing, subnetting, routing, switching, network protocols like TCP/IP, and network security. Gain hands-on experience with configuring routers, switches, and firewalls. Learn to design, implement, and troubleshoot both local and wide area networks (LAN/WAN). This course is ideal for those aspiring to work as network engineers or IT professionals."
        image={networkingimage} 
        month="5 "/>
        
       <ModuleList modules={curriculum} faqs={faqs} topic="Computer NetWorking Curriculam"/>
        <Footer/>

     </>)
}
export default ComputerNetworking;