import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaWhatsapp, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaClock } from "react-icons/fa"; // For Icons
import { useNavigate } from "react-router-dom";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const navigate = useNavigate();

    return (
        <>
            <div className="container-fluid bg-danger">
                <div className="container">
                    <div className="row justify-content-between align-items-center ">
                        {/* First Column: Email and Phone */}
                        <div className="col-md-5 d-none d-md-flex nav navbar justify-content-start align-items-center">
                            <Link to="mailto:vk722413@gmail.com" className="text-light me-2 nav-item text-decoration-none">
                                <FaEnvelope size={18} /> &nbsp; Email: mcticomputeredu@gmail.com
                            </Link>
                            <Link to="tel:+919891338787" className="text-light me-2 nav-item text-decoration-none">
                                <FaPhone size={18} />&nbsp; Call: +91 989 13 38 787
                            </Link>
                        </div>
                        
                        {/* Second Column: Opening Hours and Social Media */}
                        <div className="col-md-4 d-none d-md-flex nav navbar align-items-center justify-content-end">
                            <Link to="#" className="text-light me-2 text-decoration-none">
                                <FaClock size={20} />&nbsp; Opening: 7:00am - 8:00pm
                            </Link>
                            <Link to="https://wa.me/9891338787" className="text-light me-2">
                                <FaWhatsapp size={20} />
                            </Link>
                            <Link to="https://www.instagram.com/mcti_computer_institute/" className="text-light me-2">
                                <FaInstagram size={20} />
                            </Link>
                            <Link to="https://www.linkedin.com/in/vishal-kumar-839490327/" className="text-light me-2">
                                <FaLinkedin size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-md bg-black navbar-dark sticky-top">
                <div className="container">
                    {/* Logo */}
                    <Link className="navbar-brand" to="/">
                        <img
                            src="https://dynamic.brandcrowd.com/preview/logodraft/df5efd7b-b0cd-4fd0-b95e-35950507f1f4/image/large.png"
                            width="80"
                            height="60"
                            alt="Logo"
                        />
                    </Link>

                    {/* Hamburger Icon */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                        onClick={toggleNavbar}
                    >
                        <FaBars className="text-light" size={30} />
                    </button>

                    {/* Links and Menu */}
                    <div
                        className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
                        id="navbarNavDropdown"
                    >
                        {/* Centered Links on Desktop */}
                        <ul className="navbar-nav mx-auto d-none d-md-flex align-items-center">
                            <li className="nav-item mx-3">
                                <Link className="nav-link text-light" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown mx-3">
                                <Link
                                    className="nav-link dropdown-toggle text-light"
                                    to="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Course
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/niletcourse">Nilet Courses</Link></li>
                                    <li><Link className="dropdown-item" to="/basiccourse">Basic Computer Courses</Link></li>
                                    <li><Link className="dropdown-item" to="/advancecourse">Advanced Computer Courses</Link></li>
                                    <li><Link className="dropdown-item" to="/totalcourseservice">View All Courses</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link text-light" to="/about">About</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link text-light" to="/contact">Contact Us</Link>
                            </li>
                        </ul>

                        {/* Social Media Icons and Login Button (desktop) */}
                        <div className="d-none d-md-flex align-items-center">
                            <li className="dropdown">
                                <button
                                    className="dropdown-toggle btn bg-light" 
                                    id="navbarDropdown"
                                  
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                   Login
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/adminlogin">ADMIN LOGIN</Link></li>
                                    <li><Link className="dropdown-item" to="/login">STUDENT LOGIN</Link></li>
                                </ul>
                            </li>
                        </div>

                        {/* Mobile View Links and Login Button */}
                        <div
                            className={`d-md-none ${isOpen ? 'd-block' : 'd-none'}`}
                            style={{ zIndex: 1050 }}
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link
                                        className="nav-link dropdown-toggle text-light"
                                        to="#"
                                        id="navbarDropdownMobile"
                                      
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Course
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMobile">
                                        <li><Link className="dropdown-item" to="/niletcourse">Nilet Courses</Link></li>
                                        <li><Link className="dropdown-item" to="/basiccourse">Basic Computer Courses</Link></li>
                                        <li><Link className="dropdown-item" to="/advancecourse">Advanced Computer Courses</Link></li>
                                        <li><Link className="dropdown-item" to="/totalcourseservice">View All Courses</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/contact">Contact Us</Link>
                                </li>
                                <li className="nav-item dropdown w-100">
                                    <Link
                                        className="btn btn-light w-100 dropdown-toggle"
                                        to="#"
                                        id="loginDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Login
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="loginDropdown">
                                        <li><Link className="dropdown-item" to="/adminlogin">ADMIN LOGIN</Link></li>
                                        <li><Link className="dropdown-item" to="/login">STUDENT LOGIN</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
