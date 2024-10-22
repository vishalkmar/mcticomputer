import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import forgotimage from './images/svg/forgot.svg';
import axios from 'axios';

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // Initialize email state with an empty string
  const [loading, setLoading] = useState(false); // Initialize loading state

  // Input handler to update email state
  const inputHandler = (e) => {
    setEmail(e.target.value);
  };

  // Form handler for form submission
  const formHandler = (e) => {
    e.preventDefault();
    setLoading(true); // Show the loader when the form is submitted

    // Construct the data to send
    const data = { email };

    axios.post("http://localhost:8000/api/user/forgetpassword", data) // Use POST instead of PUT
      .then((res) => {
        console.log("Response:", res.data);
        alert("A New Password has been sent to your email.");
        navigate("/login");
      })
      .catch((error) => {
        console.log("Error:", error.response?.data || error.message);
        alert("Error in Sending Email");
      })
      .finally(() => {
        setLoading(false); // Hide the loader after email is sent or error occurs
      });
  };

  return (
    <div className="container-fluid bg-black" style={{ minHeight: '100vh' }}>
      {/* Loader Section */}
      {loading && (
        <div className="d-flex justify-content-center align-items-center position-fixed w-100 h-100" style={{ top: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: 9999 }}>
          <div className="spinner-border text-light" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <div className="container py-3">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img src={forgotimage} alt='img not found' className='w-100 object-fit-cover'/>
          </div>
          <div className="col-md-6" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div className="card" style={{
              borderRadius: '20px',
              boxShadow: '20px 20px 60px #1c1c1c, -20px -20px 60px #252525',
              width: '100%',
              maxWidth: '400px'
            }}>
              <div className="card-body">
                <h2 className="text-center text-danger">Forgot Password</h2>
                <form onSubmit={formHandler}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={inputHandler}
                      style={{
                        borderRadius: '10px',
                        backgroundColor: '#1c1c1c',
                        color: 'white',
                        boxShadow: 'inset 5px 5px 10px #121212, inset -5px -5px 10px #292929'
                      }}
                    />
                  </div>
                  <button type="submit" className="btn btn-danger w-100 my-3" style={{
                    borderRadius: '10px',
                    boxShadow: '5px 5px 10px #121212, -5px -5px 10px #ff4d4d'
                  }}>
                    Send Mail
                  </button>
                </form>
                <div className="d-flex justify-content-between mt-3">
                  <Link to="/login">Back to Login</Link>
                  <button className="btn bg-black text-white" onClick={() => navigate("/login")}>Login</button>
                </div>
              </div>
            </div>
          </div>   
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
