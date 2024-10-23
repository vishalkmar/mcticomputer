import OwnerHeader from "./OwnerHeader";
import axios from "axios";
import { useEffect, useState } from "react";

function ViewStudents() {
  const [students, setStudents] = useState([]); // State to store students data
  const [searchTerm, setSearchTerm] = useState(""); // State to filter/search students

  useEffect(() => {
    // Fetch students when the component loads
    axios
      .get("https://mcticomputerbackend.onrender.com/api/user/getuser")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  }, []);

  // Handle Delete function
  const handleDelete = async (id) => {
    console.log("Deleting user with ID:", id); // Debugging: Log ID to be deleted
    const check = window.confirm("Are you sure you want to delete?");
    
    if (check) {
      try {
        const response = await axios.delete(`https://mcticomputerbackend.onrender.com/api/user/deleteuser/${id}`);
        console.log("Delete response:", response.data); // Debugging: Log the server response
  
        // Update the state after deletion
        setStudents(students.filter((student) => student._id !== id));
        alert("Student deleted successfully");
      } catch (error) {
        console.error("Error deleting user:", error.response ? error.response.data : error);
        alert("Error deleting student");
      }
    } else {
      console.log("Deletion canceled");
    }
  };
  

  // Filter the students based on the search term
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <OwnerHeader />

      <div className="container-fluid bg-black">
        <div className="container py-3">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center text-danger py-3">View Students List</h2>
              <input
                type="text"
                className="form-control my-5 w-50 mx-auto"
                placeholder="Search by name"
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  borderRadius: "10px",
                  boxShadow: "5px 5px 5px #ccc, -5px -5px 50px #fff",
                  padding: "10px",
                }}
              />
            </div>
          </div>

          <div className="row pb-5">
            <div className="col-md-12">
              <div
                style={{
                  maxHeight: "400px",
                  overflowY: "auto",
                  borderRadius: "5px",
                  boxShadow: "5px 5px 5px #ccc, -5px -5px 5px #fff",
                  padding: "20px",
                  backgroundColor: "#f0f0f0",
                }}
              >
                <table className="table table-hover table-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>DOB</th>
                      <th>Father's Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Course</th>
                      <th>Timing</th>
                      <th>Address</th>
                      <th>Remove Student</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents.map((student, index) => (
                      <tr key={index}>
                        <td>{student.name}</td>
                        <td>{student.dob}</td>
                        <td>{student.fatherName}</td>
                        <td>{student.email}</td>
                        <td>{student.phone}</td>
                        <td>{student.course}</td>
                        <td>{student.timing}</td>
                        <td>{student.address}</td>
                        <td>
                          <button
                            className="btn btn-danger text-white"
                            onClick={() => handleDelete(student._id)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
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

export default ViewStudents;
