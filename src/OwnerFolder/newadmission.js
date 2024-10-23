import React, { useState } from "react";
import OwnerHeader from "./OwnerHeader";
import regiserimage from '../images/svg/reg.svg';
import axios from "axios";

function NewAdmission() {
  const courses = [
    { name: "E-Accounting", duration: "6 Months", fee: "Rs.9000" },
    { name: "Advanced Excel", duration: "3 Months", fee: "Rs.4500" },
    { name: "Tally Prime", duration: "4 Months", fee: "Rs.6000" },
    { name: "Busy Software", duration: "3 Months", fee: "Rs.4500" },
    { name: "Basic Computer", duration: "3 Months", fee: "Rs.3000" },
    { name: "Data Entry", duration: "6 Months", fee: "Rs.8000" },
    { name: "ADCA (Advance Diploma in Computer Application)", duration: "15 Months", fee: "Rs.20000" },
    { name: "CCC (Course On Computer Concept)", duration: "3 Months", fee: "Rs.5000" },
    { name: "Bcc (Basic Computer Course)", duration: "3 Months", fee: "Rs.5000" },
    { name: "Acc (Awareness in Computer Concept)", duration: "3 Months", fee: "Rs.5000" },
    { name: "O-Level", duration: "1 Year", fee: "Rs.25000" },
    { name: "A-Level", duration: "2 Years", fee: "Rs.40000" },
    { name: "B-Level", duration: "3 Years", fee: "Rs.70000" },
    { name: "C-Level", duration: "2-3 Years", fee: "Rs.60000" },
    { name: "CHM (Computer Hardware Maintenance)", duration: "6 Months", fee: "Rs.8000" },
    { name: "Graphic Design", duration: "6 Months", fee: "Rs.8000" },
    { name: "Web Design", duration: "6 Months", fee: "Rs.10000" },
    { name: "Full Stack Web Development", duration: "1 Year", fee: "Rs.24000" },
    { name: "MERN STACK", duration: "8 Months", fee: "Rs.20000" },
    { name: "Mean Stack", duration: "8 Months", fee: "Rs.20000" },
    { name: "Computer Networking", duration: "5 Months", fee: "Rs.8000" },
    { name: "Dbms (Database Management)", duration: "5 Months", fee: "Rs.8000" },
    { name: "Core Java", duration: "6 Months", fee: "Rs.10000" },
    { name: "Python", duration: "6 Months", fee: "Rs.10000" },
    { name: "C Programming", duration: "5 Months", fee: "Rs.6000" },
    { name: "CPP C++", duration: "4 Months", fee: "Rs.6000" },
    { name: "DSA Data Structure & Algorithm", duration: "6 Months", fee: "Rs.9000" },
    { name: "JavaScript", duration: "6 Months", fee: "Rs.8000" },
    { name: "React", duration: "3 Months", fee: "Rs.5000" },
    { name: "Bootstrap", duration: "2 Months", fee: "Rs.5000" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    phone: "",
    email: "",
    timing: "",
    course: "",
  });

  const [loading, setLoading] = useState(false); // Loader state

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (/^\d{0,10}$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === "pinCode") {
      if (/^\d*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Show loader when submission starts

    const formattedDate = formData.dob.split("-").reverse().join("/");

    const updatedFormData = { ...formData, dob: formattedDate };

    axios.post("https://mcticomputerbackend.onrender.com/api/user/newuser", updatedFormData)
      .then((res) => {
        console.log(res.data);
        setLoading(false); // Hide loader after successful submission
        alert("Student Registered Successfully");
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Hide loader on error
        alert("Student not registered / Email Already exist");
      });
  };

  const formStyle = {
    background: "#1b1b1b",
    boxShadow: "8px 8px 16px #0d0d0d, -8px -8px 16px #2b2b2b",
    padding: "30px",
    borderRadius: "12px",
    color: "#fff",
  };

  const inputStyle = {
    background: "#1b1b1b",
    boxShadow: "inset 4px 4px 8px #0d0d0d, inset -4px -4px 8px #2b2b2b",
    border: "none",
    color: "#fff",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
  };

  const labelStyle = {
    color: "#fff",
    marginBottom: "5px",
    display: "block",
  };

  const btnStyle = {
    background: "#ff4d4d",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "10px",
    boxShadow: "4px 4px 10px #0d0d0d, -4px -4px 10px #2b2b2b",
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
    <>
      <OwnerHeader />

      {loading && (
        <div style={loaderStyle}>
          <div className="spinner-border text-primary" role="status" style={{ width: '5rem', height: '5rem' }}>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      <div className={`container-fluid bg-black ${loading ? 'd-none' : ''}`}>
        <div className="container">
          <h2 className="text-center text-danger py-3">Student Registration Form</h2>
          <div className="row justify-content-center py-5">
            <div className="col-md-6">
              <img src={regiserimage} alt="img not found" className="w-100 object-fit-cover" />
            </div>
            <div className="col-md-6">
              <form style={formStyle} onSubmit={handleSubmit}>
                <h2 className="text-center text-danger mb-4">Enquiry Form</h2>

                <div className="row">
                  <div className="col-md-6">
                    <label style={labelStyle}>Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      style={inputStyle}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6">
                    <label style={labelStyle}>Father's Name</label>
                    <input
                      type="text"
                      required
                      name="fatherName"
                      placeholder="Father's Name"
                      value={formData.fatherName}
                      onChange={handleChange}
                      style={inputStyle}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <label style={labelStyle}>Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      required
                      value={formData.dob}
                      onChange={handleChange}
                      style={inputStyle}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6">
                    <label style={labelStyle}>Address</label>
                    <input
                      type="text"
                      name="address"
                      required
                      placeholder="Address"
                      value={formData.address}
                      onChange={handleChange}
                      style={inputStyle}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <label style={labelStyle}>City</label>
                    <input
                      type="text"
                      required
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                      style={inputStyle}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6">
                    <label style={labelStyle}>State</label>
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <label style={labelStyle}>Pin Code</label>
                    <input
                      type="text"
                      name="pinCode"
                      required
                      placeholder="Pin Code"
                      value={formData.pinCode}
                      onChange={handleChange}
                      style={inputStyle}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6">
                    <label style={labelStyle}>Phone No</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Phone No"
                      value={formData.phone}
                      onChange={handleChange}
                      style={inputStyle}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <label style={labelStyle}>Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      style={inputStyle}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6">
                    <label style={labelStyle}>Timing</label>
                    <input
                      type="text"
                      name="timing"
                      placeholder="Timing"
                      value={formData.timing}
                      onChange={handleChange}
                      style={inputStyle}
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <label style={labelStyle}>Select Course</label>
                <select
                  name="course"
                  required
                  value={formData.course}
                  onChange={handleChange}
                  style={inputStyle}
                  className="form-control"
                >
                  <option value="">Select Course</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course.name}>
                      {course.name}
                    </option>
                  ))}
                </select>

                <div className="text-center mt-4">
                  <button type="submit" style={btnStyle}>
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewAdmission;
