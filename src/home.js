import { Link } from "react-router-dom";
import Header from "./header";
import AllCards from "./allcarddata";
import { useNavigate } from "react-router-dom";
import HoverCard from "./teamcard";
import Footer from "./footer";

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
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://thumbs.dreamstime.com/b/cheerful-male-student-searching-website-education-info-studying-e-learning-via-laptop-application-happy-caucasian-man-327092506.jpg" alt="First slide" style={{ objectFit: 'cover', height: '90vh' }} />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://img.freepik.com/free-photo/creative-people-working-together_23-2147663776.jpg" alt="Second slide" style={{ objectFit: 'cover', height: '90vh' }} />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://media.istockphoto.com/id/77930942/photo/four-businesspeople-in-office-applauding.jpg?s=612x612&w=0&k=20&c=ZviiS-eEOnPH_fOJ9McW7q-hlw2PxypBvoIcuuFBIsQ=" alt="Third slide" style={{ objectFit: 'cover', height: '90vh' }} />
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
                            image="https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg"
                            title="Tarun Rajput"
                            description="Founder, NTMGS"
                            link="https://www.instagram.com/tarunrajputmodelmentor/"
                        />
                        <HoverCard
                            image="https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg"
                            title="Tarun Rajput"
                            description="Founder, NTMGS"
                            link="https://www.instagram.com/tarunrajputmodelmentor/"
                        />
                        <HoverCard
                            image="https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg"
                            title="Tarun Rajput"
                            description="Founder, NTMGS"
                            link="https://www.instagram.com/tarunrajputmodelmentor/"
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
