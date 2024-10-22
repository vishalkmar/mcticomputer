import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {

  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  // Fetch user data from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    } else {
      // If no user data found, redirect to login
      navigate('/login');
    }
  }, [navigate]);

  // If no userData, show a loading message
  if (!userData) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-primary text-white text-center">
              <h2>Student Dashboard</h2>
            </div>
            <div className="card-body">
              <div className="text-center mb-4">
                <img
                  src={`https://ui-avatars.com/api/?name=${userData.name}&size=128`}
                  alt="User Avatar"
                  className="rounded-circle"
                />
                <p className='text-center'>{userData.username}</p>
              </div>
              <table className="table table-bordered table-striped">
                <tbody>
                  <tr>
                    <th scope="row">Name</th>
                    <td>{userData.name}</td>
                  </tr>
                  <tr>
                    <th scope="row">Email</th>
                    <td>{userData.email}</td>
                  </tr>
                  <tr>
                    <th scope="row">Course</th>
                    <td>{userData.course}</td>
                  </tr>
                  <tr>
                    <th scope="row">Phone NO</th>
                    <td>{userData.phone}</td>
                  </tr>
                  <tr>
                    <th scope="row">Address</th>
                    <td>{userData.address} {userData.city} {userData.state} {userData.pinCode}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer text-center">
              <button
                className="btn btn-danger"
                onClick={() => {
                  localStorage.removeItem('user');
                  navigate('/login');
                }}
              >
                Logout
              </button>

              {/* Check if certificate path exists and show image + download button */}
              {userData.certificatePath && (
                <>
                  <h2 className='text-center fw-bolder my-3'>Your Result Will Appear Here</h2>
                  <img
                    src={userData.certificatePath}
                    alt='Certificate'
                    style={{ width: '300px', height: 'auto' }}
                    className='mb-3'
                  />
                  <a
                    href={userData.certificatePath}
                    download="certificate.jpg"
                    className="btn btn-primary my-3 "
                  >
                    Download Certificate
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
