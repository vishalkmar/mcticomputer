import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa"; // For Icons
import { useNavigate } from "react-router-dom";

function OwnerHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Change this based on your auth logic
    const navigate = useNavigate();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        // Logic to log out the user
        // For example, clear user data from local storage or context
        localStorage.removeItem('key');
        setIsLoggedIn(false); // Update the state
        navigate("/"); // Redirect to login page
    };

    return (
        <>
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
                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavDropdown">
                        {/* Centered Links on Desktop */}
                        <ul className="navbar-nav mx-auto d-none d-md-flex align-items-center">
                            <li className="nav-item dropdown mx-3">
                                <Link
                                    className="nav-link dropdown-toggle text-light"
                                    to="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Add Student
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/newadmission">New Admission</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link text-light" to="/availablecourse">View Courses</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link text-light" to="/viewstudents">View Students</Link>
                            </li>
                            <li className="nav-item">
                                    <Link className="nav-link text-light" to="/uploadcertificate">Upload Certificate</Link>
                                </li>
                            {/* Logout Button (Desktop) */}
                            {isLoggedIn && (
                                <li className="nav-item mx-3">
                                    <button className="btn btn-danger" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </li>
                            )}
                        </ul>

                        {/* Mobile View Links and Login Button */}
                        <div
                            className={`d-md-none ${isOpen ? 'd-block' : 'd-none'}`}
                            style={{ zIndex: 1050 }}
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/ownerpage">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link
                                        className="nav-link dropdown-toggle text-light"
                                        to="#"
                                        id="navbarDropdownMobile"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Add Students
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMobile">
                                        <li><Link className="dropdown-item" to="/newadmission">New Admission</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/availablecourse">View Courses</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/viewstudents">View Students</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/uploadcertificate">Upload Certificate</Link>
                                </li>
                                {/* Logout Button (Mobile) */}
                                {isLoggedIn && (
                                    <li className="nav-item">
                                        <button className="btn btn-danger w-100" onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default OwnerHeader;
