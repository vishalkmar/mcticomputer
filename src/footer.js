import React from 'react';
// import './footer.css';
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  
  return (
    <footer className="footer">
      <div className="">
         <div className="container-fluid bg-danger py-5 footer-background">
         <div className="container">
          <div className="row text-white lh-lg">
            <div className="col-md-3 col-sm-6 text-center">
              <h4>About Us</h4>
              <p>Learn more about our institution and what we offer.</p>
              <ul className="list-unstyled justify-content-center d-flex justify-content-center gap-3">
                <li><Link to="https://github.com/vishalkmar" className="text-white"><FaGithub  size={20}/></Link></li>
                <li><Link to="#" className="text-white"><FaInstagram size={20} /></Link></li>
                <li><Link to="https://wa.me/9891338787" className="text-white"><FaWhatsapp  size={20}/></Link></li>
                <li><Link to="https://www.linkedin.com/in/vishal-kumar-839490327/" className="text-white"><FaLinkedin  size={20}/></Link></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <h4>Useful Links</h4>
              <ul className="list-unstyled">
                <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
                <li><Link to="/about" className="text-white text-decoration-none">About</Link></li>
                <li><Link to="/totalcourseservice" className="text-white text-decoration-none">Courses</Link></li>
                <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <h4>Course Categories</h4>
              <ul className="list-unstyled">
                <li><Link to="/basiccourse" className="text-white text-decoration-none">Basic Computer Course</Link></li>
                <li ><Link to="/advancecourse" className="text-white text-decoration-none">Advanced Computer Course</Link></li>
                <li ><Link to="/niletcourse" className="text-white text-decoration-none">NIELIT Courses</Link></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <h4>Contact Us</h4>
              <ul className="list-unstyled">
                <li><Link to="tel:+919999051191" className="text-decoration-none text-white"><FaPhone/> Mobile: +91 989 13 38 787</Link></li>
                <li><Link to="mailto:mctiinstitute@gmail.com" className="text-decoration-none text-white"><FaEnvelope/> mcticomputeredu@gmail.com</Link></li>
              </ul>
            </div>
          </div>
        </div>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
