import Header from "./header";
import Footer from "./footer";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import enrollimage from './images/svg/enrollimage.svg'

function EnrollMent() {
  const { title } = useParams();
  const [enrolldata, setenrolldata] = useState({
    name: "",
    email: "",
    phone: "",
    course: title,
  });
  const [phonevalid, setphonevalid] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loader state

  const inputhandler = (e) => {
    setenrolldata({ ...enrolldata, [e.target.name]: e.target.value });
  };

  const formhandler = (e) => {
    e.preventDefault();
    const apikey = "9C983240343840CE8E25953A1CF146C6"; // your API key for phone verification

    // Start loader
    setLoading(true);
    setErrorMessage(""); // Clear any previous error message

    // Step 1: Make a request to verify the phone number
    axios
      .get(`https://api.veriphone.io/v2/verify?phone=${enrolldata.phone}&key=${apikey}`)
      .then((response) => {
        console.log(response);
        if (response.data.phone_valid) {
          // Phone is valid, proceed to submit form data
          setphonevalid(true);
          alert("Phone number is valid");

          // Step 2: Submit the form data to your server or API
          axios
            .post("http://localhost:8000/api/user/enrollregister", enrolldata)
            .then((response) => {
              console.log("Enrollment data submitted successfully:", response.data);
              alert("Email sent successfully");
            })
            .catch((error) => {
              console.error("Error submitting enrollment data:", error);
              setErrorMessage("Failed to submit enrollment data. Please try again.");
              alert("Email not sent");
            })
            .finally(() => {
              setLoading(false); // Stop loader after email is sent or failed
            });
        } else {
          // Phone is invalid, show an error
          setphonevalid(false);
          setErrorMessage("Phone number is not valid. Please check and try again.");
          alert("Invalid phone number. Try again.");
          setLoading(false); // Stop loader if phone number is invalid
        }
      })
      .catch((error) => {
        console.error("Phone verification failed:", error);
        setErrorMessage("Failed to verify phone number. Please try again.");
        alert("Please enter a valid phone number.");
        setLoading(false); // Stop loader on failure
      });
  };

  return (
    <>
      {loading && (
        // Full-screen loader overlay
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999, // Ensure it's on top of everything
            flexDirection: "column", // Ensure the spinner and text are in column layout
          }}
        >
          <div
            className="spinner-border"
            role="status"
            style={{
              width: "80px", // Increased size
              height: "80px",
              borderWidth: "8px", // Thicker border
            }}
          >
            <span className="sr-only">Loading...</span>
          </div>
          <div
            style={{
              color: "#fff",
              marginTop: "15px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Loading...
          </div>
        </div>
      )}

      <Header />
      <h2 className="text-center text-white bg-black py-5">Enrollment form for {title} course</h2>
      <div className="container-fluid bg-black">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center ">
                 <img src={enrollimage} alt="img not found " className="w-100 object-fit-cover"/>

            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center borde my-5 my-md-auto">
              <form
                onSubmit={formhandler}
                className="p-5"
                style={{
                  background: "#333",
                  borderRadius: "30px",
                  boxShadow: "6px 6px 10px #222, -6px -6px 10px #444",
                  width: "100%",
                  maxWidth: "400px",
                }}
              >
                <h2 className="text-danger text-center mb-4">{title}</h2>
                <div className="form-group">
                  <label htmlFor="name" className="text-white">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                    onChange={inputhandler}
                    placeholder="Enter your name"
                    style={{
                      background: "#333",
                      color: "#fff",
                      border: "none",
                      borderRadius: "20px",
                      boxShadow: "inset 4px 4px 8px #222, inset -4px -4px 8px #444",
                      padding: "10px 15px",
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="text-white">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    onChange={inputhandler}
                    placeholder="Enter your email"
                    style={{
                      background: "#333",
                      color: "#fff",
                      border: "none",
                      borderRadius: "20px",
                      boxShadow: "inset 4px 4px 8px #222, inset -4px -4px 8px #444",
                      padding: "10px 15px",
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="text-white">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    required
                    pattern="^\d{10}$"
                    maxLength={10}
                    onChange={inputhandler}
                    placeholder="Enter your phone number"
                    style={{
                      background: "#333",
                      color: "#fff",
                      border: "none",
                      borderRadius: "20px",
                      boxShadow: "inset 4px 4px 8px #222, inset -4px -4px 8px #444",
                      padding: "10px 15px",
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="course" className="text-white">Course Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="course"
                    name="course"
                    value={title}
                    readOnly
                    style={{
                      background: "#333",
                      color: "#fff",
                      border: "none",
                      borderRadius: "20px",
                      boxShadow: "inset 4px 4px 8px #222, inset -4px -4px 8px #444",
                      padding: "10px 15px",
                    }}
                  />
                </div>
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                <button
                  type="submit"
                  className="btn btn-danger btn-block my-2"
                  style={{
                    borderRadius: "20px",
                    padding: "10px 20px",
                    boxShadow: "4px 4px 8px #222, -4px -4px 8px #444",
                  }}
                >
                  Enroll
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EnrollMent;
