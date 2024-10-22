import { useLocation } from 'react-router-dom';
import ViewAllCourse from "./basicCourse/viewallcourse";
import ViewNiletCourse from "./NiletCourse/viewniletcourse";
import ViewAdvanceCourse from "./AdvaceCourse/viewadvancecourse";
import Header from "./header";
import Footer from "./footer";

function TotalCourseService() {
  const location = useLocation();
  
  // Check if the current path is TotalCourseService
  const isTotalCoursePage = location.pathname === '/totalcourseservice'; // Adjust the path as needed

  return (
    <>
      {isTotalCoursePage && <Header />}
      <ViewAllCourse />
      <ViewNiletCourse />
      <ViewAdvanceCourse />
      {isTotalCoursePage && <Footer />}
    </>
  );
}

export default TotalCourseService;
