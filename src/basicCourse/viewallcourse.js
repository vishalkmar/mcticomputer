// import Header from "./header";
import Card from "../card";
// import Footer from "./footer";
import tallyimage from '../images/basic/tally.png'
import busyimage from '../images/basic/busy.png'
import excelimage from  '../images/basic/excelpng.png'
import basicimage from '../images/basic/basic.jpg'
import accountingimage from '../images/basic/accounting.jpg'
import adcaimage from '../images/basic/adca.png'
import dataentryimage from '../images/basic/web-data-entry.png'

function ViewAllCourse(){
    return(<>
            {/* <Header/> */}
            <div className="container-fluid py-4 bg-black">
            <div className="container">
                <h2 className=" text-center text-white">Our Basic Computer Services</h2>
                <div className="row d-md-flex d-block justify-content-evenly ">
                    {/* First Card */}
                    <div className="col-md-4">
                        <Card
                            title="E-Accounting"
                            navigateurl="/eaccounting"
                            text="Master essential skills in digital accounting and tax management for modern businesses.."                          
                            image={accountingimage}
                        />
                    </div>

                    {/* Second Card */}
                    <div className="col-md-4">
                        <Card
                            title="Advanced Excel"
                            navigateurl="/advanceexcel"
                            text="Unlock advanced data analysis and visualization techniques to enhance your Excel skills.."                       
                            image={excelimage}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            title="Basic Computer Course"
                            navigateurl="/basiccomputer"
                            text="Master fundamental computer skills and gain confidence in using technology for everyday tasks."                         
                            image={basicimage}
                        />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row d-md-flex d-block justify-content-evenly ">
                    {/* First Card */}
                    <div className="col-md-4">
                        <Card
                            title="Data Entry"
                            text="Master data entry skills to efficiently manage and input information with precision and speed."
                            navigateurl="/dataentry"
                            image={dataentryimage}
                        />
                    </div>

                    {/* Second Card */}
                    <div className="col-md-4">
                        <Card
                            title="Tally Prime"
                            text="Master Tally Prime for efficient accounting and streamlined financial management."
                            navigateurl="/tally"
                            image={tallyimage}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            title="Busy Software Accounting"
                            navigateurl="/busy"
                            text="Master Busy Software for effective inventory management and accounting solutions.."                         
                            image={busyimage}
                        />
                    </div>
                </div>
                <div className="row d-md-flex d-block justify-content-evenly ">
                    {/* First Card */}
                    <div className="col-md-4">
                        <Card
                            title="ADCA Advance Diploma in Computer Applications"
                            navigateurl="/adca"
                            text="Enhance your IT skills with ADCA, focusing on advanced computer applications and software development."                        
                            image={adcaimage}
                        />
                    </div>

                    {/* Second Card */}
                    {/* <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                    </div> */}
                </div>
            </div>
           
        </div>
        {/* <Footer/> */}
    </>)
}
export default ViewAllCourse;