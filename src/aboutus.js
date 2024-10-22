import Header from "./header";
import Footer from "./footer";
import videoFile from './videos/vtwo.mp4'; // Importing the video file
import FAQAccordion from './accordian';

function About() {
  return (
    <>
      <Header />
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-md-12 position-relative bg-black">
            {/* Background Video */}
            <video autoPlay muted loop className="w-100" style={{ height: '100vh', objectFit: 'cover' }}>
              <source src={videoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Text Over Video */}
            <div
              className="position-absolute top-50 start-50 translate-middle text-white p-3 text-center"
              style={{ background: 'rgba(0, 0, 0, 0.5)', maxWidth: '600px', width: '90%', borderRadius: '8px' }}
            >
              <h1 className="text-center">About Us</h1>
              <p className="text-center" style={{ textAlign: 'justify', padding: '0 10px' }}>
                Welcome to our organization! We specialize in providing open schooling and a wide range of computer courses 
                designed to empower learners of all ages. Our mission is to offer accessible and high-quality education that helps 
                individuals achieve their personal and professional goals. With a focus on innovation and excellence, we are committed 
                to delivering the best solutions to ensure our students succeed in their chosen paths. Whether you're looking to enhance 
                your skills or pursue academic growth, we are here to support your journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-black">
        <div className="container py-5">
          <div className="row justify-content-center align-items-center py-5">
            {/* Text Column */}
            <div className="col-md-6 col-12 mb-4 mb-md-0 py-5 px-5 lh-lg">
              <h2 className="text-center text-md-start text-danger">Who We Are</h2>
              <p className="text-md-center text-md-start text-white">
                We have been running our business successfully for over 13 years, providing high-quality education
                and training. Every year, we are proud to see over 500 students successfully pass through our programs.
                In addition to on-campus learning, we also offer distance learning opportunities to make education 
                accessible for everyone, everywhere.
              </p>
            </div>

            {/* Image Column */}
            <div className="col-md-6 col-12">
              <img src="https://cdn.pixabay.com/photo/2020/09/18/22/05/man-5583035_1280.jpg" alt="Who We Are" className="img-fluid w-100" style={{ height: '100%' }} />
            </div>
          </div>
        </div>
      </div>

      <FAQAccordion />
      <Footer />
    </>
  );
}

export default About;
