 import { useNavigate } from "react-router-dom";
 import graphicimage from './images/advance/graphic design.jpg'
 import developmentimage from './images/advance/web development.jpg'
 import pythonimage from './images/advance/python.jpg'
 import accountingimage from './images/basic/accounting.jpg'
 import excelimage from './images/basic/excelpng.png'
 import cccimage from './images/nilet/ccc.png'
 import Card from "./card";
function AllCards() {
    const navigate = useNavigate();
    return (<>
        <div className="container-fluid py-4 bg-black">
            <div className="container">
                <div className="row d-md-flex d-block justify-content-evenly ">
                    {/* First Card */}
                    <div className="col-md-4  mt-0 mt-sm-3">
                    <Card
                            title="Graphic Design"
                            navigateurl="/graphicdesign"
                            text=" Explore the art of visual communication with creative design techniques."
                            image={graphicimage}
                        />
                    </div>

                    {/* Second Card */}
                    <div className="col-md-4  mt-0 mt-sm-3">
                    <Card
                            title="Full Stack Web Development"
                            navigateurl="/webdevelopment"
                            text="Build dynamic web applications by mastering frontend and backend skills."
                            image={developmentimage}
                        />
                    </div>
                    <div className="col-md-4  mt-0 mt-sm-3">
                    <Card
                            title="python"
                            navigateurl="/python"
                            text="Master programming concepts and features of Python for versatile applications."
                            image={pythonimage}
                        />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row d-md-flex d-block justify-content-evenly ">
                    {/* First Card */}
                    <div className="col-md-4  mt-0 mt-sm-3">
                        <Card
                            title="E-Accounting"
                            navigateurl="eaccounting"
                            text="Master essential skills in digital accounting and tax management for modern businesses."          
                           image={accountingimage}
                        />
                    </div>

                    {/* Second Card */}
                    <div className="col-md-4  mt-0 mt-sm-3">
                        <Card
                            title="Advanced Excel"
                            text="Unlock advanced data analysis and visualization techniques to enhance your Excel skills.."
                             navigateurl="/advanceexcel"
                             image={excelimage}
                        />
                    </div>
                    <div className="col-md-4 mt-0 mt-sm-3">
                    <Card
                            title="CCC Course on Computer Concept"
                            text="A beginner course introducing basic computer skills and digital literacy."
                            navigateurl="/ccc"
                            image={cccimage}
                        />
                    </div>
                </div>
            </div>
        </div>

    </>)
}
export default AllCards;