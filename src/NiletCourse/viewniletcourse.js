// import Header from "./header";
import Card from "../card";
// import Footer from "./footer";
import bccimage from '../images/nilet/bcc.png';
import cccimage from  '../images/nilet/ccc.png';
import accimage from '../images/nilet/acc.jpg';
import olevelimage from '../images/nilet/olevel.jpg';
import alevelimage from '../images/nilet/alevel.png'
import bleveliamge from '../images/nilet/blevel.png'
import clevelimage from '../images/nilet/clevel.png'
import chmimage from '../images/nilet/chm.png'
function ViewNiletCourse(){
    return(<>
            {/* <Header/> */}
            <div className="container-fluid py-4 bg-black">
            <div className="container">
                <h2 className=" text-center text-white">Our Nilet Computer Courses Traning</h2>
                <div className="row d-md-flex d-block justify-content-evenly ">
                    {/* First Card */}
                    <div className="col-md-4">
                        <Card
                            title="CCC Course on Computer Concept"
                            text="A beginner course introducing basic computer skills and digital literacy."
                            navigateurl="/ccc"
                            image={cccimage}
                        />
                    </div>

                    {/* Second Card */}
                    <div className="col-md-4">
                        <Card
                            title="BCC Basic Computer Course"
                            text="A foundational course providing basic computer skills, including MS Office and internet usage."
                            navigateurl="/bcc"
                            image={bccimage}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            title="Awarness In Computer Concept ACC"
                            text="An introductory course aimed at creating basic awareness of computer concepts and digital literacy."
                             navigateurl="/acc"
                            image={accimage}
                        />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row d-md-flex d-block justify-content-evenly ">
                    {/* First Card */}
                    <div className="col-md-4">
                        <Card
                            title="O-Level"
                            text="A foundational IT course covering essential programming and web development skills"
                            navigateurl="/olevel"
                            image={olevelimage}
                        />
                    </div>

                    {/* Second Card */}
                    <div className="col-md-4">
                        <Card
                            title="A-Level"
                            text="An advanced course focused on software development and database management"
                             navigateurl="/alevel"
                            image={alevelimage}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            title="B-Level"
                            text="An MCA-equivalent course covering advanced IT concepts and software engineering."
                            navigateurl="/blevel"
                            image={bleveliamge}
                        />
                    </div>
                </div>
                <div className="row d-md-flex d-block justify-content-evenly ">
                    {/* First Card */}
                    <div className="col-md-4">
                        <Card
                            title="C-Level"
                            text="A top-level course focusing on system architecture, AI, and advanced computing."
                             navigateurl="/clevel"
                            image={clevelimage}
                        />
                    </div>

                    {/* Second Card */}
                    <div className="col-md-4">
                        <Card
                            title="CHM (Computer Hardware Maintenance):"
                            text="A course focused on troubleshooting, repairing, and maintaining computer hardware systems."
                            navigateurl="/chm"
                            image={chmimage}
                        />
                    </div>
                    <div className="col-md-4">
                        {/* <Card
                            title="Basic Computer Course"
                            text="Some quick example text to build on the card title and make up the bulk of the card's content."
                            navigateurl=""
                            image="https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/04/an-excel-spreadsheet-in-the-background-with-the-excel-logo-in-front.jpg"
                        /> */}
                    </div>
                </div>
            </div>      
        </div>
        {/* <Footer/> */}
    </>)
}
export default ViewNiletCourse;