import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css'
import WOW from 'wowjs';
import Home from "./home";
import Contact from "./contect";
import About from "./aboutus";
// import Header from "./header";
// import Footer from "./footer";
import BasicCourse from "./basicCourse/basiccourse";
import AdvanceCourse from "./AdvaceCourse/advancecourse";
// import ViewAdvanceCourse from "./viewadvancecourse";
import TotalCourseService from "./totalcourseservice";
import NiletCourse from "./NiletCourse/niletcourse";
import WebDevelopMent from "./AdvaceCourse/WebDevelopMent";
import MernStack from "./AdvaceCourse/mernstack";
import MeanStack from "./AdvaceCourse/meanstack";
import ComputerNetworking from "./AdvaceCourse/computernetworking";
import DatabaseManagement from "./AdvaceCourse/graphicdesign";
import GraphicDesign from "./AdvaceCourse/graphicdesign";
import WebDesign from "./AdvaceCourse/webdesign";
import CoreJava from "./AdvaceCourse/python";
import Python from "./AdvaceCourse/python";
import CLanguage from "./AdvaceCourse/clanguage";
import Cpp from "./AdvaceCourse/cpp";
import DsaCpp from "./AdvaceCourse/dsacpp";
import JavaScript from "./AdvaceCourse/javascript";
import React from "./AdvaceCourse/react";
import Bootstrap from "./AdvaceCourse/bootstrap";
import Ccc from "./NiletCourse/ccc";
import Bcc from "./NiletCourse/bcc";
import Acc from "./NiletCourse/acc";
import OLevel from "./NiletCourse/olevel";
import ALevel from "./NiletCourse/alevel";
import BLevel from "./NiletCourse/blevel";
import CLevel from "./NiletCourse/clevel";
import Chm from "./NiletCourse/chm";
import Tally from "./basicCourse/tally";
import Busy from "./basicCourse/Busy";
import AdvanceExcel from "./basicCourse/advancedExcel";
import BasicComputerComponent from "./basicCourse/BasicComputer";
import EAccounting from "./basicCourse/E-Accounting";
import ADCA from "./basicCourse/ADCA";
import DataEntry from "./basicCourse/DataEntry";
import EnrollMent from "./enrollment";

// this is the  own panner toutes 
// import OwnerPage from "./OwnerFolder/OwnerPage";
import NewAdmission from "./OwnerFolder/newadmission";
import AvailableCourse from "./OwnerFolder/availableCourse";
import ViewStudents from "./OwnerFolder/ViewStudents";
import Login from "./login";
import ForgotPassword from "./forgot";
import StudentDashboard from "./studentDeshboard";
import AdminLogin from "./adminlogin";
import ImageUploadForm from "./OwnerFolder/uploadimage";
import ProtectedRoute from "./protected";
function App() {

  useEffect(()=>{
    new WOW.WOW().init();

  },[]);

  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/adminlogin" element={<AdminLogin/>}/>
            <Route path="/forgot" element={<ForgotPassword/>}/>
            <Route path="/studentdashboard" element={<StudentDashboard/>}/>
            <Route path="/basiccourse" element={<BasicCourse/>}/>
            <Route path="/advancecourse" element={<AdvanceCourse/>}/>
            <Route path="/niletcourse" element={<NiletCourse/>}/>
            <Route path="/totalcourseservice" element={<TotalCourseService/>}/>
            <Route path="/webdevelopment" element={<WebDevelopMent/>}/>
            <Route path="/mernstack" element={<MernStack/>}/>
            <Route path="/meanstack" element={<MeanStack/>}/>
            <Route path="/computernetworking" element={<ComputerNetworking/>}/>
            <Route path="/databasemanagement" element={<DatabaseManagement/>}/>
            <Route path="/graphicdesign" element={<GraphicDesign/>}/>
            <Route path="/corejava" element={<CoreJava/>}/>
            <Route path="/webdesign" element={<WebDesign/>}/>
            <Route path="/python" element={<Python/>}/>
            <Route path="/clanguage" element={<CLanguage/>}/>
            <Route path="/cpp" element={<Cpp/>}/>
            <Route path="/dsacpp" element={<DsaCpp/>}/>
            <Route path="/javascript" element={<JavaScript/>}/>
            <Route path="/react" element={<React/>}/>
            <Route path="/bootstrap" element={<Bootstrap/>}/>
            <Route path="/ccc" element={<Ccc/>}/>
            <Route path="/bcc" element={<Bcc/>}/>
            <Route path="/acc" element={<Acc/>}/>
            <Route path="/olevel" element={<OLevel/>}/>
            <Route path="/alevel" element={<ALevel/>}/>
            <Route path="/blevel" element={<BLevel/>}/>
            <Route path="/clevel" element={<CLevel/>}/>
            <Route path="/chm" element={<Chm/>}/>
            <Route path="/tally" element={<Tally/>}/>
            <Route path="/busy" element={<Busy/>}/>
            <Route path="/advanceexcel" element={<AdvanceExcel/>}/>
            <Route path="/basiccomputer" element={<BasicComputerComponent/>}/>
            <Route path="/eaccounting" element={<EAccounting/>}/>
            <Route path="/adca" element={<ADCA/>}/>
            <Route path="/dataentry" element={<DataEntry/>}/>
            {/* <Route path="/header" element={<Header/>}/>
            <Route path="/footer" element={<Footer/>}/> */}
            <Route path="/enroll/:title" element={<EnrollMent/>}/>
            {/* <Route path="/ownerpage" element={<OwnerPage/>}/> */}
      
          <Route path="/newadmission" element={<ProtectedRoute element={<NewAdmission />} />} />
          <Route path="/availablecourse" element={<ProtectedRoute element={<AvailableCourse />} />} />
          <Route path="/viewstudents" element={<ProtectedRoute element={<ViewStudents />} />} />
          <Route path="/uploadcertificate" element={<ProtectedRoute element={<ImageUploadForm />} />} />


        </Routes>
      </BrowserRouter>
  );
}

export default App;
