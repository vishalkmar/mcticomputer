import React from 'react';
import './InfoCard.css'; // Ensure this file exists for custom styles
import { Link } from 'react-router-dom';

const HoverCard = ({ image, title, description, link }) => {
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4"> {/* Add margin bottom for spacing */}
      <div className="d-flex flex-column align-items-center card-container"> {/* Added class for styling */}
        <div className="pt-4 px-3 border-top border-bottom border-light w-100 mx-2">
          <div className="position-relative w-100">
            <img src={image} alt={title} className="img-fluid card-image" /> {/* Added class for responsive image */}
            <div className="d-flex justify-content-center align-items-center position-absolute top-0 w-100 h-100 bg-dark opacity-0 hover-opacity-75">
              <div className="cursor-pointer">
                <Link to={link}>
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG Path Data */}
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <h4 className="text-center mt-3 fs-4 fw-semibold text-light">{title}</h4>
          <div className="pb-4 px-3 mt-4 border-bottom border-light w-100 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={3} height={31} viewBox="0 0 3 31" fill="none">
              <line x1="1.5" y1="-4.88672e-08" x2="1.5" y2={31} stroke="#4338CA" strokeWidth={3} />
            </svg>
            <h5 className="mt-2 fs-5 text-light">{description}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
