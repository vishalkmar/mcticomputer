import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import loginimage from './images/svg/login.svg';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();

  // State for username and password
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const [loading, setLoading] = useState(false); // Loader state

  // Input handler to update state
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Form handler for form submission
  const formHandler = (e) => {
    e.preventDefault();
    setLoading(true); // Show loader when submission starts

    axios.post("https://mcticomputerbackend.onrender.com/api/user/login", credentials)
      .then((res) => {
        alert("You are successfully logged in!");
        console.log(res.data);

        // Store the full user data (including token) in localStorage
        localStorage.setItem('user', JSON.stringify(res.data.user));

        // Redirect to the home page
        navigate('/studentdashboard');
      })
      .catch((error) => {
        alert("Login failed. Please check your username or password.");
        console.error(error);
      })
      .finally(() => {
        setLoading(false); // Hide loader after the request completes
      });
  };

  const loaderStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000, // Ensure it appears above other content
  };

  return (
    <div className="container-fluid bg-black" style={{ minHeight: '100vh' }}>
      {loading && (
        <div style={loaderStyle}>
          <div className="spinner-border text-primary" role="status" style={{ width: '5rem', height: '5rem' }}>
            
          </div>
        </div>
      )}
      <div className="container py-3">
        <div className="row d-flex justify-content-center my-5 py-5">
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
                <h2 className="text-center text-danger">Student Login</h2>
                <form onSubmit={formHandler}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      id="username"
                      required
                      placeholder="Enter your username"
                      value={credentials.username}
                      onChange={inputHandler}
                      style={{
                        borderRadius: '10px',
                        backgroundColor: '#1c1c1c',
                        color: 'white',
                        boxShadow: 'inset 5px 5px 10px #121212, inset -5px -5px 10px #292929'
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      name="password"
                      required
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      value={credentials.password}
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
                    Login
                  </button>
                </form>
                <div className="d-flex justify-content-between mt-3">
                  <Link to="/forgot">Forgot Password?</Link>
                  <button className="btn bg-black text-white" onClick={() => navigate("/")}>Back</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img src={loginimage} alt='img not found' className='w-100 object-fit-cover' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
