// import Header from "./header";
import Card from "../card";
// import Footer from "./footer";
import graphicimage from '../images/advance/graphic design.jpg'
import webimage from '../images/advance/webdesign.png'
import developmentimage  from '../images/advance/web development.jpg'
import mernimage from '../images/advance/mern.jpg'
import meanimage from '../images/advance/meanimage.png'
import networkimage  from '../images/advance/networking.jpg'
import dbmsimage from '../images/advance/dbmsimage.png'
import javaimage from '../images/advance/core-java-online-training.jpg'
import pythonimage from '../images/advance/python.jpg'
import c from '../images/advance/c.jpg'
import cpp from '../images/advance/cppimage.png'
import dsa from '../images/advance/dsa.jpg'
import js from '../images/advance/jsimage.png'
import reactimage from '../images/advance/react.png';
import bootstrapimage from '../images/advance/bootstrap.jpg';
function ViewAdvanceCourse(){
    return(<>
            {/* <Header/> */}
            <div className="container-fluid py-4 bg-black">
            <div className="container">
                <h2 className=" text-center text-white">Our Advanced Computer Courses</h2>
                <div className="row d-md-flex d-block justify-content-evenly ">
                    {/* First Card */}
                    <div className="col-md-4">
                        <Card
                            title="Graphic Design"
                            navigateurl="/graphicdesign"
                            text=" Explore the art of visual communication with creative design techniques."
                            image={graphicimage}
                        />
                    </div>

                    {/* Second Card */}
                    <div className="col-md-4">
                        <Card
                            title="Web Design"
                            navigateurl="/webdesign"
                            text="Learn to craft beautiful and user-friendly websites that engage visitors."
                            image={webimage}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            title="Full Stack Web Development"
                            navigateurl="/webdevelopment"
                            text="Build dynamic web applications by mastering frontend and backend skills."
                            image={developmentimage}
                        />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row d-md-flex d-block justify-content-evenly ">
                    {/* First Card */}
                    <div className="col-md-4">
                        <Card
                            title="MERN Stack"
                            navigateurl="/mernstack"
                            text="Create powerful applications using MongoDB, Express.js, React, and Node.js."
                            image={mernimage}
                        />
                    </div>

                    {/* Second Card */}
                    <div className="col-md-4">
                        <Card
                            title="MEAN Stack"
                            navigateurl="/meanstack"
                            text="Some quick Develop full-stack applications with MongoDB, Express.js, Angular, and Node.js."
                            image={meanimage}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            title="Computer Networking"
                            navigateurl="/computernetworking"
                            text="Understand networking fundamentals to design and manage effective networks."
                           
                            image={networkimage}
                        />
                    </div>
                </div>
                <div className="row d-md-flex d-block justify-content-evenly ">
                    {/* First Card */}
                    <div className="col-md-4">
                        <Card
                            title="Database Management:"
                            navigateurl="/databasemanagement"
                            text="Gain skills in managing and optimizing databases for efficient data handling."
                            image={dbmsimage}
                        />
                    </div>

                    {/* Second Card */}
                    <div className="col-md-4">
                        <Card
                            title="Core Java"
                            navigateurl="/corejava"
                            text="Learn the fundamentals of Java for building robust and scalable applications."
                            image={javaimage}
                        />
                    </div>
                    <div className="col-md-4">
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
                    <div className="col-md-4">
                        <Card
                            title="C Language"
                            navigateurl="/clanguage"
                            text="Master fundamental programming concepts and features of the C language for efficient applications."
                           
                            image={c}
                        />
                    </div>

                    {/* Second Card */}
                    <div className="col-md-4">
                        <Card
                            title="C++ Language"
                            text="Learn essential programming concepts and features of C++ for high-performance applications."
                            navigateurl="/cpp"
                            image={cpp}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            title="DSA with C++"
                            navigateurl="/dsacpp"
                            text=" Learn Data Structures and Algorithms with C++ for enhanced coding skills."
                            image={dsa}
                        />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row d-md-flex d-block justify-content-evenly ">
                    {/* First Card */}
                    <div className="col-md-4">
                        <Card
                            title="JavaScript FUll Course"
                            navigateurl="/javascript"
                            text=" Unlock JavaScript's power to create interactive and dynamic web experiences."
                           
                            image={js}
                        />
                    </div>

                    {/* Second Card */}
                    <div className="col-md-4">
                        <Card
                            title="React"
                            navigateurl="/react"
                            text="Master React for building dynamic user interfaces and single-page applications."
                           
                            image={reactimage}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            title="Bootstrap"
                            navigateurl="/bootstrap"
                            text="Design responsive websites quickly using the powerful Bootstrap framework"
                          
                            image={bootstrapimage}
                        />
                    </div>
                </div>
            </div>
        </div>
        {/* <Footer/> */}
    </>)
}
export default ViewAdvanceCourse;