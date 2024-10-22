import { Link } from "react-router-dom";
import Header from "./header";
import AllCards from "./allcarddata";
import { useNavigate } from "react-router-dom";
import HoverCard from "./teamcard";
import Footer from "./footer";
import tanveer from "./images/team/taveerSir.jfif";
import mam from './images/team/mam.jfif';
import vishal from './images/team/vishal.jpg';
import cone from './images/team/imone.jpg';
import ctwo from './images/team/imtwo.jpg';
import cthree from './images/team/imthree.jpg';
import cfour from './images/team/imgfour.jpg';
import cfiveimage from './images/team/ifive.jpg';

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <Header />

            <div className="container-fluid m-0 p-0">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></li> {/* Added for the 5th slide */}
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={cone} alt="First slide" style={{ objectFit: 'cover', height: '90vh' }} />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={ctwo} alt="Second slide" style={{ objectFit: 'cover', height: '90vh' }} />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={cthree} alt="Third slide" style={{ objectFit: 'cover', height: '90vh' }} />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={cfour} alt="Fourth slide" style={{ objectFit: 'cover', height: '90vh' }} />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={cfiveimage} alt="Fifth slide" style={{ objectFit: 'cover', height: '90vh' }} /> {/* Ensure the image is correct */}
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="container-fluid py-5 bg-black text-white">
                <div className="container bg-black">
                    <div className="row d-flex flex-row justify-content-between py-3">
                        <div className="col-auto">
                            <h2>Our Popular Courses</h2>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-danger text-light rounded" onClick={() => { navigate("/totalcourseservice") }}>All Courses</button>
                        </div>
                    </div>
                </div>
            </div>
            <AllCards />
            <div className="container-fluid py-2 bg-black text-white">
                <div className="container py-5 bg-black">
                    <div className="row d-flex flex-row justify-content-around py-3">
                        <h2 className="text-center">Meet Our Team</h2>
                        <p className="text-center">A dedicated group of professionals committed to delivering excellence and innovation.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-black py-4">
                <div className="container py-4">
                    <div className="row g-4">
                        <HoverCard
                            image={tanveer}
                            title="Tanveer Sir"
                            description="Master in Accounting"
                            link="https://www.instagram.com/mcti_computer_institute/"
                        />
                        <HoverCard
                            image={mam}
                            title="Gunjan Rajput"
                            description="Front Desk Manager"
                            link="https://www.instagram.com/mcti_computer_institute/"
                        />
                        <HoverCard
                            image={vishal}
                            title="Vishal Kumar"
                            description="software Engineer"
                            link="https://www.linkedin.com/in/vishal-kumar-839490327/"
                        />
                    </div>
                </div>
            </div>

            <Footer />

            <style jsx>{`
                @media (max-width: 768px) {
                    .carousel-inner {
                        height: 60vh; /* Adjust height for mobile */
                    }
                    .carousel-item img {
                        height: 60vh; /* Ensure images fit within mobile height */
                        object-fit: cover; /* Maintain aspect ratio */
                    }
                    .carousel-control-prev,
                    .carousel-control-next {
                        background-color: rgba(0, 0, 0, 0.5); /* Make controls more visible */
                        border-radius: 50%; /* Rounded buttons */
                    }
                }
                @media (min-width: 769px) {
                    .carousel-item img {
                        height: 90vh; /* Maintain height for larger devices */
                    }
                }
            `}</style>
        </>
    );
}

export default Home;
