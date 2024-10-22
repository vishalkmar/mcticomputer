import Header from "./header";
import Footer from "./footer";
import { useState } from "react";
import axios from "axios";
import contimage from './images/svg/cont.svg';

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [phoneValid, setPhoneValid] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loader state

  const inputHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const formHandler = (e) => {
    e.preventDefault();
    const apikey = "9C983240343840CE8E25953A1CF146C6"; // your API key for phone verification

    // Start loader
    setLoading(true);
    setErrorMessage(""); // Clear any previous error message

    // Step 1: Make a request to verify the phone number
    axios
      .get(
        `https://api.veriphone.io/v2/verify?phone=${contact.phone}&key=${apikey}`
      )
      .then((response) => {
        console.log(response);
        if (response.data.phone_valid) {
          // Phone is valid, proceed to submit form data
          setPhoneValid(true);
          alert("Phone number is valid");

          // Step 2: Submit the form data to your server or API
          axios
            .post("http://localhost:8000/api/user/mailregister", contact)
            .then((response) => {
              console.log("Email sent successfully:", response.data);
              alert("Email sent successfully");
            })
            .catch((error) => {
              console.error("Error submitting data:", error);
              setErrorMessage("Failed to submit the form. Please try again.");
              alert("Email not sent");
            })
            .finally(() => {
              setLoading(false); // Stop loader after email is sent or failed
            });
        } else {
          // Phone is invalid, show an error
          setPhoneValid(false);
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
      <div className="container-fluid p-0">
        <div
          className="d-flex flex-column justify-content-center align-items-center text-center"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1416335096/photo/businessman-hand-holding-smart-phone-with-icon-mobile-phone-mail-telephone-and-address.jpg?s=612x612&w=0&k=20&c=ajOYHJPqlaKZ04BeSf5m3MsuZ_YGyxrUqEGMaS1hGGk=')",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            height: "50vh",
            width: "100%",
            backgroundRepeat:"no-repeat"
          }}
        >
          <h1 className="text-danger display-4 font-weight-bold">
            Get in Touch with Us
          </h1>
          <p className="text-white lead">
            We're here to answer your questions and help you on your journey.
          </p>
        </div>
      </div>

      <div className="container-fluid py-5 bg-black">
        <div className="container">
          <div className="row rounded">
            <div className="col-md-6 d-flex justify-content-center align-items-center ">
              {/* Left Section */}

              <img src={contimage} alt=""/>


            </div>

            <div className="col-md-6 d-flex justify-content-center align-items-center py-sm-4">
              <form
                onSubmit={formHandler}
                className="p-5"
                style={{
                  background: "#333",
                  borderRadius: "30px",
                  boxShadow: "6px 6px 10px #222, -6px -6px 10px #444",
                  width: "100%",
                  maxWidth: "400px",
                }}
              >
                <h2 className="text-danger text-center mb-4">Contact Us</h2>
                {errorMessage && (
                  <p className="text-danger text-center">{errorMessage}</p>
                )}
                <div className="form-group">
                  <label htmlFor="name" className="text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                    value={contact.name}
                    onChange={inputHandler}
                    placeholder="Enter your name"
                    style={{
                      background: "#333",
                      color: "#fff",
                      border: "none",
                      borderRadius: "20px",
                      boxShadow:
                        "inset 4px 4px 8px #222, inset -4px -4px 8px #444",
                      padding: "10px 15px",
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    value={contact.email}
                    onChange={inputHandler}
                    placeholder="Enter your email"
                    style={{
                      background: "#333",
                      color: "#fff",
                      border: "none",
                      borderRadius: "20px",
                      boxShadow:
                        "inset 4px 4px 8px #222, inset -4px -4px 8px #444",
                      padding: "10px 15px",
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="text-white">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    maxLength={10}
                    required
                    pattern="^\d{10}$"
                    value={contact.phone}
                    onChange={inputHandler}
                    placeholder="Enter your phone number"
                    style={{
                      background: "#333",
                      color: "#fff",
                      border: "none",
                      borderRadius: "20px",
                      boxShadow:
                        "inset 4px 4px 8px #222, inset -4px -4px 8px #444",
                      padding: "10px 15px",
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject" className="text-white">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    required
                    value={contact.subject}
                    onChange={inputHandler}
                    name="subject"
                    placeholder="Subject"
                    style={{
                      background: "#333",
                      color: "#fff",
                      border: "none",
                      borderRadius: "20px",
                      boxShadow:
                        "inset 4px 4px 8px #222, inset -4px -4px 8px #444",
                      padding: "10px 15px",
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="query" className="text-white">
                    Query
                  </label>
                  <textarea
                    className="form-control"
                    id="query"
                    rows="3"
                    name="message"
                    required
                    value={contact.message}
                    onChange={inputHandler}
                    placeholder="Enter your query"
                    style={{
                      background: "#333",
                      color: "#fff",
                      border: "none",
                      borderRadius: "20px",
                      boxShadow:
                        "inset 4px 4px 8px #222, inset -4px -4px 8px #444",
                      padding: "10px 15px",
                    }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-danger btn-block my-2"
                  style={{
                    borderRadius: "20px",
                    padding: "10px 20px",
                    boxShadow: "4px 4px 8px #222, -4px -4px 8px #444",
                  }}
                >
                  Submit
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

export default Contact;
