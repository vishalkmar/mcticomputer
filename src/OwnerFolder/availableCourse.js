import React, { useState } from "react";
import OwnerHeader from "./OwnerHeader";

function AvailableCourse() {
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

  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <OwnerHeader />
      <div className="container-fluid bg-black">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center my-5">
              <input
                type="text"
                className="form-control"
                placeholder="Search Course"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center py-5 text-danger">Course Details</h2>
              <div
                className="table-responsive"
                style={{ maxHeight: "70vh", overflowY: "scroll" }}
              >
                <table className="table table-hover">
                  <thead
                    style={{
                      backgroundColor: "#ff4d4d", // danger red background
                      color: "#fff", // white text
                      boxShadow: "4px 4px 10px #aaa, -4px -4px 10px #fff",
                    }}
                  >
                    <tr>
                      <th>Course Name</th>
                      <th>Course Duration</th>
                      <th>Course Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCourses.length > 0 ? (
                      filteredCourses.map((course, index) => (
                        <tr
                          key={index}
                          style={{
                            background: "#f5f5f5",
                            boxShadow: "2px 2px 6px #aaa, -2px -2px 6px #fff",
                          }}
                        > 
                          <td>{course.name}</td>
                          <td>{course.duration}</td>
                          <td>{course.fee}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3" className="text-center text-white">
                          No courses found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AvailableCourse;
